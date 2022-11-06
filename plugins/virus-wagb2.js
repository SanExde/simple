let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *DOWNLOAD* ${htka}

     WhatsApp GB 🈲
     Pasword: dickynews
    
    ────Kelebihan────
• Anti Virtex
• Anti lag️
• Fitur war️
• Anti Bug troli, slayer Dll️
• No Password 
• Pesan anti hapus️
• Status Anti hapus️
• Anti blokir️
• Fitur Blokir panggilan️
• Status Hd️
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
    {index: 1, urlButton: {displayText: '↗️Clone', url: 'https://cararegistrasi.com/oXoMeDN'}},
    {index: 1, urlButton: {displayText: '↗️Unclone', url: 'https://cararegistrasi.com/n7csKhVz'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^wagb2$/i

export default handler