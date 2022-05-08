let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    let name = conn.getName(m.chat)
    m.reply(`*${conn.user.name}* aktif aktif di chat ${name}`)
}
handler.help = ['unbanchat']
handler.tags = ['admin', 'group']
handler.command = /^unbanchat$/i

handler.admin = true
handler.group = true

export default handler