import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Harap masukkan username instagram yang ingin distalk.\n\nContoh: ${usedPrefix + command} takomayuyicos`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
    m.reply(`
Name: ${name} 
Username: ${username}
https://instagram.com/${username.replace(/^@/, '')}
Followers: ${followersH}
Following: ${followingH}
Posts: ${postsH}
Bio: ${description}
`.trim())
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

export default handler