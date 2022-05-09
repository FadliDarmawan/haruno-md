let handler = async (m) => {
    let name = conn.getName(m.chat)
    m.reply(`*${conn.user.name}* aktif aktif di chat ${name}`)
    global.db.data.chats[m.chat].isBanned = false
}
handler.help = ['unban']
handler.tags = ['admin', 'group']
handler.command = /^unban|unbanchat$/i

handler.admin = true
handler.group = true

export default handler