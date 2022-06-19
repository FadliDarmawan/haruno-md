let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch'
// import db from '../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, isPrems, isOwner, command }) => {
    if (!args[0]) throw `Harap masukkan link group yang ingin dimasukkan bot nya.\n\nContoh: *${usedPrefix + command} https://chat.whatsapp.com/Dqdjz7aSWJj0IyORAsdYom`
    let [_, code] = args[0].match(linkRegex) || []
    let user = db.data.users[m.sender]
    let haruno = conn.getName(conn.user.jid)
    if (!code) throw 'Link Salah'
    if (!(isPrems || isOwner)) {
        if (user.joincount === 1 ) throw `Kamu sudah melebihi token/limit memasukkan bot ke dalam group!`
        user.joincount += 1
        let res = await conn.groupAcceptInvite(code)
        m.reply('Joining group...').then(async() => {
            var jumlahHari = 86400000 * 1
            var now = new Date() * 1
            if (now < db.data.chats[res].expired) db.data.chats[res].expired += jumlahHari
            else db.data.chats[res].expired = now + jumlahHari
                await m.reply(`Berhasil join grup ${res}\nBot akan keluar secara otomatis setelah: ${conn.msToDate(global.db.data.chats[res].expired - now)}.\nToken joincount mu: ${user.joincount}/1`)
                await conn.reply(owner[0] + '@s.whatsapp.net', `@${m.sender.split`@`[0]} telah menambahkan ${haruno} ke ${res}, bot akan keluar dalam waktu: ${conn.msToDate(global.db.data.chats[res].expired - now)}`, 0,  { mentions: [m.sender]})
                await conn.sendButton(res, `${haruno} adalah bot whatsapp yang dibangun dengan Nodejs, ${haruno} diundang oleh @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu untuk melihat daftar perintah\nBot akan keluar secara otomatis setelah ${conn.msToDate(db.data.chats[res].expired - now)}`.trim(), watermark, await(await fetch('https://telegra.ph/file/b32e52b09508f1737a760.jpg')).buffer(), [['Menu', '.menu']], null, { mentions: [m.sender]})
        })
    } else if (!isOwner) {
        if (users.joincount === 3) throw `Kamu sudah melebihi token/limit memasukkan bot ke dalam group!`
        user.joincount += 1
        let res = await conn.groupAcceptInvite(code)
        m.reply('Joining group...').then(async() => {
            var jumlahHari = 86400000 * 30
            var now = new Date() * 1
            if (now < db.data.chats[res].expired) db.data.chats[res].expired += jumlahHari
            else db.data.chats[res].expired = now + jumlahHari
                await m.reply(`Berhasil join grup ${res}\nBot akan keluar secara otomatis setelah: ${conn.msToDate(global.db.data.chats[res].expired - now)}.\nToken joincount mu: ${user.joincount}/3`)
                await conn.reply(owner[0] + '@s.whatsapp.net', `@${m.sender.split`@`[0]} telah menambahkan ${haruno} ke ${res}, bot akan keluar dalam waktu: ${conn.msToDate(global.db.data.chats[res].expired - now)}`, 0, { mentions: [m.sender]})
                await conn.sendButton(res, `${haruno} adalah bot whatsapp yang dibangun dengan Nodejs, ${haruno} diundang oleh @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu untuk melihat daftar perintah\nBot akan keluar secara otomatis setelah ${conn.msToDate(db.data.chats[res].expired - now)}`.trim(), watermark, await(await fetch('https://telegra.ph/file/b32e52b09508f1737a760.jpg')).buffer(), [['Menu', '.menu']], null, { mentions: [m.sender]})
        })
    } else if (isOwner) {
        if (!args[1]) throw `Masukkan format yang benar! format: .join <link> <jumlah hari>`
        let res = await conn.groupAcceptInvite(code)
        m.reply('Joining group...').then(async() => { 
            var jumlahHari = 86400000 * args[1]
            var now = new Date() * 1
            if (now < db.data.chats[res].expired) db.data.chats[res.gid].expired += jumlahHari
            else db.data.chats[res].expired = now + jumlahHari
            await m.reply(`Berhasil join grup ${res}\nBot akan keluar secara otomatis setelah: ${conn.msToDate(global.db.data.chats[res].expired - now)}`)
            await conn.sendButton(res, `${haruno} adalah bot whatsapp yang dibangun dengan Nodejs, ${haruno} diundang oleh @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu untuk melihat daftar perintah\nBot akan keluar secara otomatis setelah ${conn.msToDate(db.data.chats[res].expired - now)}`.trim(), watermark, await(await fetch('https://telegra.ph/file/b32e52b09508f1737a760.jpg')).buffer(), [['Menu', '.menu']], null, { mentions: [m.sender]})
        })
    }
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['tools']

handler.command = /^join$/i

export default handler