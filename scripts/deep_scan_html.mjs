import fs from 'fs';
import path from 'path';

const banned = [
  '光速云', '飞猫云', '微风网络', '暮光加速', '星岛梦', '二猫云', '无忧链接', '唯兔云',
  'Firefly', 'U1S1', '灵猫网络', '极连云', '光年梯', '一翻云', 'SOGO', '可信云',
  '速界', '闪跃', '全球云', '隐形人', '梯子云'
];

function scanHtml(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '_astro') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(scanHtml(full));
    } else if (entry.name.endsWith('.html')) {
      const txt = fs.readFileSync(full, 'utf-8');
      
      // check banned brands
      const foundBanned = banned.filter(b => txt.includes(b));
      
      // check 28/27家
      const foundNumbers = txt.match(/2[78]\s*家/g);

      // check tables
      let tableRows = 0;
      if (txt.includes('<table class="data-table')) {
        const tbody = txt.split('<tbody>')[1]?.split('</tbody>')[0] || '';
        tableRows = tbody.split('<tr>').filter(r => r.includes('<td')).length;
      }

      // check card count
      const cardMatches = [...txt.matchAll(/<span class="text-xs font-bold px-2 py-0\.5 rounded bg-slate-100 text-slate-700 font-mono">\s*(#[0-9]+)\s*<\/span>/g)];
      const cardCount = cardMatches.length;

      if (foundBanned.length > 0 || foundNumbers || (tableRows > 0 && tableRows !== 6) || (cardCount > 0 && cardCount !== 6)) {
        results.push({
          file: full,
          foundBanned,
          foundNumbers,
          tableRows,
          cardCount
        });
      }
    }
  }
  return results;
}

const res = scanHtml('.');
console.log('Anomalies in HTML files count:', res.length);
res.forEach(r => console.log(JSON.stringify(r)));
