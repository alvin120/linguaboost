// Serveur de développement local : sert les fichiers statiques et la route /api/professeur,
// comme le ferait Vercel. Usage : npm run dev  (clé dans .env : ANTHROPIC_API_KEY=...)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = path.dirname(fileURLToPath(import.meta.url));

// Charge .env sans dépendance (lignes CLE=valeur).
const fichierEnv = path.join(racine, '.env');
if (fs.existsSync(fichierEnv)) {
  for (const ligne of fs.readFileSync(fichierEnv, 'utf8').split(/\r?\n/)) {
    const m = ligne.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const { default: professeur } = await import('./api/professeur.js');

const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.md': 'text/plain; charset=utf-8' };
const PORT = Number(process.env.PORT) || 3000;

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/professeur') {
    let corps = '';
    for await (const morceau of req) corps += morceau;
    try { req.body = corps ? JSON.parse(corps) : {}; } catch { req.body = null; }
    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (obj) => { res.setHeader('Content-Type', 'application/json; charset=utf-8'); res.end(JSON.stringify(obj)); return res; };
    return professeur(req, res);
  }

  let chemin = path.normalize(decodeURIComponent(url.pathname)).replace(/^([/\\])+/, '');
  if (chemin === '' || chemin === '.') chemin = 'maquettes/accueil.html';
  const fichier = path.join(racine, chemin);
  const segments = chemin.split(/[\\/]/);
  if (!fichier.startsWith(racine) || segments.some((s) => s.startsWith('.') || s === 'node_modules' || s === 'api') ||!fs.existsSync(fichier) || fs.statSync(fichier).isDirectory()) {
    res.statusCode = 404; return res.end('Introuvable');
  }
  res.setHeader('Content-Type', types[path.extname(fichier)] || 'application/octet-stream');
  fs.createReadStream(fichier).pipe(res);
}).listen(PORT, () => {
  console.log(`LinguaBoost en local : http://localhost:${PORT}/maquettes/professeur.html`);
  if (!process.env.ANTHROPIC_API_KEY) console.log('⚠️  ANTHROPIC_API_KEY absente : créez un fichier .env (voir .env.example).');
});
