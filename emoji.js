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

  static debug(emoji) {
    // literally just logs it to console lol
    if (!emoji) return null;
    emoji = Discord.Util.parseEmoji(emoji);
    if(emoji == null) return null;
    if(emoji.id == null) return null;
    let type = "";
    if (emoji.animated) type = "gif";
    else type = "png";
    var test = { url: `https://cdn.discordapp.com/emojis/${emoji.id}.${type}`, id: emoji.id, name: emoji.name, animated: emoji.animated };
    return console.log(test);
  }

  static owowhatsthis() {
    console.log("Hey! thanks for using my extension <3 if you want you can support me and all my work for all my projects at patreon!");
    console.log("https://www.patreon.com/sempon");
  }
};