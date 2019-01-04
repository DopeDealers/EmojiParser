
## Installation

```sh
npm i --save emojiparse.js
```

> LiquidBlast Gang https://liquidblast.net

## Examples
```js
 const Discord = require("discord.js");
 const Emoji = require("emojiparse.js");

 const e = Emoji.get(args[0]);
 
 const embed = new Discord.RichEmbed()
    .setImage(e.url)
    message.channel.send({
    embed
});
```

![OwO](https://raw.githubusercontent.com/DopeDealers/EmojiParser/master/main.jpg)
