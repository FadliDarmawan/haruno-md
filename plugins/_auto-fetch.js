// import db from '../lib/database.js'
import { schedule } from "node-cron"
import fetch from "node-fetch"

export async function all(m){
    let settings = db.data.settings[this.user.jid]
    schedule('* * * * * ', () => {
        let res = await fetch(global.webfetch)
        let json = await res.json()
        if (settings.report) {
            this.reply(owner[0] + '@s.whatsapp.net', 'Link web mu sudah berhasil difetch.', false)
        } else {
            // console.log('Your web have been successfully fetched.')
        }
    }, {
        scheduled: true,
        timezone: "Asia/Jakarta"
    })
} 