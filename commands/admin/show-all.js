const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "show-all",
  aliases: ["sa"],
  description: "to show all chat",
  usage: ["!show-all"],
  category: "admin",
  botPermission: ["MANAGE_CHANNELS"],
  authorPermission: ["MANAGE_CHANNELS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {


   var _0x3bce=["\x6E\x61\x6D\x65","\x40\x65\x76\x65\x72\x79\x6F\x6E\x65","\x66\x69\x6E\x64","\x63\x61\x63\x68\x65","\x72\x6F\x6C\x65\x73","\x67\x75\x69\x6C\x64","\x74\x68\x65\x6E","\x63\x72\x65\x61\x74\x65","\x70\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x4F\x76\x65\x72\x77\x72\x69\x74\x65\x73","\x66\x6F\x72\x45\x61\x63\x68","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x61\x6C\x6C\x20\x72\x6F\x6D\x73\x20\x68\x61\x76\x65\x20\x62\x65\x65\x6E\x20\x73\x68\x6F\x77\x6E\x2A\x2A","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C"];let everyone=message[_0x3bce[5]][_0x3bce[4]][_0x3bce[3]][_0x3bce[2]]((_0x3b19x2)=>{return _0x3b19x2[_0x3bce[0]]=== _0x3bce[1]});message[_0x3bce[5]][_0x3bce[10]][_0x3bce[3]][_0x3bce[9]]((_0x3b19x3)=>{_0x3b19x3[_0x3bce[8]][_0x3bce[7]](everyone,{VIEW_CHANNEL:true})[_0x3bce[6]](()=>{})});message[_0x3bce[13]][_0x3bce[12]](`${_0x3bce[11]}`)
  }
}