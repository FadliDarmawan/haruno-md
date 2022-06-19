// import db from '../lib/database.js'
let { sticker } = await import('../lib/sticker.js')
let handler = m => m

export async function all(m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            let image = ['https://telegra.ph/file/a4032ee83c44bc712b085.png', 'https://telegra.ph/file/58e79875fa91a992726d7.png', 'https://telegra.ph/file/b7b7c9bcc8b97e2171f97.png', 'https://telegra.ph/file/e808c24abb86c7500f4b1.png', 'https://telegra.ph/file/0f455c0cbbd6aeeff283f.png', 'https://telegra.ph/file/a595a3bedd97355650a8a.png', 'https://telegra.ph/file/bfbc81cd603d893952def.png', 'https://telegra.ph/file/44f2d562660f5849677a6.png', 'https://telegra.ph/file/4fd06cd5b884e3a80ba7b.png', 'https://telegra.ph/file/e16c377c3655d6fd79954.png', 'https://telegra.ph/file/70440fb145823d4aaa80d.png', 'https://telegra.ph/file/762e538b6a3a9345661d9.png']
            let selectedimage = image[Math.floor(Math.random() * image.length)]
            stiker = await sticker(false, selectedimage, global.packname, globa.author)
            await this.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        await this.reply(m.chat, `┌──「 Add group 」
├ *Free 1 Hari*
├ *1 Bulan:* Rp10.000
│
├「 Premium 」
├ *Selamanya*: Rp12.500
└───

┌──「 Pembayaran 」
├ *Dana:* 628112958665
├ *OVO:* 628112958665
├ *GoPay:* 628112958665
├ *Pulsa:* 6281943265086 (+Rp5k)
└───

*Note:* Pembayaran menggunakan pulsa dikenakan tambahan Rp5.000.`
, m)
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    // backup db
    /*
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            setting.backupDB = new Date() * 1
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
        }
    }
    */
}