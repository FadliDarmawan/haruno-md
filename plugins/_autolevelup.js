import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let who = m.sender
    let user = global.db.data.users[who]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        let pp = 'https://telegra.ph/file/39bbded9693c9338069fd.jpg'
        try {
            pp = await this.profilePictureUrl(who, 'image')
        } catch (e) {
        } finally {
            conn.reply(m.chat, `@${who.split`@`[0]} _*Level Up!*_\n${before} -> ${user.level}`, m, { mentions: [who], contextInfo: {
                externalAdReply: {
                    sourceUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: 'Levelup!',
                    body: 'Haruno',
                    thumbnailUrl: pp
                }
            }})
        }
    }
}
export const disabled = true