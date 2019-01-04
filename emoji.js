const Discord = require("discord.js");

module.exports = class emoji {


static get(emoji) {
    if (!emoji) return null;
    emoji = Discord.Util.parseEmoji(emoji);
    if(emoji == null) return null;
    if(emoji.id == null) return null;
    let type = "";
    if (emoji.animated) type = "gif";
    else type = "png";
    return { 
      url: `https://cdn.discordapp.com/emojis/${emoji.id}.${type}`, id: emoji.id, name: emoji.name, animated: emoji.animated }; 
    
  
  }
  // shit code
};