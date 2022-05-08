let handler = async (m, { isOwner, text, isAdmin }) => {
    let who 
    if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    else who = m.chat
    try {
        if (who.endsWith('g.us')) db.data.chats[who].isBanned = false
        else db.data.users[who].banned = false
        m.reply(`${conn.user.name} sekarang aktif dichat ${conn.getName(who) == undefined ? 'ini' : conn.getName(who)}.`)
    } catch (e) {
        throw `ID tidak ada didatabase.`
    }
}
handler.help = ['ounban']
handler.tags = ['owner']
handler.command = /^ounban$/i
handler.owner = true

export default handler