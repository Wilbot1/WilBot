const 
{ 
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader');
const client = new WAConnection()
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const toMs = require('ms')
const ms = require('parse-ms')
const os = require('os');
const { fetchJosn, fetchText, kyun } = require('./lib/fetcher')

const { color, bgcolor } = require('./lib/color')
const { antiSpam } = require('./lib/antispam')
const { mess } = require('./message/mess')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const premium = require('./lib/premium');
const setGelud = require('./lib/gameGelud.js')
const simple = require('./lib/simple.js')

let botname = '_｢ Wily ｣ 冬_' 
let lolkey = 'Modal' 
let zekskey = 'Modal' 
let ownername = '_｢ wilfred ｣_' 
let owner = '51985761261' 
let symbol = '*冬*'
let faketeks = `*_｢ Wily ｣ 冬_*` 

banChats = true; 
readGc = true; 
readPc = true;
autovn = false;
autoketik = true;

let hit_today = []
let tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
let ky_ttt = []


let _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/registered.json'))
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ban = JSON.parse(fs.readFileSync('./database/banned.json'))
let absen = JSON.parse(fs.readFileSync('./database/absen.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

module.exports = wily = async (wily, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.ky_ttt
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.'          	
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const ytabilbotz = "51985761261@s.whatsapp.net"
const txt = mek.message.conversation
const botNumber = abilbotz.user.jid
const ownerNumber = [`${owner}@s.whatsapp.net`, `6282293295376@s.whatsapp.net`, `6282293295376@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await abilbotz.chats.all()
const groupMetadata = isGroup ? await wily.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isRegister = register.includes(sender)
const isBanned = ban.includes(sender)
const isPremium = premium.checkPremiumUser(sender, _premium)
const c = args.join(' ')
const m = simple.smsg(wily, mek)
const isListMsg = (type == 'listResponseMessage')
const conts = mek.key.fromMe ? wily.user.jid : wily.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? wily.user.name : conts.notify || conts.vname || conts.name || '-'
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
idttt = []
ers1 = []
ers2 = []
gilir = []
for (let t of ky_ttt){
idttt.push(t.id)
ers1.push(t.er1)
ers2.push(t.er2)
gilir.push(t.gilir)
}
const isTTT = isGroup ? idttt.includes(from) : false
iser1 = isGroup ? ers1.includes(sender) : false
iser2 = isGroup ? ers2.includes(sender) : false
const isOwner = ownerNumber.includes(sender)
const arg = budy.slice(command.length + 2, budy.length)
try{
hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
} catch {
hit_total = { 
value : "-"
}
}
hitall = `${hit_total.value}`
const Wib = moment().utcOffset('+0700').format('HH:mm')
const Wita = moment().utcOffset('+0800').format('HH:mm')
const Wit = moment().utcOffset('+0900').format('HH:mm')
const p1 = await wily.getStatus(sender)
const uptime = process.uptime();
const d = new Date
const locale = 'id'
const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Noche🌃'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Noche🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Tarde🌅'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Tarde🏙'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Mañana🌁'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Noche🌉'
}
var ase = new Date();
var jamss = ase.getHours();
switch(jamss){
                case 0: jamss = "Media noche"; break;
                case 1: jamss = "Media noche"; break;
                case 2: jamss = "Media noche"; break;
                case 3: jamss = "Media noche"; break;
                case 4: jamss = "Media noche"; break;
                case 5: jamss = "Amanecer"; break;
                case 6: jamss = "Mañana"; break;
                case 7: jamss = "Mañana"; break;
                case 8: jamss = "Mañana"; break;
                case 9: jamss = "Mañana"; break;
                case 10: jamss = "Mañana"; break;
                case 11: jamss = "Tarde"; break;
                case 12: jamss = "medio día"; break;
                case 13: jamss = "Tarde"; break;
                case 14: jamss = "Tarde"; break;
                case 15: jamss = "Tarde"; break;
                case 16: jamss = "Tarde"; break;
                case 17: jamss = "Noche"; break;
                case 18: jamss = "Noche"; break;
                case 19: jamss = "Noche"; break;
                case 20: jamss = "Noche"; break;
                case 21: jamss = "Noche"; break;
                case 22: jamss = "Media Noche"; break;
                case 23: jamss = "Media Noche"; break;
            }
var tampilUcapan = "" + jamss;
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'numeric',
year: 'numeric'
})
const daftar1 = `𝘩𝘰𝘭𝘢 ${pushname} ${ucapanWaktu}\n𝘝𝘦𝘳𝘪𝘧𝘪𝘲𝘶𝘦𝘴𝘦 𝘱𝘳𝘪𝘮𝘦𝘳𝘰 𝘢𝘯𝘵𝘦𝘴 𝘥𝘦 𝘶𝘴𝘢𝘳 𝘦𝘭 𝘣𝘰𝘵`
const daftar2 = '𝘝𝘦𝘳𝘪𝘧𝘪𝘲𝘶𝘦 𝘥𝘰𝘯𝘥𝘰 𝘤𝘭𝘪𝘱 𝘦𝘯 𝘣𝘰𝘵𝘰𝘯 𝘥𝘦 𝘮𝘦𝘯𝘴𝘢𝘫𝘦'
const daftar3 = [{buttonId: `.verify`,buttonText: {displayText: `𝘏𝘈𝘎𝘈 𝘊𝘓𝘐𝘗 𝘈𝘘𝘜𝘐`,},type: 1,},]
const kon1 = `𝘩𝘰𝘭𝘢 ${pushname} 𝘊𝘶𝘢𝘭𝘲𝘶𝘪𝘦𝘳 𝘥𝘶𝘥𝘢 𝘱𝘶𝘦𝘥𝘦 𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢𝘳 𝘢𝘮𝘪 𝘥𝘶𝘦ñ𝘰`
const kon2 = `${faketeks}`
const kon3 = [{buttonId: `!sc`,buttonText: {displayText: `𝘞 𝘉𝘖𝘛`,},type: 1,},{buttonId: `!wilbot`,buttonText: {displayText: `wil bot`,},type: 1,}]
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const listmsg = (from, title, desc, list) => { // 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 𝘯𝘰 𝘦𝘯𝘤𝘰𝘯𝘵𝘳𝘢𝘥𝘰 :(
let po = wily.prepareMessageFromContent(from, {"listMessage": {"title": title,"descripcion": desc,"buttonText": "Take Here","listType": "SINGLE_SELECT","sections": list}}, {})
return wily.relayWAMessage(po, {waitForAck: true})
}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔',
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Ganador👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Ganador👑'
        ]
countDownDate = new Date("2022-01-01").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
newYear = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`
countDownDate = new Date("2022-04-02").getTime();
Ramadhan = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`
var ampun = await wily.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await wily.chatRead(jid)
})
var chatss = await wily.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await wily.chatRead(jid)
})
if (autovn) {
if (autovn === false) return
await wily.updatePresence(from, Presence.recording)
} else if (autoketik) {
if (autoketik === false) return
await wily.updatePresence(from, Presence.composing)
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
} 
const reply = (teks) => {
abilbotz.sendMessage(from, teks, text, {quoted:mek})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anu = await wily.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
wily.sendMessage(from, { displayname: nombre, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendMess = (hehe, teks) => {
wily.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? wily.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : wily.sendMessage(from, teks.trim(), extendedText, { quoted: fstatus, contextInfo: { "mentionedJid": memberr } })
}
const Wily = fs.readFileSync ('pee.jpg')
const costum = (pesan, tipe, target, target2) => {
wily.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
let runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
const p2 = '.'

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
  };
  wily.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
  );
};
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
wily.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: fstatus
})
}
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await wily.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
wily.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendBug = async (target) => {
await wily.relayWAMessage(
wily.prepareMessageFromContent(
target,
wily.prepareDisappearingMessageSettingContent(0),
{}
),{ waitForAck: true }) 
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await wily.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
wily.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await wily.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
wily.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: fstatus,
contexInfo: wily
})
}

const katalog = (teks) => {
res = wily.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "Wily uwu", "thumbnail": fs.readFileSync('pee.jpg'), "surface": 'CATALOG' }}, {quoted:fstatus})
wily relayWAMessage(res)}
const fakeyt = (teks) => { 
wily.sendMessage(from, teks, text,{contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: false, sendEphemeral: false, "externalAdReply": { "title": `Hola ${pushname}🗿` , "body": `wily uwu`, "mediaType": "2", "thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg", "mediaUrl": "https://tps.com/channel/UCJPqI5eVhKPXPL2V8y6pIDA", "thumbnail": fs.readFileSync('pee.jpg'), "sourceUrl": "", },mentionedJid:[sender]}, quoted : fstatus})};

const fakestatus = (teks) => { wily.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": faketeks, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('pee.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "51985761261-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} }
const fstatus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('pee.jpg')}}}
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu}, ${pushname}`, 
                            orderTitle: `No Olvides Tu Pedido`,
                            thumbnail: Wily, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

     

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
wily.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const isRegistered = checkRegisteredUser(sender)
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
wily.sendMessage(to, media, type, { quoted: fstatus, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 𝘌𝘯𝘭𝘦𝘤𝘦 𝘥𝘦𝘵𝘦𝘤𝘵𝘢𝘥𝘰 」*\n𝘌𝘯𝘷𝘪𝘢𝘴𝘵𝘦 𝘶𝘯 𝘦𝘯𝘭𝘢𝘤𝘦 𝘴𝘦𝘳𝘢𝘴 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘥𝘰 :(`)
setTimeout(() => {
wily.groupRemove(from, [kic]).catch((e) => { reply(`𝘌𝘳𝘦𝘴 𝘶𝘯 𝘢𝘥𝘮𝘪𝘯`) })
}, 0)
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply('Ad𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳 :v')
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *𝘝𝘐𝘙𝘛𝘌𝘟 𝘋𝘌𝘛𝘌𝘊𝘛𝘈𝘋𝘖* 」\n\n𝘦𝘯𝘷𝘪𝘢𝘴𝘵𝘦 𝘶𝘯 𝘷𝘪𝘳𝘵𝘦𝘹, 𝘴𝘦𝘳𝘢𝘴 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘥𝘰:(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
wily.groupRemove(from, [sender])
}     

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (isCmd && antiSpam.isFiltered(from) && !isGroup) { console.log(color('| SPAM  |', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return reply('𝘦𝘯 5 𝘴𝘦𝘨𝘶𝘯𝘥𝘰s!')}  
if (isCmd && antiSpam.isFiltered(from) && isGroup) { console.log(color('| SPAM  |', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return reply('𝘕𝘰 𝘦𝘯𝘷𝘪𝘦𝘴 𝘴𝘱𝘢𝘮 !!!')}
if (isCmd && !isOwner) antiSpam.addFilter(from)

if (isCmd && !isGroup) {console.log(color('| 𝘗𝘳𝘪𝘷𝘢𝘥𝘰 |', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}

if (isGroup && !isCmd) {console.log(color('| 𝘎𝘳𝘶𝘱𝘰 |', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}

if (!mek.key.fromMe && banChats === false) return


wily.setStatus(`${botname} || Active Time : ${kyun(uptime)} || ${banChats ? 'PUBLIC-MODE' : 'SELF-MODE'}`).catch((_)=>_);

settingstatus = new Date() * 1;
switch (command) {
case 'lolkey':
case 'cekapikey':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lolkey}`)
teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Tipo De Cuenta= ${anu.result.account_type}\n➸ Caducado= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
wily.sendMessage(from, teks, text, {quoted: mek})
break

case 'menu':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
lolot = `*${ucapanWaktu} ${pushname}*`
img = fs.readFileSync('pee.jpg')
ok = `_｢ Bot Whatsapp ｣_
❍ 𝘍𝘦𝘤𝘩𝘢 : ${date}

_｢ User Info ｣_
❍ Name : *${pushname}*
❍ Bio: *${p1 ? `${p1.status}` : '-'}*
❍ User: *wa.me/${sender.split("@")[0]}*
❍ Status : *${isOwner ? 'Owner' :  'User'}*

_｢ Bot Info ｣_
❍ Bot Name : *${botname}*
❍ Owner Name : *${ownername}*
❍ Prefix : 「${prefix}」
❍ Mode : *${banChats ? 'PUBLIC' : 'SELF'}*
❍ Lib : *Baileys*
❍ Calender : *${date}*
❍ Time : *${jmn}*
❍ Speed : *${latensi.toFixed(4)} second*
❍ Runtime : *${kyun(run)}*
` but = [{ buttonId: `.allmenu`, buttonText: { displayText: '‗𝙰𝚕𝚕 𝚖𝚎𝚗𝚞' }, type: 1 }]
sendButLocation( 𝘤𝘳𝘦𝘢𝘵𝘦 𝘣𝘺 𝘸𝘪𝘭𝘧𝘳𝘦𝘥 )
break

case 'allmenu':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
lolot = `*${ucapanWaktu} ${pushname}*`
img = fs.readFileSync('pee.jpg')
ok = `_｢ whatsapp bot｣_

sendButLocation(_｢ 𝙶𝚛𝚞𝚙𝚘 ｣_
${symbol} ${prefix}welcome *_1/0_*
${symbol} ${prefix}antilink *_1/0_*
${symbol} ${prefix}antivirtex *_1/0_*
${symbol} ${prefix}hidetag
${symbol} ${prefix}tagall
${symbol} ${prefix}promoteall
${symbol} ${prefix}demoteall
${symbol} ${prefix}resetlinkgc
${symbol} ${prefix}totag
${symbol} ${prefix}linkgc
${symbol} ${prefix}listonline
${symbol} ${prefix}opengc
${symbol} ${prefix}closegc
${symbol} ${prefix}linkgrub
${symbol} ${prefix}promote 
${symbol} ${prefix}demote 
${symbol} ${prefix}add 
${symbol} ${prefix}kick 
${symbol} ${prefix}delete 

_｢ 𝚂𝚝𝚒𝚌𝚔𝚎𝚛｣_
${symbol} ${prefix}attp *_Teks_*
${symbol} ${prefix}ttp *_Teks_*
${symbol} ${prefix}stiker *_Reply Image_*
${symbol} ${prefix}stickeranime

_｢ 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚜 ｣_
${symbol} ${prefix}play
${symbol} ${prefix}ytsearch
${symbol} ${prefix}tiktokmusic
${symbol} ${prefix}pinterest

_｢𝚌𝚛𝚎𝚊𝚍𝚘𝚛𝚎𝚜 ｣_
${symbol} ${prefix}toimg *_Reply Sticker_*
${symbol} ${prefix}tomp3
${symbol} ${prefix}tovideo
${symbol} ${prefix}imgtourl *_ Image_*

_｢ Otros ｣_
${symbol} ${prefix}nulis *_Teks_*
${symbol} ${prefix}report *_Teks_*
${symbol} ${prefix}delete *_Reply Teks_*

_｢ Game ｣_
${symbol} ${prefix}tictactoe *_Tag_*

_｢ Owner ｣_
${symbol} ${prefix}self
${symbol} ${prefix}public
${symbol} ${prefix}>
${symbol} ${prefix}x
${symbol} ${prefix}eval
${symbol} ${prefix}setsymbol *_Symbol_*
${symbol} ${prefix}restart
${symbol} ${prefix}upswteks *_Teks_*
${symbol} ${prefix}upswsticker *_Reply Sticker_*
${symbol} ${prefix}upswaudio *_Reply Audio_*
${symbol} ${prefix}upswvideo *_Reply Video_*
${symbol} ${prefix}upswimage *_Reply Img_*
${symbol} ${prefix}owner
${symbol} ${prefix}ban *_Tag_*
${symbol} ${prefix}unban *_Tag_*

`but = [{ buttonId: `.allmenu`, buttonText: { displayText: '‗ ❍ Donasi' }, type: 1 }]
sendButLocation(from, lolot, ok, img, but)
break

case 'play':
reply(mess.wait)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return await reply(`Cual Es El Titulo De La Cancion\nEjemplo : ${prefix + command} bailando`)
if (!isPremium) return reply(mess.only.prem)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Titulo  : *${result.title}*\n`
caption += `❖ Tamaño     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await wily.sendMessage(from, ini_buffer, image, { quoted: fstatus, caption: caption })
get_audio = await getBuffer(result.link)
await wily.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: fstatus })
})
})
break

case 'ytsearch':
reply(mess.wait)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
if (!isPremium) return reply(mess.only.prem)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title: ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Publicado : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break

case 'tiktokmusic':
reply(mess.wait)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Donde Esta El Enlace\nEjemplo: ${prefix + command} https://vt.tiktok.com`)
if (!isPremium) return reply(mess.only.prem)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
await wily.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: fstatus })
break

