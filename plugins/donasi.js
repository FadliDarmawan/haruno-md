import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    let teks = `
${conn.top('Donasi')}
├ Biar bot nya jalan terus hehe
├ Dana: 628112958665
├ OVO: 628112958665
├ GoPay: 628112958665
├ Pulsa: 6281943265086
│
${conn.bottom('Haruno')}`.trim()
    const message = {
        image: { url: image},
        jpegThumbnail: await(await fetch(image)).buffer(),
        caption: teks,
        footer: watermark,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Saweria',
                    url: 'https://saweria.co/FadliStudio'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Owner',
                    id: '.owner'
                }
            }
        ]
    }
    return await conn.sendMessage(m.chat, message, { quoted: m })
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler