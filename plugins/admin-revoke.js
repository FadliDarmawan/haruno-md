let handler = async(m, { conn }) => {
    let revoke = await conn.groupRevokeInvite(m.chat)
    let name = conn.getName(m.chat)
    conn.reply(m.sender, `Berhasil merevoke link group ${name}\nLink baru: ${'https://chat.whatsapp.com/' + revoke}`)
}
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.commaand = /^revoke$/i
handler.help = ['revoke']
handler.tags = ['admin', 'group']
export default handler