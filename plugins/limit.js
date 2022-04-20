let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let caption = `
Limit: *${user.limit}*
EXP: *${user.exp}*
Level: *${user.level}*
Role: *${user.role}*
Daily Reward: *${user.dailyReward}*
Joincount: *${user.joincount}*
`.trim()
    let pp = 'https://telegra.ph/file/22cacf2d738f3732bf558.png'
    try {
        pp = await this.profilePictureUrl(who, 'image')
    } catch (e) {
    } finally {
      await conn.reply(m.chat, caption, m, { contextInfo: {
        externalAdReply: {
            sourceUrl: 'https://youtu.be/-tKVN2mAKRI',
            title: user.name,
            body: 'Haruno',
            thumbnailUrl: pp
        }
    }})
  }
}
handler.help = ['my [@62XXXX]']
handler.tags = ['xp']
handler.command = /^(my|limit)$/i
export default handler
