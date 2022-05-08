import { extract } from 'zs-extract'
import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL Zippyshare yang ingin di download!\n\nContoh: ${usedPrefix + command} https://www96.zippyshare.com/v/Sw73EZBH/file.html`
    try {
        let info = await extract(text)
        console.log(info)
        await conn.sendFile(m.chat, info.download, info.filename, null, m, null, { asDocument: true})
    } catch (e) {
        throw `Error`
    }
}
handler.tags = ['downloader']
handler.help = ['zippyshare']
handler.command = /^zippyshare|zs$/i
export default handler