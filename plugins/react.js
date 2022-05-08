let handler = async(m, { conn, usedPrefix, command, args }) => {
    if (!args[0]) throw `Masukkan emoticon nya.\n\nContoh: ${usedPrefix + command} 🇨🇳`
    if (!m.quoted) throw `Reply salah satu pesan.`
    const reactionMessage = {
        react: {
            text: args[0],
            key: m.quoted.key
        }
    }
    await conn.sendMessage(m.chat, reactionMessage)
}
handler.command = /^(react)$/i
handler.help = ['reaact']
handler.tags = ['tools']
export default handler