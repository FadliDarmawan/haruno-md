import { pinterest } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Example use ${usedPrefix + command} minecraft`
  const json = await pinterest(text)
  await conn.sendButtonImg(m.chat, 'Pinterest', watermark, await(await fetch(json.getRandom())).buffer(),[['Cari lagi', `.pinterest ${text}`]], m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i

export default handler