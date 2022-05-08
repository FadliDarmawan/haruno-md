import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    let res = await fetch('https://nekos.life/api/v2/img/eroyuri')
    let json = await res.json()
    if (m.isGroup) {
        if (!db.data.chats[m.chat].nsfw) throw `NSFW tidak diaktifkan pada chat ini.` 
        await conn.sendButton(m.chat, 'Eroyuri!', watermark, await(await fetch(json.url)).buffer(), [['Get again', '.eroyuri']], m)
    } else {
        await conn.sendButton(m.chat, 'Eroyuri!', watermark, await(await fetch(json.url)).buffer(), [['Get again', '.eroyuri']], m)
    }
}
handler.tags = ['anime']
handler.help = ['eroyuri']
handler.command = /^eroyuri$/i