case 'pinterest':
reply(mess.wait)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
if (!isPremium) return reply(mess.only.prem)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await wily.sendMessage(from, ini_buffer, image, { quoted: fstatus })
break


case 'tictactoe':
case 'ttt':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Etiqueta atu oponente! ')
if (isTTT) return reply('Hay un juego en este grupo, espere')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta al objetivo de tu oponente!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
er1 = sender
er2= ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = er2
ky_ttt.push({er1,er2,id,angka,gilir})
wily.sendMessage(from, 
`*🎳  Tictactoe 🎲*

[@${er2.split('@')[0]}] Desafiarte a ser el oponente del Juego🔥
Escribe Y/N aceptar o rechazar un juego

Ket : Escribe/resetgame , Para Reiniciar El Juego En El Grupo!`, text, {contextInfo: {mentionedJid: [er2]}})
break

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
wily.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
{ quoted: fstatus, 
})
sendButMessage (from, kon1, kon2, kon3, { quoted: mek})
   break
   
case 'bay':
  reply(`Sayonara hizo eso\n Que las obras de adoración sean aceptadas :)`)
  break
  
 case 'selamatdatang':
  reply('Bienvenido, no olvide leer las reglas :)\n Buena suerte👏')
  break
  
  case 'toimg':
case 'toimage':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await wily.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, 'Error al convertir la etiqueta en imagen')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `NO OLVIDES DE SEGUIRME EN IG: wilyo_o`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
wily.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await wily.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('No se pudo convertir el video a mp3')
bufferlkj = fs.readFileSync(ran)
wily.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: fstatus })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await abilbotz.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
abilbotz.sendMessage(from, buffer, video, { quoted: fstatus, caption: 'Success' })
fs.unlinkSync(ran)
})


