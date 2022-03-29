const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const toMs = require('ms')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./wily.js')
nocache('./wily.js', module => console.log(`${module} Ya Se Actualizo !`))
require('./main.js')
nocache('./main.js', module => console.log(`${module} Ya Actualizado!`))

const starts = async (wily = new WAConnection()) => {
wily.logger.level = 'warn'
wily.version = [2, 4143, 3]
function _0x3ab7(_0x323e7b,_0xf98192){var _0x19281d=_0x1928();return _0x3ab7=function(_0x3ab720,_0x21b17e){_0x3ab720=_0x3ab720-0x1bc;var _0x34c2b2=_0x19281d[_0x3ab720];return _0x34c2b2;},_0x3ab7(_0x323e7b,_0xf98192);}var _0x3ccdec=_0x3ab7;function _0x1928(){var _0x3e76b1=['31092mOhVGa','60XhHTIy','9209120wvQyih','30KoevrD','4261710hEoKWp','33472oxxMwt','94rPJnNt','551642pNnrId','Opera','3102920jecioL','9197784MfyLqh','3.0','YT ABIL\x20BOTZ','browserDescription'];_0x1928=function(){return _0x3e76b1;};return _0x1928();}(function(_0x2afb88,_0x3230a3){var _0x5142ea=_0x3ab7,_0x5104b1=_0x2afb88();while(!![]){try{var _0x45924c=parseInt(_0x5142ea(0x1bd))/0x1*(parseInt(_0x5142ea(0x1be))/0x2)+-parseInt(_0x5142ea(0x1bc))/0x3+parseInt(_0x5142ea(0x1c6))/0x4*(-parseInt(_0x5142ea(0x1c7))/0x5)+parseInt(_0x5142ea(0x1c9))/0x6*(parseInt(_0x5142ea(0x1bf))/0x7)+parseInt(_0x5142ea(0x1c1))/0x8+parseInt(_0x5142ea(0x1c2))/0x9+-parseInt(_0x5142ea(0x1c8))/0xa;if(_0x45924c===_0x3230a3)break;else _0x5104b1['push'](_0x5104b1['shift']());}catch(_0x4cf233){_0x5104b1['push'](_0x5104b1['shift']());}}}(_0x1928,0xe60d9),abilbotz[_0x3ccdec(0x1c5)]=[_0x3ccdec(0x1c4),_0x3ccdec(0x1c0),_0x3ccdec(0x1c3)]);
console.log(color('[ IG: https:Instagram.com/wilyo_o ]'))
console.log(color('[ Whatsapp : https://Wa.me/51985761261 ]'))
console.log(color('[ Github : https://github.com ]'))
wily.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanee el QR ðŸª€'))
})
fs.existsSync('./session.json') && .loadAuthInfo('./session.json')
wily.on('connecting', () => {
start('2', 'Menghubungkan')
})
wily.on('open', () => {
success('2', 'CONECTATE ATU WHATSAPP WEB')
teks = `https://chat.whatsapp.com/` 
 wily.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('âœ“'), color('SUCCESSFUL TO JOINED TO DEVELOPER GRUP')) 
})
await wily.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(wily.base64EncodedAuthInfo(), null, '\t'))

wily.on('chat-update', async (message) => {
        require('./wily.js') (abilbotz, message, _welkom)
    })
wily.on("group-participants-update", async (anu) => {
				  const isWelkom = _welkom.includes(anu.jid)
				  try {
				  groupMet = await abilbotz.groupMetadata(anu.jid)
				  groupMembers = groupMet.participants
				  groupAdmins = getGroupAdmins(groupMembers)
				  mem = anu.participants[0]
			      console.log(anu)
			      try {
			        pp_user = await abilbotz.getProfilePicture(mem)
			      } catch (e) {
			        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
			      }
			      try {
			        pp_grup = await abilbotz.getProfilePicture(anu.jid)
			      } catch (e) {
			        pp_grup =
			          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
			      }
			      if (anu.action == "add" && mem.includes(abilbotz.user.jid)) {
			        wily.sendMessage(anu.jid, "Hola, soy un bot de Whatsapp xd, comenzar escriba !menu.", "conversación")
			      }
                if (!isWelkom) return
                if (anu.action == "add" && mem.includes(abilbotz.user.jid)) {
                wily.sendMessage(anu.jid, "Hola, soy un bot de Whatsapp xd, comenzar escriba !menu.", "conversación")}
                if (anu.action == 'add' && !mem.includes(abilbotz.user.jid)) {
                if (!isWelkom) return
                mdata = await wily.groupMetadata(anu.jid)
	            num = anu.participants[0]
                groupName = mdata.subject
                memeg = mdata.participants.length
                let v = wily.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0] 
                teks = `Hola *@${num.split('@')[0]}*
Bienvenido al Grupo *${mdata.subject}*

                buff = await getBuffer(pp_user)
                wily.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `Jangan Lupa Baca Rules Group Ya`, buttons: [{buttonId: `#rulesgroup`,buttonText:{displayText: 'Rules Group'},type:1},{buttonId: `#menu`,buttonText:{displayText: 'Menu'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		        }
                if (anu.action == 'remove' && !mem.includes(abilbotz.user.jid)) {
                if (!isWelkom) return                 
                mdata = await wily.groupMetadata(anu.jid)
	            num = anu.participants[0]
                let w = wily.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `Adios @${num.split('@')[0]}\nXd`
                buff = await getBuffer(pp_user)
                wily.sendMessage(mdata.id, { contentText: `${out}`, footerText: `Siempre Lo Recordaremos`, buttons: [{buttonId: `!bay`,buttonText:{displayText: 'BYE'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
                }
                if (anu.action == 'promote') {
        	    mdata = await abilbotz.groupMetadata(anu.jid)
	            num = anu.participants[0]
                let w = wily.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                pa = `*P R O M O T E D E T E C T E D*\n\nName: ${num.split("@")[0]}\nTag : @${num.split("@")[0]}\nGroup : ${mdata.subject}`
                buff = await getBuffer(pp_user)
                wily.sendMessage(mdata.id, { contentText: `${pa}`, footerText: `*FelicitacionesðŸ¥³*`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'Menu'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
                }
                if (anu.action == 'demote') {
            	mdata = await abilbotz.groupMetadata(anu.jid)
	            num = anu.participants[0]
                let w = abilbotz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                nani = `*D E M O T E D E T E C T E D*\n\nNomor : ${num.split("@")[0]}\nTag : @${num.split("@")[0]}\nGroup : ${mdata.subject}`
                buff = await getBuffer(pp_user)
                wily.sendMessage(mdata.id, { contentText: `${nani}`, footerText: `*Se Elimino Tu Posicion Como AdmnŸ—¿*`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'Menu'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
                }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}
                
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} 
function nocache(module, cb = () => { }) {
    console.log(color('Module', 'green'), color(`'${module} Dipantau Oleh Abil'`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
    
starts()
