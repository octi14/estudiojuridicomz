/**
 * Genera public/apple-touch-icon.png (180×180) desde el logo SVG.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const srcSvg = join(root, 'assets/img/logo-hero.svg')
const out = join(root, 'public', 'apple-touch-icon.png')

await mkdir(join(root, 'public'), { recursive: true })
const buf = await sharp(srcSvg)
  .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toBuffer()

await writeFile(out, buf)
console.log('Written', out)