case 'demoteall':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
   	members_id.push(mem.jid)
  	}
wily.groupDemoteAdmin(from, members_id)
break

case 'promoteall':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
   	members_id.push(mem.jid)
  	}
wily.groupMakeAdmin(from, members_id)
break
case 'resetlinkgc':
 case 'resetlinkgroup':
 case 'revoke':
 if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
  json = ['action', 'inviteReset', from]
 wily.query({json, expect200: true})
  reply('Enlace restablecido correctamente' )
 break
 
 case 'online':
case 'listonline':
case 'here':                
case 'nyimak':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
 try {
 let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
 let online = [...Object.keys(abilbotz.chats.get(ido).presences), abilbotz.user.jid]
 wily.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fstatus, contextInfo: { mentionedJid: online }})
 } catch (e) {
 reply(`${e}`)
}
break
 
 case 'welcome':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome 1 untuk mengaktifkan\n${prefix}welcome 0 untuk menonaktifkan`)
if ((args[0]) === '1') {
if (isWelkom) return reply('La bienvenida esta activa')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓La bienvenida se activo correctamente\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === '0') {
if (!isWelkom) return reply('La bienvenida esta desactivado')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓La bienvenida se desactivo correctamente\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 Para activar, 0 Para desactivar')
}
break
case 'antilink':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
  if (!q) return reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
  if (args[0].toLowerCase() === '1'){
  if (isAntiLink) return reply(`Udah aktif`)
  antilink.push(from)
  fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
  reply('*「 ANTILINK ACTIVADO  」*\n\nLos que envian enlaces seran eliminados!')
  } else if (args[0].toLowerCase() === '0'){
  let anu = antilink.indexOf(from)
  antilink.splice(anu, 1)
  fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
  reply('*「 ANTILINK DESACTIVADO 」*')
  } else {
  reply('1 Para activar, 0 Para desactivar')
}
case 'antivirtex':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
  if (!q) return reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
  if (args[0].toLowerCase() === '1'){
  if (isAntiVirtex) return reply(`Udah aktif`)
  antivirtex.push(from)
  fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
  reply('*「 ANTI VIRTEX SE ACTIVO」*\n\nQuien envie virtex sera eliminado!')
  } else if (args[0].toLowerCase() === '0'){
  let anu = antivirtex.indexOf(from)
  antivirtex.splice(anu, 1)
  fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
  reply('*「 ANTI VIRTEX SE DESACTIVO 」*')
  } else {
  reply('1 Para activar, 0 Para desactivar')
}
  break
case 'opengc' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
wily.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'closegc' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
wily.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await abilbotz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
wily.sendMessage(from, yeh, text, { quoted: fstatus })
break
case 'promote' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Ahora eres un admin del grupo:\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
wily.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
wily.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Ya no eres admin del grupo:\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
wily.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
wily.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
try {
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await wily.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Ya esta en el grupo!')
if(inv[0].code == 403) return reply('Error, usuario pv)
if(inv[0].code == 408) return reply('Error, usuario acaba de salir')
if(inv[0].code == 401) return reply('Error, el usuario bloqueo al bot')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await wily.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Ya esta en el grupo!!')
if(inv[0].code == 403) return reply('Falló, Porque En Privado')
if(inv[0].code == 408) return reply('Falló, porque acaba de salir'')
if(inv[0].code == 401) return reply('Error, porque el bot está bloqueado')
}
} catch {
return 
}
break

case 'sticker':
case 'stiker':
case 's':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await wily.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Wily, `Igwily`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await wily.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Error, en el momento de convertir ${tipe} asegúrese de enviar videos que no superen los 9 segundos')
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verificado, `~ Aquí hay una pegatina Gif`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await wily.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Error, se produjo un error')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
wily.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: fstatus })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Envía una imagen o responde a una imagen con ${prefix}stickerwm nombre|author,`)
}
break
case 'anime':
case 'stickeranime':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerFromUrl(from, pjrr)
}
)
break
case 'del':
                case 'delete':
                if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
                    wily.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                    break

