import db from '../lib/database.js'

export async function all(m) {
    let chat = db.data.chats[m.chat]
    if (!db.data.chats[m.chat].download) return
    if (db.data.chats[m.chat].isBanned) return
    if (m.chat.endsWith('broadcast')) return

    let url = m.text.split(/\n| /i)[0]

    // TODO: Fix this

}