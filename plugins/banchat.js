// import db from '../lib/database.js'

let handler = async (m, { participants, conn }) => {
    db.data.chats[m.chat].isBanned = true
    let name = await conn.getName(m.chat)
    await conn.reply(m.chat, `*Haruno* berhasil diban di ${name}`, m, { contextInfo: {
      externalAdReply: {
          sourceUrl: 'https://youtu.be/-tKVN2mAKRI',
          title: 'Banchat',
          body: 'Haruno',
          thumbnailUrl: global.image
      }
  }})
    // m.reply('Done!')
}
handler.help = ['banchat']
handler.tags = ['admin', 'group']
handler.command = /^banchat$/i
handler.admin = true
handler.group = true

export default handler