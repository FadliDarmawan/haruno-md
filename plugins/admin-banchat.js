let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = true
    let name = conn.getName(m.chat)
    m.reply(`*${conn.user.name}* tidak aktif di chat ${name}`)
}
handler.help = ['banchat']
handler.tags = ['admin', 'group']
handler.command = /^banchat$/i

handler.admin = true
handler.group = true

export default handler