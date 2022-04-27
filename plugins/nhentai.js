import nhentai from 'nhentai-node-api'
import request from 'request'
import topdf from 'image-to-pdf'
import fetch from 'node-fetch'
import {
	existsSync,
	mkdirSync,
	createWriteStream,
	unlinkSync,
	readFileSync
} from 'fs'

let handler = async(m, { conn, usedPrefix, command, args }) => {
	if(!args[0]) throw `Masukkan kode nya!\n\nContoh: ${usedPrefix + command} 257326`
	if (!db.data.settings[conn.user.jid].nhentai) throw `Fitur ini tidak aktif. https://hiken.xyz/v/${args[0]}`
	let count = 0
	let ResultPdf = []
	let doujin = await nhentai.getDoujin(args[0])
	let data = db.data.users[m.sender].bookmark
	let title = doujin.title.default
	let native = doujin.title.native
	let details = doujin.details
	let array_page = doujin.pages
	let cover = doujin.cover
	let language = doujin.language
	let parodies = details.parodies.map(v => v.name).join(', ')
	let groups = details.groups.map(v => v.name).join(', ')
	let artists = details.artists.map(v => v.name).join(', ')
	let tag = details.tags.map(v => v.name).join(', ')
	let categories = details.categories.map(v => v.name).join(', ')
	let capton = `
Doujin Downloader
${title}
Language: ${language}
Parody: ${parodies}
Group: ${groups}
Artist: ${artists}
Tag: ${tag}
Category: ${categories}
Favorited: ${doujin.favourites}
`.trim()
	if(!args[1]) {
		if (data.includes(args[0])) {
			const message = {
				image: { url: cover },
				jpegThumbnail: await(await fetch(cover)).buffer(),
				caption: capton,
				footer: watermark,
				templateButtons: [
					{
						urlButton: {
							displayText: 'Read online',
							url: `https://hiken.xyz/v/${args[0]}`
						}
					}, {
						quickReplyButton: {
							displayText: 'Download',
							id: `${usedPrefix + command} ${args[0]} -d`
						}
					}, {
						quickReplyButton: {
							displayText: 'Remove bookmark',
							id: `${usedPrefix + command} ${args[0]} -r`
						}
					}
				]
			}
			await conn.sendMessage(m.chat, message, { quoted: m })
		} else {
			const message = {
				image: { url: cover },
				jpegThumbnail: await(await fetch(cover)).buffer(),
				caption: capton,
				footer: watermark,
				templateButtons: [
					{
						urlButton: {
							displayText: 'Read online',
							url: `https://hiken.xyz/v/${args[0]}`
						}
					}, {
						quickReplyButton: {
							displayText: 'Download',
							id: `${usedPrefix + command} ${args[0]} -d`
						}
					}, {
						quickReplyButton: {
							displayText: 'Add bookmark',
							id: `${usedPrefix + command} ${args[0]} -b`
						}
					}
				]
			}
			await conn.sendMessage(m.chat, message, { quoted: m })
		}
	} else if(args[1] === '-d') {
		m.reply('Sedang mengunduh data.\nHarap tunggu sekitar 1~5 menit...')
		for (let index = 0; index < array_page.length; index++) {
			if (!existsSync('./nhentai')) mkdirSync('./nhentai')
			let image_name = './nhentai/' + title + index + '.jpg'
			await new Promise((resolve) => request(array_page[index]).pipe(createWriteStream(image_name)).on('finish', resolve))
			console.log(array_page[index])
			ResultPdf.push(image_name)
			count++
		}
	await new Promise((resolve) =>
			topdf(ResultPdf, 'A4')
			.pipe(createWriteStream('./nhentai/' + title + '.pdf'))
			.on('finish', resolve)
		)

		for (let index = 0; index < array_page.length; index++) {
			unlinkSync('./nhentai/' + title + index + '.jpg')
		}
	m.reply('Sedang mengirim file PDF...')
	let thumbnail = await (await fetch(doujin.cover)).buffer()
	await conn.sendFile(m.chat, readFileSync(`./nhentai/${title}.pdf`), `${title}.pdf`, '', m, false, { asDocument: true, thumbnail: thumbnail })
		.then(() => unlinkSync(`./nhentai/${title}.pdf`))
	} else if (args[1] === '-b') {
		if (data.includes(args[0])) throw `Kode ${args[0]} sudah ada pada list bookmark mu.`
		let push = data.push(args[0])
		data = push
		m.reply(`Kode ${args[0]} berhasil disimpan pada bookmark mu.\n\nKetik ${usedPrefix}bookmark untuk melihat list.`)
	} else if (args[1] === '-r') {
		if (!data.includes(args[0])) throw `Kode ${args[0]} tidak ada pada list bookmark mu.`
		let ha = data.indexOf(args[0])
		let de = await json.splice(ha, 1)
		data = de
		m.reply(`Kode ${args[0]} berhasil diremove pada bookmark mu.\n\nKetik ${usedPrefix}bookmark untuk melihat list.`)
	}
}

handler.command = /^nhentai|doujin$/i
handler.help = ['nhentai <kode>']
handler.tags = ['anime']
export default handler