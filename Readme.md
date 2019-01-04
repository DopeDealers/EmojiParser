
## Installation

```sh
npm i --save emojiparser
```

## Examples
```const Discord = require("discord.js");
 const Emoji = require("emojiparser");

 const e = Emoji(args[0]);
 
 const embed = new Discord.RichEmbed()
    .setImage(e.url)
    message.channel.send({
    embed
});```

> LiquidBlast Gang https://liquidblast.net