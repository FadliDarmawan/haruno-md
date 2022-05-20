import xa from 'xfarr-api'
import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, args, command }) => {
    if(!args[0]) throw `Harap masukkan URL sebagai parameter!\n\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSe5pocWX/`
    try {
        let data = await xa.Tiktok(args[0])
        await conn.sendFile(m.chat, data.medias[2].url, 'tiktok.mp3', null, m, null, { mimetype: 'audio/mp4' })
        await conn.sendFile(m.chat, data.medias[1].url, 'tiktok.mp4', watermark, m)
    } catch (e) {
        let res = await fetch(global.API('xcod', '/api/download/tiktok', { url: args[0]}, 'apikey'))
        let json = await res.json()
        await conn.sendFile(m.chat, json.result.audio, 'tiktok.mp3', null, m, null, { mimetype: 'audio/mp4' })
        await conn.sendFile(m.chat, json.result.nowatermark, 'tiktok.mp4', watermark, m)
    }
}
handler.command = /^(tiktok|tk|tkdl|td)$/i
handler.tags = ['downloader']
handler.help = ['tiktok <url>']

export default handler