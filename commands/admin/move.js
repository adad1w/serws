const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "move",
  aliases: ["سحب", "اسحب" ],
  description: "moves a member to another voice channel",
  usage: ["!move @user"],
  category: "admin",
  botPermission: ["MOVE_MEMBERS"],
  authorPermission: ["MOVE_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {
    
var _0x8726=["\x66\x69\x72\x73\x74","\x6D\x65\x6D\x62\x65\x72\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64","\x69\x20\x63\x6F\x75\x6C\x64\x6E\x27\x74\x20\x72\x65\x70\x6C\x79\x20\x74\x6F\x20\x74\x68\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x3A\x20","\x6D\x65\x73\x73\x61\x67\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x6D\x65\x6E\x74\x69\x6F\x6E\x20\x6D\x65\x6D\x62\x65\x72\x20\x6F\x72\x20\x69\x64\x2A\x2A","\x72\x65\x70\x6C\x79","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x49\x20\x63\x61\x6E\x27\x74\x20\x66\x69\x6E\x64\x20\x74\x68\x69\x73\x20\x6D\x65\x6D\x62\x65\x72\x2A\x2A","\x63\x68\x61\x6E\x6E\x65\x6C","\x76\x6F\x69\x63\x65","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x74\x68\x69\x73\x20\x6D\x65\x6D\x62\x65\x72\x20\x69\x73\x20\x6E\x6F\x74\x20\x69\x6E\x20\x76\x6F\x69\x63\x65\x20\x63\x68\x61\x6E\x6E\x65\x6C\x2A\x2A","\x6D\x65\x6D\x62\x65\x72","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x59\x6F\x75\x20\x61\x72\x65\x6E\x27\x74\x20\x69\x6E\x20\x61\x20\x76\x6F\x69\x63\x65\x20\x63\x68\x61\x6E\x6E\x65\x6C\x2A\x2A","\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x4D\x6F\x76\x65\x64\x20","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x75\x73\x65\x72","\x20\x54\x6F\x20","\x6E\x61\x6D\x65","\x2A\x2A","\x74\x68\x65\x6E","\x73\x65\x74\x43\x68\x61\x6E\x6E\x65\x6C"];var member=message[_0x8726[2]][_0x8726[1]][_0x8726[0]]()|| message[_0x8726[5]][_0x8726[1]][_0x8726[4]][_0x8726[3]](args[0]);if(!args[0]){return message[_0x8726[11]]({content:`${_0x8726[10]}`})[_0x8726[9]]((_0xd642x2)=>{console[_0x8726[8]](`${_0x8726[6]}`+ _0xd642x2[_0x8726[7]])})};if(!member){return message[_0x8726[11]]({content:`${_0x8726[12]}`})[_0x8726[9]]((_0xd642x2)=>{console[_0x8726[8]](`${_0x8726[6]}`+ _0xd642x2[_0x8726[7]])})};if(!member[_0x8726[14]][_0x8726[13]]){return message[_0x8726[11]]({content:`${_0x8726[15]}`})};if(!message[_0x8726[16]][_0x8726[14]][_0x8726[13]]){return message[_0x8726[11]]({content:`${_0x8726[17]}`})}else {let vchannel=message[_0x8726[16]][_0x8726[14]][_0x8726[13]];member[_0x8726[14]][_0x8726[25]](vchannel)[_0x8726[24]](()=>{message[_0x8726[11]]({content:`${_0x8726[18]}${member[_0x8726[20]][_0x8726[19]]}${_0x8726[21]}${message[_0x8726[16]][_0x8726[14]][_0x8726[13]][_0x8726[22]]}${_0x8726[23]}`})})}
  }
}