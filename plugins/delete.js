let handler = async(m, { conn }) => {
    if (!m.quoted) throw false
    let { chat, fromMe, id, isBaileys, key } = m.quoted
    if (!fromMe) throw false
    if (/Haruno Broadcast/i.test(m.quoted.text)) throw 'Tidak bisa menghapus pesan broadcast!'
    if (!isBaileys) throw `Pesan tersebut bukan dikirimkan oleh bot.`
    await conn.sendMessage(m.chat, { delete: m.quoted.key})
}
handler.help = ['delete']
handler.tags = ['info']
handler.command = /^del(ete)$/i
export default handler