import { getVideoMeta } from 'tiktok-scraper'

let handler = async(m, { conn, usedPrefix, args, command }) => {
    if (!args[0]) throw `Harap masukkan URL sebagai parameter!\n\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSe5pocWX/`
    let video = await getVideoMeta(args[0], {
        noWaterMark: true,
        hdVideo: true
    })
    console.log(video)
}
handler.command = /^btiktokdl$/i
handler.owner = true
export default handler