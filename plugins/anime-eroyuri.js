import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    let res = await fetch('https://nekos.life/api/v2/img/eroyuri')
    let json = await res.json()
    await conn.sendButton(m.chat, 'Eroyuri!', watermark, await(await fetch(json.url)).buffer(), [['Get again', '.eroyuri']], m)
}
handler.tags = ['anime']
handler.help = ['eroyuri']
handler.command = /^eroyuri$/i
export default handler