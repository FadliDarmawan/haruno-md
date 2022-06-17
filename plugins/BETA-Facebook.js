// TODO: fix this

import getDownloadUrl from 'facebook-video-downloader'
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Masukkan URL Facebook yang ingin di download!\n\nContoh: ${usedPrefix + command} https://www.facebook.com/100009307660961/videos/2850837675236460/`
    let url = await getDownloadUrl(args[0])
    console.log(url)
}
handler.command = /^bfbdownload$/i
handler.owner = true
export default handler