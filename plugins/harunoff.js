import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    try {
        let gc1 = '628112958665-1625393837@g.us'
        let gc2 = '628112958665-1628163967@g.us'
        let gc3 = '628112958665-1571053173@g.us'
        let _gc1 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc1)
        let _gc2 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc2)
        let _gc3 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc3)
        let caption = `
*Join juga group official Haruno Bot!*
Sekedar meramaikan, atau juga jika ada informasi mengenai bot.
*Group 1*
${_gc1}
*Group 2*
${_gc2}
*Group 3*
${_gc3}
Harap patuhi rules dan peraturan pada masing masing group ya! Terimakasih.
`.trim()
        await conn.reply(m.chat, caption, m, { contextInfo: {
            externalAdReply: {
                sourceUrl: 'https://youtu.be/JktyyWr1N6I',
                title: 'Rules',
                body: 'Haruno',
                thumbnailUrl: global.image
            }
        }})
    } catch (e) {
        let res = await fetch('https://raw.githubusercontent.com/FadliDarmawan/haruno-server/main/files/src.json')
        let json = await res.json()
        let tulisan = `
*Join juga group official Haruno Bot!*
Sekedar meramaikan, atau juga jika ada informasi mengenai bot.
*Group 1*
${json.links[0]}
*Group 2*
${json.links[1]}
*Group 3*
${json.links[2]}
Harap patuhi rules dan peraturan pada masing masing group ya! Terimakasih.
`.trim()
    await conn.reply(m.chat, tulisan, m, { contextInfo: {
        externalAdReply: {
            sourceUrl: 'https://youtu.be/JktyyWr1N6I',
            title: 'Rules',
            body: 'Haruno',
            thumbnailUrl: global.image
        }
    }})
    }
}
handler.help = ['groupofficial']
handler.tags = ['main']
handler.command = /^harunoff|gr(u|ou)(p|b)official|gcofficial$/i
export default handler