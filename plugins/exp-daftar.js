import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "📆Pilih Usia Anda Di Sini !",
	rows: [
	    {title: "📛Tahun Acak", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "Tua",
	rows: [
	    {title: "≻ 30• Tahun", rowId: '.daftar ' + namae + '.30 '},
	    {title: "≻ 29• Tahun", rowId: '.daftar ' + namae + '.29 '},
	    {title: "≻ 28• Tahun", rowId: '.daftar ' + namae + '.28 '},
	{title: "≻ 27• Tahun", rowId: '.daftar ' + namae + '.27 '},
	{title: "≻ 26• Tahun", rowId: '.daftar ' + namae + '.26 '},
	{title: "≻ 25• Tahun", rowId: '.daftar ' + namae + '.25 '},
	{title: "≻ 24• Tahun", rowId: '.daftar ' + namae + '.24 '},
	{title: "≻ 23• Tahun", rowId: '.daftar ' + namae + '.23 '},
	{title: "≻ 22• Tahun", rowId: '.daftar ' + namae + '.22 '},
	{title: "≻ 21• Tahun", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "Pemuda",
	rows: [
	    {title: "≻ 20• Tahun", rowId: '.daftar ' + namae + '.20 '},
	    {title: "≻ 19• Tahun", rowId: '.daftar ' + namae + '.19 '},
	    {title: "≻ 18• Tahun", rowId: '.daftar ' + namae + '.18 '},
	{title: "≻ 17• Tahun", rowId: '.daftar ' + namae + '.17 '},
	{title: "≻ 16• Tahun", rowId: '.daftar ' + namae + '.16 '},
	{title: "≻ 15• Tahun", rowId: '.daftar ' + namae + '.15 '},
	{title: "≻ 14• Tahun", rowId: '.daftar ' + namae + '.14 '},
	{title: "≻ 13• Tahun", rowId: '.daftar ' + namae + '.13 '},
	{title: "≻ 12• Tahun", rowId: '.daftar ' + namae + '.12 '},
	{title: "≻ 11• Tahun", rowId: '.daftar ' + namae + '.11 '},
	{title: "≻ 10• Tahun", rowId: '.daftar ' + namae + '.10 '},
	{title: "≻ 9• Tahun", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `Silahkan pilih usia Anda Di Tombol Bawah`,
  footer: `Nama Mu:* ${conn.getName(m.sender)}\n<❔>  BOT PRIVATE\nCreate By SanXd`,
  title: "──────「 Registration 」──────",
  buttonText: "Register",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu Sudah ter daftar di database, Apa kamu ingin mendaftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
  ───「 *Successful Registration* 」───
  
┌──「 *Users* 」───
│▸ *Status:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│▸ *Name:* ${name}
│▸ *Age:* ${age} ʏᴇᴀʀs
│▸ *Sn:* ${sn}
└─────────

Subscribe Yt : SanXd
`
  let buttonMessage= {
'document':{'url':'https://youtu.be/FS4QIXVC7es'},
'mimetype':global.ddocx,
'fileName':'─────「 Registration 」─────',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtu.be/FS4QIXVC7es',
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/abea3a98a8a896c3106bf.jpg')).buffer(),
'sourceUrl':'https://youtu.be/FS4QIXVC7es'}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'Hallo'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
