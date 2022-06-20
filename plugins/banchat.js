// import db from '../lib/database.js'

let handler = async (m, { participants }) => {
    db.data.chats[m.chat].isBanned = true
    m.reply('Done!')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i

handler.admin = true
handler.group = true

export default handler