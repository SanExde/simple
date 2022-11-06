import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let _pp = './src/avatar_contact.png'
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let { premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let str = `
┌──「 *PROFILE* 」──
│💌 ○ *Name:* ${name}
│🎐 ○ *Username:* ${registered ? name : ''}
│📧 ○ *Tag:* @${who.replace(/@.+/, '')}
│📞 ○ *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│🔗 ○ *Link:* https://wa.me/${who.split`@`[0]}
│🎨 ○ *Age:* ${registered ? age : ''} Tahun
└──────
┌──「 ${readMore} 」──
│🌟 ○ *Premium:* ${premium ? "❌" :"✅"}
│⏰ ○ *PremiumTime:* 
${clockString(user.premiumTime - new Date() * 1)}
│📑 ○ *Registered:* ${registered ? '✅': '❌'}
└──────`.trim()
    conn.sendButton(m.chat, str, botdate, pp, [[`${registered ? 'Menu':'Verify'}`, `${user.registered ? '.menu':'.verify'}`]], fkon, { contextInfo: { mentionedJid: [who], forwardingScore: 999, isForwarded: true}})
}
handler.help = ['profile [@user]']
handler.tags = ['exp']
handler.command = /^profile|profil$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['│ ', ye, ' *Years 🗓️*\n', '│ ', mo, ' *Month 🌙*\n', '│ ', d, ' *Days ☀️*\n', '│ ', h, ' *Hours 🕐*\n', '│ ', m, ' *Minute ⏰*\n', '│ ', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
