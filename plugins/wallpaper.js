import fetch from 'node-fetch'
import scrapertools from 'scraper-tools'
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan query wallpaper yang ingin dicari.\n\nContoh: ${usedPrefix + command} Bronya Zaychik`
    let result = await scrapertools.wallpaper.search(text)
    let pint = result.hasil[Math.floor(Math.random() * result.hasil.length)]
    await conn.sendButton(m.chat, 'Wallpaper!', watermark, await(await fetch(pint)).buffer(), [['Get again', `${usedPrefix + command} ${text}`]], m)
}
handler.command = /^(wallq|wallpaper)$/i
handler.tags = ['anime']
handler.help = ['wallq <query>']
export default handler