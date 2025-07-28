const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭───────────────━⊷
┊🌟 𝐂𝐑𝐈𝐒𝐒 𝐌𝐃 𝐁𝐎𝐓 𝐑𝐄𝐏𝐎 𝐈𝐍𝐅𝐎 🌟
╰───────────────━⊷
╭───────────────━⊷
║🔗 𝗚𝗜𝗧𝗛𝗨𝗕 𝗟𝗜𝗡𝗞
║> https://github.com/criss-vevo/CRISS-VMD
║
║🔗 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗖𝗛𝗔𝗡𝗡𝗘𝗟
║> https://whatsapp.com/channel/0029Vb0HIV2G3R3s2II4181g
⁠⁠⁠⁠╰───────────────━⊷
   𝗙𝗢𝗟𝗟𝗢𝗪 𝗠𝗬 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝗙𝗢𝗥 𝗠𝗢𝗥𝗘 𝗜𝗡𝗙𝗢
  `;    
let menuMsg = `
> 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗖𝗥𝗜𝗦𝗦 𝗩𝗘𝗩𝗢`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🤫🤫 Menu erreur " + e);
        repondre("🤫🤫 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🤫🤫 Menu erreur " + e);
        repondre("🤫🤫 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
