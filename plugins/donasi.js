import fetch from 'node-fetch'
import fs from 'fs'
const {
    default: _makeWaSocket,
    makeWALegacySocket,
    proto,
    downloadContentFromMessage,
    jidDecode,
    areJidsSameUser,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    WAMessageStubType,
    extractMessageContent
} = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn }) => {
    let teks = `
┌─「 Donasi 」
├ GoPay: 628112958665
├ Dana: 628112958665
├ OVO: 628112958665
├ Pulsa (XL): 6281943265086
└────`.trim()
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./src/hiroshi.jpg')}, { upload: conn.waUploadToServer })
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedMessage: {
                imageMessage: message.imageMessage,
                hydrayedContentText: teks,
                hydratedFooterText: watermark, 
                hydratedButtons: [{
                    urlButton: {
                        displayText: 'Saweria',
                        url: 'https://saweria.co/FadliStudio'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'Creator',
                        id: '.menu'
                    }
                }]
            }
        }
    }), { usedJid: m.sender, quoted: m})
    return await conn.relayMessage(
        m.chat,
        template.message,
        { messageId: template.key.id }
    )
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler