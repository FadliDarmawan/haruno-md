# Haruno
<a href = "https://github.com/FadliDarmawan/haruno-md"><img src = "https://cardivo.vercel.app/api?name=Haruno&description=Haruno,%20Bot%20WhatsApp%20multi%20device.%20Created%20by%20Nurutomo,%20BochilGaming,%20dan%20FadliDarmawan.&image=https://telegra.ph/file/196b5f6f24ccdc6805021.jpg?cb=20200606024545&usqp=CAU&usqp=CAU&backgroundColor=%23ecf0f1&github=FadliDarmawan&pattern=topography&colorPattern=%23eaeaea"/><a>

### Group Official Haruno
[![Grup WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/Dqdjz7aSWJj0IyORAsdYom)

### Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/FadliDarmawan/haruno-md)

<p align = "left">
      <img src = "https://telegra.ph/file/196b5f6f24ccdc6805021.jpg" width="35%" style="margin-left: auto;margin-right: auto;display: block;">>
</p>
## Donate and Support me
Donate me via [`Saweria!`](https://saweria.co/FadliStudio)

## FOR TERMUX USER
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
git clone https://github.com/FadliDarmawan/haruno-md
cd haruno-md
yarn
npm i -g typescript
tsc -p ./node_modules/@adiwajshing/baileys
node .
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/BochilGaming/haruno-md
cd haruno-md
npm install
npm update
npm index
```

---------

## FOR HEROKU USER
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/FadliDarmawan/haruno-md)

### Installing buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git


### Connecting the Heroku Into Mogodb

Note: You dont have to connect your Haruno at Heroku into mongoDB, but Heroku doesn save your ```database.json``` and you will lose your bot data every time you restart or re-run the bot.

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `web: node . -- db 'mongodb+srv://ilman:<password>@cluster0.iiede.mongodb.net/ShiraoriBOT?retryWrites=true&w=majority'`

---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--pconly`

If that chat not from private bot, bot will ignore

### `--gconly`

If that chat not from group, bot will ignore

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--autocleartmp`

If enabled, **tmp* folder contain files will be auto delete

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

---------

## How To Customise Message Display
```js
// Syntax
conn.sendButton(
      jid, // jid of the user to send the message to
      text, // text to send
      foooter, // footer to send
      buffer, // buffer to send (optional), if you want to send button image, location, etc
      buttons, // buttons to send, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send, example { asLocation: true }
)

// example 
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', null, [
      ['Hello', 'hello'], ['Bye', 'bye']
])
// example button location
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', 'https://github.com/BochilGaming', 
      [['Hello', 'hello'], ['Bye', 'bye']], 
      null, { asLocation: true }
)
```
---------

#### Special Thanks to
[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)

 [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) | [![Istikmal](https://github.com/BochilGaming.png?size=150)](https://github.com/BochilGaming) | [![Fadli](https://github.com/FadliDarmawan.png?size=100)](https://github.com/FadliDarmawan)
----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Istikmal](https://github.com/BochilGaming) | [Fadli](https://github.com/FadliDarmawan)
 Penulis / Pencipta | SC owner | Pengembang ulang