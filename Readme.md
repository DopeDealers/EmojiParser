
## Installation

```sh
npm i --save emoji-parser
OR
npm i --save dopedealers/emojiparser
```

> LiquidBlast Gang https://liquidblast.net

## Examples
```js
 const Discord = require("discord.js");
 const Emoji = require("emoji-parser");

 const e = Emoji.get(args[0]);
 
 const embed = new Discord.RichEmbed()
    .setImage(e.url)
    message.channel.send({
    embed
});
```

![OwO](https://raw.githubusercontent.com/DopeDealers/EmojiParser/master/main.jpg)
