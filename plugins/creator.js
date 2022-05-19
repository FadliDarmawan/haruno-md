import PhoneNumber from 'awesome-phonenumber'
async function handler(m) {
  let name = 'Fadli'
  let number = owner[0].replace(/[^0-9]/g, '')
  let njid = number + '@s.whatsapp.net'

  let name2 = 'Zaki'
  let number2 = owner[1].replace(/[^0-9]/g, '')
  let njid2 = number2 + '@s.whatsapp.net'

  let name3 = 'Rafli'
  let number3 = owner[2].replace(/[^0-9]/g, '')
  let njid3 = number3 + '@s.whatsapp.net'
  let cont = this.sendMessage(m.chat, {
    contacts: [{
      displayname: name, contacts: `
BEGIN:VCARD
VERSION:3.0
N:;${name.replace(/\n/g, '\\n')};;;
FN:${name.replace(/\n/g, '\\n')}
ORG:Haruno Corp.;\n
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
END:VCARD
`.trim()
    }, {
      displayname: name2, contacts: `
BEGIN:VCARD
VERSION:3.0
N:;${name2.replace(/\n/g, '\\n')};;;
FN:${name2.replace(/\n/g, '\\n')}
ORG:Haruno Corp.;\n
TEL;type=CELL;type=VOICE;waid=${number2}:${PhoneNumber('+' + number2).getNumber('international')}
END:VCARD
`.trim()
    }, {displayname: name3, contacts: `
BEGIN:VCARD
VERSION:3.0
N:;${name3.replace(/\n/g, '\\n')};;;
FN:${name3.replace(/\n/g, '\\n')}
ORG:Haruno Corp.;\n
TEL;type=CELL;type=VOICE;waid=${number3}:${PhoneNumber('+' + number3).getNumber('international')}
END:VCARD
`.trim()
    }]
  }, { quoted: m })
  conn.reply(m.chat, `Nomer owner itu *bukan bot*, tapi nomor _*pemilik bot*_\n\nSilahan chat jika ada keperluan.\nChat "P" atau minta save kemungkinan tidak akan di balas, dan -9999 social credit.`, cont)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler