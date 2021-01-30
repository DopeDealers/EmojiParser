
## Installation

```sh
npm i --save emojiparse.js
```

> FR sweeb gang

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

