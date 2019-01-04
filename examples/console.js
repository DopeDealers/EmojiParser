/* 

 we will be getting the url/image
 of a discord emoji from console
 with this code
 <o/

*/


const Discord = require('discord.js');
const Emoji = require("emojiparse.js");

const e = Emoji.get("<emojiName:emojiid:>");

console.log(e.url);