case 'ban':
if (!isOwner && !mek.key.fromMe) return
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(bnnd)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakestatus(`Nomor ${bnnd} telah dibanned!`)
break

case 'unban':
if (!isOwner && !mek.key.fromMe) return
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unb = ban.indexOf(ya)
ban.splice(unb, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakestatus(`Nomor ${ya} telah di unban!`)
break

case 'public':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe ) return
if (banChats === true) return 
banChats = true
reply(`Sukses mode publik gan`)
break

case 'self':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe ) return
if (banChats === false) return
banChats = false
reply(`Success mode self gan`)
break


case 'verify':
if (isRegistered) return reply('tu cuenta está verificada')
const SerialUser = createSerial(18)
 try {
ppimg = await wily.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, SerialUser)
verif = ` *REGISTRASE* 」

💠Name : *${pushname}*
💠API : *+${sender.split('@')[0]}*
💠Serial : *${SerialUser}*
💠Total : *${_registered.length} Pengguna*`

ok = `${botname}`
img = fs.readFileSync('pee.jpg')
but = [{buttonId: `.menu`,buttonText:{displayText: `Menu`},type:1}]
sendButImage(from, verif, ok, img, but)
setTimeout( () => {
reply(`*Gracias por registrarse!*`)
}, 3000)
break

