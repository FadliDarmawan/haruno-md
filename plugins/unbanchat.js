// import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    db.data.chats[m.chat].isBanned = false
    let name = await conn.getName(m.chat)
    await conn.reply(m.chat, `*Haruno* berhasil diunban di ${name}`, m, { contextInfo: {
      externalAdReply: {
          sourceUrl: 'https://youtu.be/-tKVN2mAKRI',
          title: 'Unbanchat',
          body: 'Haruno',
          thumbnailUrl: global.image
      }
  }})
    // m.reply('Done!')
}
handler.help = ['unbanchat']
handler.tags = ['admin', 'group']
handler.command = /^unbanchat$/i
handler.admin = true
handler.group = true

export default handler
