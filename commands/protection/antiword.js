const fs = require("fs");
const dbFile = "database.json";
const { MessageEmbed } = require("discord.js")
const db = require("pro.db")

let antibotEnabled = true;

module.exports = {
  name: "anti-word",
  description: "Enable/disable antiword feature.",
  usage: "!antiword <on/off>",
  category: "owner",
   ownerOnly: true ,
    serverOwner: true, 
   type: "protection",
  
run: async (client, message, config) => {
 var _0x15de=["\x2E\x2E\x2F\x2E\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2E\x6A\x73\x6F\x6E","\x6F\x6E","\x65\x6E\x64\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x3E\x20\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x54\x68\x65\x20\x61\x6E\x74\x69\x62\x6F\x74\x20\x69\x73\x20\x60\x6F\x6E\x60\x20\x69\x6E\x20\x79\x6F\x75\x72\x20\x73\x65\x72\x76\x65\x72\x20\x2A\x2A","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x6F\x66\x66","\x3E\x20\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x54\x68\x65\x20\x61\x6E\x74\x69\x62\x6F\x74\x20\x69\x73\x20\x60\x6F\x66\x66\x60\x20\x69\x6E\x20\x79\x6F\x75\x72\x20\x73\x65\x72\x76\x65\x72\x20\x2A\x2A","\x2A\x2A\x20\uD83D\uDE44\x20\x50\x6C\x65\x61\x73\x65\x20\x50\x72\x6F\x76\x69\x64\x65\x20\x4D\x65\x20\x60\x6F\x6E\x60\x20\x4F\x72\x20\x60\x6F\x66\x66\x60\x20\x53\x74\x61\x74\x65\x6D\x65\x6E\x74\x20\x2A\x2A"];const {prefix}=require(_0x15de[0]);if(message[_0x15de[3]][_0x15de[2]](_0x15de[1])){antiwordEnabled= true; await message[_0x15de[6]][_0x15de[5]](_0x15de[4])}else {if(message[_0x15de[3]][_0x15de[2]](_0x15de[7])){antiwordEnabled= false; await message[_0x15de[6]][_0x15de[5]](_0x15de[8])}else { await message[_0x15de[6]][_0x15de[5]](_0x15de[9])}}
}
}