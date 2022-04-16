/*
import yts from 'yt-search'
import fetch from 'node-fetch'

import { 
  youtubedl,
  youtubedlv2 
} from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, command }) => {
  if (!text) throw `Masukkan query yang ingin di play.\n\nContoh: ${usedPrefix + command} stella-rium kano`
  let result = await yts(text)
  let url = result.all[0].url
  let title = result.all[0].title
  let thumbnail = result.all[0].thumbnail
  const yt = await youtubedl(url).catch(async () => await  youtubedlv2(url))
const dl_url = await yt.video['240p'].download()
}
*/