default:
}
if (isTTT && iser2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=❌
er2 @${tty.er2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Turno de = @${tty.er1.split('@')[0]}`
  wily.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
wily.sendMessage(from, `Ya @${tty.er2.split('@')[0]} se niega a participar :(

*(Le teme al éxito 👎👎👎👎)*`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.er2]}})
}
}

if (isTTT && iser1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, utiliza los otros vacíos')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno!.')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].er1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado 🎲

*El ganador es : *@${tty.er1.split('@')[0]} UwU*\n`
ucapan2 = `*🎳 Result 🎲*

*El resultado final:*

${ttt}`
wily.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Resultado 🎲*

*_Empate 🐢_*`
ucapan2 = `*🎳 Resultado 🎲*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Tictactoe 🎲*

er2 @${tty.er2.split('@')[0]}=⭕
er1 @${tty.er1.split('@')[0]}=❌

${ttt}

Turno de = @${tty.er2.split('@')[0]}`
 wily.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}
if (isTTT && iser2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese el número correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, utiliza los otros')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno!.')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].er2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado 🎲*

El ganador es : *@${tty.er2.split('@')[0]}*\n`
ucapan2 = `*🎳 Tictactoe 🎲*

*El resultado final:*

${ttt}`
wily.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Resultado 🎲*

*Empate 🐢👎*`
ucapan2 = `*🎳 Resultado 🎲*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=⭕
er2 @${tty.er2.split('@')[0]}=❌

${ttt}
 
Turno de = @${tty.er1.split('@')[0]}`
 wily.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}
}
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}




