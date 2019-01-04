/*

 we will be getting the emoji url and outputting it to discord
 with a discord.js bot and showing you the emoji you've chosen
 within the arguments so say
 '?findemoji :poggers:' will output the emoji's picture within
 a RichEmbed.

*/



const Discord = require('discord.js');
const client = new Discord.Client();
const Emoji = require("emojiparse.js");
/* will only work if you create a config.json file and add this code to it
{ 
  "token"  : "bot_token",
  "prefix" : "?"
}
*/
const config = require("./config.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const e = Emoji.get(args[0]);

  if(command === "emoji") {
    const embed = new Discord.RichEmbed()
    .setImage(e.url)
    message.channel.send({
    embed
    });
  }


});

client.login(config.token);