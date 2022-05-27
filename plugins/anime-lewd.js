import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    let res = await fetch('https://nekos.life/api/v2/img/lewd')
    let json = await res.json()
    await conn.sendButton(m.chat, 'LEWD!', watermark, await(await fetch(json.url)).buffer(), [['Get again', '.eroyuri']], m)
}
handler.tags = ['anime']
handler.help = ['lewd']
handler.command = /^lewd$/i
export default handler