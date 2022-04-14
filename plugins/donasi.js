let handler = async(m, { conn }) => {
    let teks = `
┌─「 Donasi 」
├ GoPay: 628112958665
├ Dana: 628112958665
├ OVO: 628112958665
├ Pulsa (XL): 6281943265086
└────`.trim()

    const templateButtons = [
        {index: 1, urlButton: {displayText: 'Saweria', url: 'https://saweria.co/FadliStudio'}},
        {index: 2, quickReplyButton: {displayText: 'Owner', id: '.owner'}}
    ]

    const buttonMessage = {
        text: teks,
        footer: watermark, 
        templateButtons: templateButtons,
        image: {url: image}
    }

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m})
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler