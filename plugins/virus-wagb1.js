let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *DOWNLOAD* ${htka}

     WhatsApp GB 🈲
     Pasword: sabar
    
    ────Kelebihan────
• Anti Virtex
• Anti lag
• Fitur war
• Anti Bug troli, slayer Dll
• No Password 
• Pesan anti hapus
• Status Anti hapus
• Anti blokir
• Status Hd
• Sembunyikan Online️
• Boom chat️
• Anti kadaluarsa ️
• Pengubah suara Vn️
• Status mod variasi️
• No delay️
• Status Warna warni️
• Dll
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '↗️Clone', url: 'https://cararegistrasi.com/QXwAxmu'}},
    {index: 1, urlButton: {displayText: '↗️Unclone', url: 'https://cararegistrasi.com/aYyZ1Gyt5'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^wagb1$/i

export default handler