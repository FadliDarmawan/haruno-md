let handler = async(m, { conn, text, command, usedPrefix }) => {
    if (!text) throw `Harap masukkan description baru untuk group.\n\nContoh: ${usedPrefix + command} Haruno Official`
    await conn.groupUpdateDescription(m.chat, text)
    conn.reply(m.chat, `Judul group berhasil diubah.\nDiubah oleh: @${m.sender.split`@`[0]}`, null, { mentions: [m.sender]})
}
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.commaand = /^(changedesc|updatedesc|descgc)$/i
handler.help = ['updatedesc']
handler.tags = ['admin', 'group']
export default handler