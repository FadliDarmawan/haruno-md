let handler = async(m, { conn, usedPrefix, command }) => {
    let user = db.data.users[m.sender]
    if (!user.bookmark || user.bookmark == null) throw `Kamu tidak memiliki bookmark code.\n\nUntuk menambahkan bookmark code silahkan ketik ${usedPrefix}nhentai <kode>\nContoh: ${usedPrefix}nhentai 274431`
    let caption = `
┌〔 Bookmark 〕
${user.bookmark.map(v => '├ ' + v).join`\n`}
└────

Untuk menambahkan atau meremove silahkan ketik ${usedPrefix}nhentai <kode yang ingin di remove/add>
`.trim()
    await conn.sendFile(m.chat, caption, m, { contextInfo: {
        externalAdReply: {
            sourceUrl: 'https://youtu.be/JktyyWr1N6I',
            title: 'Bookmark list',
            thumbnailUrl: image
        }
    }})
}
handler.tags = ['anime']
handler.command = /^bookmark$/i
handler.help = ['bookmark']
export default handler