// import db from '../lib/database.js'

let handler = async (m) => {
    db.data.chats[m.chat].isBanned = false
    m.reply('Done!')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.admin = true
handler.group = true

export default handler