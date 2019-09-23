//const config = require('../config.json')
module.exports = {
    name:'help',
run: async (client, message, args, prefix) => {
message.reply(`
**These Are The Available Commands:-**

__**Commands**__

__**:construction:Under Construction:construction:**__

Use **u!help_<command>** for details

 __**General Commands**__

> help: Responds With This Message

> info: Responds With Informations About Bot

> ping: Responds With The Latency From The Bot

> serverinfo: Responds Wiht Informations About The Server

__**Fun Commands**__

> cf/catfacts: Responds With Random Cat Fact

> df/dogfacts: Responds With Radndom Dog Fact

> roll: Roll Dice

> flip: Flip Coin

> RockPaperScissor/rps: Play RPS With Bot

> meme/memes: Responds With Random Memes

> 8ball: Wisdom

u!giveaway <winners> <duration in ms> <prize>\n\n`)

}
};