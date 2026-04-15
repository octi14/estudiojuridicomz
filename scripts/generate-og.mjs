/**
 * Regenera public/og-default.jpg (1200×630). Requiere: npm install -D sharp
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'public', 'og-default.jpg')

await mkdir(join(root, 'public'), { recursive: true })
const buf = await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: { r: 250, g: 248, b: 245 },
  },
})
  .jpeg({ quality: 88 })
  .toBuffer()

await writeFile(out, buf)
console.log('Written', out)
