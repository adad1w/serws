const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "server",
  aliases: ["s"],
  description: "information the server",
  usage: ["!server"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {

var _0x2aff=["\x6D\x65\x6D\x62\x65\x72\x43\x6F\x75\x6E\x74","\x67\x75\x69\x6C\x64","\x73\x69\x7A\x65","\x63\x61\x63\x68\x65","\x6D\x65\x6D\x62\x65\x72\x73","\x66\x65\x74\x63\x68","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x65\x6D\x6F\x6A\x69\x73","\x73\x74\x69\x63\x6B\x65\x72\x73","\x62\x6F\x74","\x75\x73\x65\x72","\x66\x69\x6C\x74\x65\x72","\x73\x74\x61\x74\x75\x73","\x70\x72\x65\x73\x65\x6E\x63\x65","\x6F\x6E\x6C\x69\x6E\x65","\x64\x6E\x64","\x69\x64\x6C\x65","\uD83C\uDD94\x20\x53\x65\x72\x76\x65\x72\x20\x49\x44\x3A","","\x67\x75\x69\x6C\x64\x49\x64","\uD83D\uDCC6\x20\x43\x72\x65\x61\x74\x65\x64\x20\x4F\x6E\x3A","\x2A\x2A\x3C\x74\x3A","\x63\x72\x65\x61\x74\x65\x64\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x66\x6C\x6F\x6F\x72","\x3A\x52\x3E\x2A\x2A","\uD83D\uDC51\x20\x4F\x77\x6E\x65\x64\x20\x62\x79\x3A","\x3C\x40\x21","\x6F\x77\x6E\x65\x72\x49\x64","\x3E","\uD83D\uDC65\x20\x20\x4D\x65\x6D\x62\x65\x72\x73\x20\x28","\x29\x3A","\x20\x2A\x2A","\x2A\x2A\x20\x4F\x6E\x6C\x69\x6E\x65\x20\x7C\x20\x2A\x2A","\x2A\x2A\x20\x42\x6F\x74\x73\x20\x7C\x20\x2A\x2A","\x2A\x2A\x20\x48\x75\x6D\x61\x6E\x73\x20\x20","\uD83D\uDCAC\x20\x43\x68\x61\x6E\x6E\x65\x6C\x73\x20\x28","\x29\x20\x26\x20\x52\x6F\x6C\x65\x73\x3A","\x2A\x2A\x20","\x74\x79\x70\x65","\x47\x55\x49\x4C\x44\x5F\x54\x45\x58\x54","\x2A\x2A\x20\x54\x65\x78\x74\x20\x7C\x20\x20\x2A\x2A","\x47\x55\x49\x4C\x44\x5F\x56\x4F\x49\x43\x45","\x20\x2A\x2A\x20\x56\x6F\x69\x63\x65\x20\x7C\x20\x2A\x2A\x20","\x72\x6F\x6C\x65\x73","\x20\x2A\x2A\x52\x6F\x6C\x65\x73\x20","\u2B50\x20\x45\x6D\x6F\x6A\x69\x65\x73\x20\x26\x20\x73\x74\x69\x63\x6B\x65\x72\x73\x3A","\x20\x2A\x2A\x20\x53\x74\x69\x63\x6B\x65\x72\x73\x20\x7C\x20\x2A\x2A\x20","\x20\x2A\x2A\x45\x6D\x6F\x6A\x69\x65\x73\x20","\uD83D\uDC8E\x20\x42\x6F\x6F\x73\x74\x20\x54\x69\x65\x72\x28","\x54\x49\x45\x52\x5F","\x72\x65\x70\x6C\x61\x63\x65","\x70\x72\x65\x6D\x69\x75\x6D\x54\x69\x65\x72","\x29\x20\x73\x74\x61\x74\x65\x20\x3A\x20","\x42\x6F\x6F\x73\x74\x20\x54\x69\x65\x72\x28\x2A\x2A\x20","\x20\x2A\x2A\x29\x20\x20\x7C\x20\x20\x20\x2A\x2A\x20","\x70\x72\x65\x6D\x69\x75\x6D\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x43\x6F\x75\x6E\x74","\x20\x2A\x2A\x20\x42\x6F\x6F\x73\x74\x73\x20","\uD83C\uDF10\x20\x52\x65\x67\x69\x6F\x6E\x3A\x20","\x70\x72\x65\x66\x65\x72\x72\x65\x64\x4C\x6F\x63\x61\x6C\x65","\uD83D\uDD12\x20\x56\x65\x72\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x3A\x20","\x76\x65\x72\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x4C\x65\x76\x65\x6C","\x61\x64\x64\x46\x69\x65\x6C\x64\x73","\x70\x6E\x67","\x69\x63\x6F\x6E\x55\x52\x4C","\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x6E\x61\x6D\x65","\x27\x73\x20\x49\x6E\x66\x6F","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x42\x4C\x41\x43\x4B","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x72\x65\x70\x6C\x79"];if(message[_0x2aff[1]][_0x2aff[0]]!== message[_0x2aff[1]][_0x2aff[4]][_0x2aff[3]][_0x2aff[2]]){ await message[_0x2aff[1]][_0x2aff[4]][_0x2aff[5]]()};const members=message[_0x2aff[1]][_0x2aff[4]][_0x2aff[3]];const channels=message[_0x2aff[1]][_0x2aff[6]][_0x2aff[3]];const emojis=message[_0x2aff[1]][_0x2aff[7]][_0x2aff[3]][_0x2aff[2]];const stickers=message[_0x2aff[1]][_0x2aff[8]][_0x2aff[3]][_0x2aff[2]];const bots=message[_0x2aff[1]][_0x2aff[4]][_0x2aff[3]][_0x2aff[11]]((_0x52f1x6)=>{return _0x52f1x6[_0x2aff[10]][_0x2aff[9]]})[_0x2aff[2]];const human=message[_0x2aff[1]][_0x2aff[4]][_0x2aff[3]][_0x2aff[11]]((_0x52f1x6)=>{return !_0x52f1x6[_0x2aff[10]][_0x2aff[9]]})[_0x2aff[2]];let onlineMembers=message[_0x2aff[1]][_0x2aff[4]][_0x2aff[3]][_0x2aff[11]]((_0x52f1x6)=>{return _0x52f1x6[_0x2aff[13]][_0x2aff[12]]== _0x2aff[14]})[_0x2aff[2]];let dndMembers=message[_0x2aff[1]][_0x2aff[4]][_0x2aff[3]][_0x2aff[11]]((_0x52f1x6)=>{return _0x52f1x6[_0x2aff[13]][_0x2aff[12]]== _0x2aff[15]})[_0x2aff[2]];let idelMembers=message[_0x2aff[1]][_0x2aff[4]][_0x2aff[3]][_0x2aff[11]]((_0x52f1x6)=>{return _0x52f1x6[_0x2aff[13]][_0x2aff[12]]== _0x2aff[16]})[_0x2aff[2]];let Embed= new MessageEmbed()[_0x2aff[69]](_0x2aff[68])[_0x2aff[67]]({name:`${_0x2aff[18]}${message[_0x2aff[1]][_0x2aff[65]]}${_0x2aff[66]}`,iconURL:message[_0x2aff[1]][_0x2aff[63]]({dynamic:true,size:1024,format:_0x2aff[62]})})[_0x2aff[64]](message[_0x2aff[1]][_0x2aff[63]]({dynamic:true,size:1024,format:_0x2aff[62]}))[_0x2aff[61]]({name:_0x2aff[17],value:`${_0x2aff[18]}${message[_0x2aff[19]]}${_0x2aff[18]}`,inline:true},{name:_0x2aff[20],value:`${_0x2aff[21]}${Math[_0x2aff[23]](message[_0x2aff[1]][_0x2aff[22]]/ 1000)}${_0x2aff[24]}`,inline:true},{name:_0x2aff[25],value:`${_0x2aff[26]}${message[_0x2aff[1]][_0x2aff[27]]}${_0x2aff[28]}`,inline:true},{name:`${_0x2aff[29]}${message[_0x2aff[1]][_0x2aff[0]]}${_0x2aff[30]}`,value:`${_0x2aff[31]}${onlineMembers+ dndMembers+ idelMembers}${_0x2aff[32]}${bots}${_0x2aff[33]}${human}${_0x2aff[34]}`,inline:true},{name:`${_0x2aff[35]}${message[_0x2aff[1]][_0x2aff[6]][_0x2aff[3]][_0x2aff[2]]}${_0x2aff[36]}`,value:`${_0x2aff[37]}${channels[_0x2aff[11]]((_0x52f1xc)=>{return _0x52f1xc[_0x2aff[38]]=== _0x2aff[39]})[_0x2aff[2]]}${_0x2aff[40]}${channels[_0x2aff[11]]((_0x52f1xc)=>{return _0x52f1xc[_0x2aff[38]]=== _0x2aff[41]})[_0x2aff[2]]}${_0x2aff[42]}${message[_0x2aff[1]][_0x2aff[43]][_0x2aff[3]][_0x2aff[2]]}${_0x2aff[44]}`,inline:true},{name:_0x2aff[45],value:`${_0x2aff[37]}${stickers}${_0x2aff[46]}${emojis}${_0x2aff[47]}`,inline:true},{name:`${_0x2aff[48]}${message[_0x2aff[1]][_0x2aff[51]][_0x2aff[50]](_0x2aff[49],_0x2aff[18])}${_0x2aff[52]}`,value:`${_0x2aff[53]}${message[_0x2aff[1]][_0x2aff[51]][_0x2aff[50]](_0x2aff[49],_0x2aff[18])}${_0x2aff[54]}${message[_0x2aff[1]][_0x2aff[55]]}${_0x2aff[56]}`},{name:`${_0x2aff[57]}`,value:`${_0x2aff[18]}${message[_0x2aff[1]][_0x2aff[58]]}${_0x2aff[18]}`,inline:true},{name:`${_0x2aff[59]}`,value:`${_0x2aff[18]}${message[_0x2aff[1]][_0x2aff[60]]}${_0x2aff[18]}`,inline:true});message[_0x2aff[70]]({embeds:[Embed]})
  }
}