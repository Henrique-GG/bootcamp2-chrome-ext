import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const dist = 'dist';

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);

// Copia arquivos essenciais (manifest, src, icons)
for (const f of ['manifest.json']) fs.copyFileSync(f, path.join(dist, f));
fs.cpSync('src', path.join(dist, 'src'), { recursive: true });
fs.cpSync('icons', path.join(dist, 'icons'), { recursive: true });


const output = fs.createWriteStream(path.join(dist, 'extension.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });
archive.directory(dist, false);
archive.pipe(output);

output.on('close', () => {
    console.log('Build gerado com sucesso.');
});

await archive.finalize();