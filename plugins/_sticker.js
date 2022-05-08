import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = m => m

export async function all(m) {
    if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
        let image = ['https://telegra.ph/file/a4032ee83c44bc712b085.png', 'https://telegra.ph/file/58e79875fa91a992726d7.png', 'https://telegra.ph/file/b7b7c9bcc8b97e2171f97.png', 'https://telegra.ph/file/e808c24abb86c7500f4b1.png', 'https://telegra.ph/file/0f455c0cbbd6aeeff283f.png', 'https://telegra.ph/file/a595a3bedd97355650a8a.png', 'https://telegra.ph/file/bfbc81cd603d893952def.png', 'https://telegra.ph/file/44f2d562660f5849677a6.png', 'https://telegra.ph/file/4fd06cd5b884e3a80ba7b.png', 'https://telegra.ph/file/e16c377c3655d6fd79954.png', 'https://telegra.ph/file/70440fb145823d4aaa80d.png', 'https://telegra.ph/file/762e538b6a3a9345661d9.png']
        let selectedimage = image[Math.floor(Math.random() * image.length)].then(async() => {
            stiker = await sticker(false, selectedimage, global.packname, globa.author)
            await this.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        })
    }
}