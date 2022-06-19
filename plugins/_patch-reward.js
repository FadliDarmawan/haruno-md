// import db from '../lib/database.js'
let handler = async(m, { conn }) => {
    let user = db.data.users[m.sender]
    if (!user.claimed) {
        conn.reply(m.chat, `Berikut ini hadiah Harunobot Patch 3.0:\nLimit: 160\nEXP: 1500\n\nTerimakasih!\n${watermark}`, m, { contextInfo: {
            externalAdReply: {
                sourceUrl: 'https://youtu.be/JktyyWr1N6I',
                title: 'Update 3.0',
                body: 'Haruno',
                thumbnailUrl: global.image
            }
        }})
        user.limit += 160
        user.exp += 1500
        user.claimed = true
    } else {
        throw `Kamu udah nge-claim...\nTunggu nanti lagi ya`
    }
}
handler.command = /^reward$/i
handler.help = ['reward']
handler.tags = ['main']
export default handler