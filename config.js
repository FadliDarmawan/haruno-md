global.owner = ['628112958665', '6288215569001','628998512588', '6283175998566', '6285693602003', '6283153189868']
global.APIs = {
    neoxr: 'https://api.neoxr.eu.org/',
    nrtm: 'https://nurutomo.herokuapp.com',
    xteam: 'https://api.xteam.xyz',
    zeks: 'https://api.zeks.xyz',
}
global.APIKeys = {
    'https://api.neoxr.eu.org/': 'yntkts',
    'https://api.xteam.xyz': 'HIRO',
    'https://api.zeks.xyz': 'FVe0JFCdME58YSKmhoDWdRtyuJt',
}

// Sticker WM
global.packname = 'Haruno'
global.author = 'Fadli'

global.wait = '「 ⏱️ 」Harap tunggu...'
global.eror = '「❗」Server ERROR!'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.thumbfoto = 'https://telegra.ph/file/39bbded9693c9338069fd.jpg'
global.watermark = '© Haruno'

global.multiplier = 59 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})