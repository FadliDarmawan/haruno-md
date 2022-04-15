import moment from 'moment-timezone'
import fetch from 'node-fetch'
let handler = m => m

export async function all(m) {

    let user = global.db.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (!user.firstchat) return
    if (db.data.settings.groupOnly) return
    let name = conn.getName(m.sender)
    let teks = `
*Hi ${name}, ${ucapan()}*
Perkenalkan aku adalah Haruno bot!

Kamu bisa menggunakan Haruno untuk membuat sticker, mendownload video youtube, facebook, tiktok, instagram, atau hanya sekedar bersenang senang! Fitur selengkapnya tentang Haruno bisa di lihat di *.menu*

Kami tidak akan melakukan spam broadcast ke users.

Jangan lupa patuhi rules, dan harap tidak menelpon, vc, spam, mengirimkan bug atau virtex ke nomor bot.
Jika ada bug atau hal yang ingin ditanyakan silahkan menghubungi owner.
Terimakasih!
`.trim()
    const message = {
        image: { url: 'https://telegra.ph/file/b32e52b09508f1737a760.jpg'},
        jpegThumbnail: await(await fetch('https://telegra.ph/file/b32e52b09508f1737a760.jpg')).buffer(),
        caption: teks,
        footer: watermark,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Haruno\'s group',
                    url: 'https://chat.whatsapp.com/Dqdjz7aSWJj0IyORAsdYom'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Owner',
                    id: '.owner'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Menu',
                    id: '.menu'
                }
            }
        ]
    }
    await this.sendMessage(m.chat, message, { quoted: m })
    user.firstchat = false
}
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) { 
        res = "Ohayou!"
    }
    if (time > 10) {
        res = "Konnichiwa!"
    }
    if (time >= 15) {
        res = "Konnichiwa!"
    }
    if (time >= 18) {
        res = "Konbanwa!"
    }
    return res
}