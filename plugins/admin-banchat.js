let handler = async (m) => {
    let name = conn.getName(m.chat)
    m.reply(`*${conn.user.name}* tidak aktif di chat ${name}`)
    db.data.chats[m.chat].isBanned = true
}
handler.help = ['banchat']
handler.tags = ['admin', 'group']
handler.command = /^ban|banchat$/i

handler.admin = true
handler.group = true

export default handler