// import db from '../lib/database.js'

export async function all(m) {
    if (!db.data.settings[this.user.jid].antispam) return
    if (m.isBaileys || m.fromMe || !m.message) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 15) {
            if (this.spam[m.sender].count > 10) {
                db.data.users[m.sender].banned = true
                m.reply('Kamu dibanned karena spam.')
                this.sendButton(owner[0] + '@s.whatsapp.net', `@${user.split`@`[0]} dibanned karena spam.`, watermark, false, [['Unban', `.unban ${m.sender}`]])
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}