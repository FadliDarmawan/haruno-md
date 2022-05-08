import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    let res = await fetch('https://nekos.life/api/neko')
    let json = await res.json()
    let img = await(await fetch(json.neko)).buffer()
    await conn.sendButton(m.chat, 'Neko!', watermark, img, [['Neko', '.neko']], m)
}
handler.command = /^(neko|nekonime)$/i
handler.tags = ['internet']
handler.help = ['neko']

export default handler