import db from '../lib/database.js'

import fetch from 'node-fetch'
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.sendButton(m.chat, 'Selamat tinggal! Sayounara', watermark, await(await fetch(image)).buffer(), ['Sayounara', '.'])
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}