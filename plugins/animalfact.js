import fetch from "node-fetch"

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `
*${usedPrefix}${command} <nama hewan>*
contoh:
*${usedPrefix}${command} <dog>*\n
┌──「 Opsi 」──
│𝇈 dog
│𝇈 cat
│𝇈 panda
│𝇈 fox
│𝇈 red_panda
│𝇈 koala
│𝇈 birb
│𝇈 raccoon
│𝇈 kangaroo
│𝇈 
└────
`.trim();
  let res = await fetch(
    API("https://some-random-api.ml", "/animal/" + text, {})
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.image) await conn.sendFile(m.chat, json.image, "", `${json.fact}`, m);
  else throw json;
};
handler.help = ["animal"].map(v => v + ' <no>')
handler.tags = ["internet"]
handler.command = /^(animal|animalfact)$/i

export default handler;
