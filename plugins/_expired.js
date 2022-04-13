export async function all(m) {
    import fetch from 'node-fetch'
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.sendButton(m.chat, 'Selamat tinggal! Sayounara', watermark, await(await fetch(image)).buffer(), ['Sayounara', '.'], m)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}