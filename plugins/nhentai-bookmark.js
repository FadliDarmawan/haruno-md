let handler = async(m, { conn, usedPrefix, command }) => {
    let user = db.data.users[m.sender].bookmark
    // if (!user.bookmark || user.bookmark == null) throw `Kamu tidak memiliki bookmark code.\n\nUntuk menambahkan bookmark code silahkan ketik ${usedPrefix}nhentai <kode>\nContoh: ${usedPrefix}nhentai 274431`
    let caption = `
┌〔 Bookmark 〕
${user.map(v => '├ ' + v).join`\n`}
└────

Untuk menambahkan atau meremove silahkan ketik ${usedPrefix}nhentai <kode yang ingin di remove/add>
`.trim()
    await conn.reply(m.chat, caption, m)
}
handler.tags = ['anime']
handler.command = /^bookmark$/i
handler.help = ['bookmark']
export default handler