let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));

let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'Reply pesan viewonce yang ingin dibuka.'
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Itu bukan pesan viewonce'
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption + `\n\n${watermark}`|| watermark, m)
    } else if (/image/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption + `\n\n${watermark}`|| watermark, m)
    }
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^readviewonce/i

export default handler