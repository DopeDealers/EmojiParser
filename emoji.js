const {Util} = require("discord.js");


/**
 * @name Emoji
 */
module.exports = class Emoji {
  constructor() {
  }

  /**
   *  @name get
   *  @argument {String} emoji
   *  @returns {Object} id, name, animated, url
   */
  async get(emoji) {
    if (!emoji) return null;
    emoji = Util.parseEmoji(emoji)
    if(emoji == null) return null;
    if(emoji.id == null) return null;
    let type = "";
    if (emoji.animated) type = "gif";
    else type = "png";
    console.log();
    const temp = { 
      id: emoji.id, name: emoji.name, animated: emoji.animated, url: `https://cdn.discordapp.com/emojis/${emoji.id}.${type}?v=1` }; 
    return temp;
  }
};