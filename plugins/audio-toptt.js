import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `Reply audio atau video yang ingin dijadikan vn dengan caption ${usedPrefix + command}`
    let media = await q.download?.()
    if (!media) throw 'Maaf, terjadi error saat mengunduh media.'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw 'Maaf, terjadi error saat mengkonversi media.'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn <reply>']
handler.tags = ['audio']

handler.command = /^to(vn|(ptt)?)$/i

export default handler