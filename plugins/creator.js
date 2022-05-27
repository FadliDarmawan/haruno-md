let handler = async(m) => {
  let name = await conn.getName(owner[0])
  let contact = await conn.sendContact(m.chat, owner[0], name, m)
  await conn.reply(m.chat, 'Nomor *owner* itu bukan nomor bot.\nHarap pengertian nya nggak ngechat command bot ke nomer owner. Makasih.', contact)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler