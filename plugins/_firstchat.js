let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.getName(m.sender)
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    let img = await(await fetch('https://telegra.ph/file/03e200201e73f93f93bd9.jpg')).buffer()
    // let img = await(await fetch(img)).buffer()
    let caption = `Hai ${name}, ${ucapan()}
Saya adalah *Hiroshi Bot* siap melayani anda.
_"Age quod agis."_

Harap untuk tidak minta save, spam ke bot, menelpon nomor bot, ataupun mengirimkan bug ke nomor bot.
Silahkan baca rules untuk melihat Syarat Ketentuan, Kebijakan Privasi dan Peraturan pada Hiroshi Bot.
*Note: nomor bot bukan manusia, ga usah ngechat nanya nama minta jadi admin minta link gc ngomong sombong dll.*

Silahkan ketik *#menu* untuk melihat list menu pada Hiroshi Bot.
Terimakasih!

FadliDarmawan,
(Hiroshi, Haruno, Natsukawa).
`.trim()
    await conn.send2Template2UrlButtonImg(m.chat, img, caption, 'Haruno Bot', 'https://wa.me/6281943265086', 'Donasi', 'https://saweria.co/FadliStudio', 'Menu', '.menu', 'Owner', '.owner', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) { 
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}