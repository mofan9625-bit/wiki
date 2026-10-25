import fs from "node:fs";
import path from "node:path";

const ENDPOINT = "https://api.indexnow.org/indexnow";
const HOST = "jichangwiki.cc";

function findKey() {
  const checkDirs = [path.resolve("public"), path.resolve(".")];
  for (const dir of checkDirs) {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      const match = files.find((file) => /^[a-f0-9]{32}\.txt$/i.test(file));
      if (match) {
        const key = path.basename(match, ".txt").toLowerCase();
        const content = fs.readFileSync(path.join(dir, match), "utf-8").trim();
        if (content.toLowerCase() === key) {
          return key;
        }
      }
    }
  }
  throw new Error("未找到有效的 32 位 IndexNow 密钥验证文件 (*.txt)");
}

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

function loadSitemapUrls(sitemapPath) {
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`未找到站点地图文件: ${sitemapPath}`);
  }
  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
  const urls = [
    ...new Set(
      [...sitemapContent.matchAll(/<loc>\s*([\s\S]*?)\s*<\/loc>/gi)].map((match) =>
        decodeXml(match[1].trim())
      )
    ),
  ];
  return urls;
}

async function submitBatch(host, key, keyLocation, urls, batchIndex, totalBatches) {
  console.log(`[IndexNow] 正在提交第 ${batchIndex + 1}/${totalBatches} 批 URL (共 ${urls.length} 条)...`);
  const payload = {
    host,
    key,
    keyLocation,
    urlList: urls,
  };

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  if (response.status === 200 || response.status === 202) {
    console.log(`✅ [IndexNow] 第 ${batchIndex + 1}/${totalBatches} 批提交成功！HTTP 状态码: ${response.status}`);
    return true;
  } else {
    throw new Error(
      `❌ [IndexNow] 提交失败: HTTP ${response.status} ${response.statusText}${
        responseText ? ` - ${responseText}` : ""
      }`
    );
  }
}

async function main() {
  console.log("================================================================================");
  console.log(" 🚀 开始向 IndexNow 协议推送站点 URL 更新");
  console.log("================================================================================\n");

  const key = findKey();
  const keyLocation = `https://${HOST}/${key}.txt`;
  console.log(` - 目标 Host: ${HOST}`);
  console.log(` - 验证 Key: ${key}`);
  console.log(` - Key Location: ${keyLocation}`);

  // 支持通过命令行指定单条 URL 提交: node scripts/submit-indexnow.mjs --url https://jichangwiki.cc/
  const args = process.argv.slice(2);
  let targetUrls = [];

  const urlArgIndex = args.indexOf("--url");
  if (urlArgIndex !== -1 && args[urlArgIndex + 1]) {
    targetUrls = [args[urlArgIndex + 1]];
    console.log(` - 模式: 单条 URL 提交 (${targetUrls[0]})`);
  } else {
    const sitemapPath = path.resolve(args[0] || (fs.existsSync("sitemap.xml") ? "sitemap.xml" : "public/sitemap.xml"));
    console.log(` - 读取 Sitemap: ${sitemapPath}`);
    targetUrls = loadSitemapUrls(sitemapPath);
    console.log(` - 解析获取到 URL 总数: ${targetUrls.length} 条`);
  }

  if (targetUrls.length === 0) {
    console.warn("⚠️ 没有需要提交的 URL，程序退出。");
    return;
  }

  // IndexNow 单次最大允许 10000 条
  const BATCH_SIZE = 10000;
  const batches = [];
  for (let i = 0; i < targetUrls.length; i += BATCH_SIZE) {
    batches.push(targetUrls.slice(i, i + BATCH_SIZE));
  }

  for (let i = 0; i < batches.length; i++) {
    await submitBatch(HOST, key, keyLocation, batches[i], i, batches.length);
  }

  console.log("\n================================================================================");
  console.log("🎉 IndexNow 推送任务全部完成！");
  console.log("================================================================================\n");
}

main().catch((err) => {
  console.error("\n❌ 推送执行失败:", err.message);
  process.exit(1);
});
