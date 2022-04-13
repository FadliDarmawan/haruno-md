import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `Reply video yang ingin dijadikan audio dengan caption ${usedPrefix + command}`
    let media = await q.download?.()
    if (!media) throw 'Maaf, terjadi error saat mengunduh media.'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'Maaf, terjadi error saat mengkonversi media menjadi audio.'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 <reply>']
handler.tags = ['audio']

handler.command = /^to(mp3|a(udio)?)$/i

export default handler