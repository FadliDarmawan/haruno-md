/*
tmp folder makes so many cache file that useless and makes you running out of storage.
*/

import { emptyDirSync } from 'fs-extra'
let handler = async(m, { conn }) => {
    emptyDirSync('./tmp').then(async() => {
        m.reply('file TMP sukses dikosongkan.')
    })
}
handler.owner = true
handler.command = /^emptytmp$/i
handler.help = ['emptytmp']
handler.tags = ['owner', 'tools']

export default handler