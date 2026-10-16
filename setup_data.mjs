import fs from 'node:fs';
import path from 'node:path';

const SRC_DATA = 'c:/Users/Administrator/Desktop/jichangwiki.cc/src/data';
const PACK_DATA = 'c:/Users/Administrator/Desktop/jichangwiki.cc/planning_pack/data';

fs.mkdirSync(SRC_DATA, { recursive: true });

// Copy json data
fs.copyFileSync(path.join(PACK_DATA, 'brands.json'), path.join(SRC_DATA, 'services.json'));
fs.copyFileSync(path.join(PACK_DATA, 'content-map.json'), path.join(SRC_DATA, 'content-map.json'));
fs.copyFileSync(path.join(PACK_DATA, 'titles.json'), path.join(SRC_DATA, 'titles.json'));
fs.copyFileSync(path.join(PACK_DATA, 'url-mapping.json'), path.join(SRC_DATA, 'url-mapping.json'));
fs.copyFileSync(path.join(PACK_DATA, 'interlinking.json'), path.join(SRC_DATA, 'interlinking.json'));

console.log('Copied core JSON files to src/data/');
