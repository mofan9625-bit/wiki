import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT_DIR = 'c:/Users/Administrator/Desktop/jichangwiki.cc';
const PACK_DIR = path.join(ROOT_DIR, 'planning_pack');

// Ensure clean directory
if (fs.existsSync(PACK_DIR)) {
  fs.rmSync(PACK_DIR, { recursive: true, force: true });
}
fs.mkdirSync(PACK_DIR, { recursive: true });
fs.mkdirSync(path.join(PACK_DIR, 'data'), { recursive: true });
fs.mkdirSync(path.join(PACK_DIR, 'specs', 'home'), { recursive: true });
fs.mkdirSync(path.join(PACK_DIR, 'specs', 'pillars'), { recursive: true });
fs.mkdirSync(path.join(PACK_DIR, 'specs', 'topics'), { recursive: true });
fs.mkdirSync(path.join(PACK_DIR, 'specs', 'clusters'), { recursive: true });

console.log('Building planning pack in:', PACK_DIR);
