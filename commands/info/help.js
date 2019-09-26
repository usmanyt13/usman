const { RichEmbed, Client} = require('discord.js');


module.exports = {
    name:'help',
run: async (client, message, args, prefix) => {
    


    const hembed = new RichEmbed()
    .setColor('#59b6eb')
    .setTitle('Bot Commands')
    .setDescription(`
    
    The Prefix of bot is 'u!':
    
    General Bots Commands Are:

    > help:

     Display This Message
    
     > avatar:
     Display User Avatar
   
     > bot info:
     Display Bot Infomation
   
     > ping:
     Show The Ping of The Bot
   
     > support:
     For Support
   
     > serverinfo:
     Show The Server Information
   
     > userinfo:
     Show The User Info
     
     > invitebot:
     To Get Link To Invite Bot To Your Server
     
     `)

     .addField('Moderation Commands', `
     > announce:
     For Announcement

     > ban:
     To Ban A User

     > kick:
     To Kick A User

     > tempmute:
     To Temporary Mute A Member`)

     .addField('Music Commands', `
     Music COmmands Will Be Availabe Soon
     Thanks For Using This Bot`)
    .setFooter('Owner ⇛ !Usmanᵛᵉʳᶦᶠᶦᵉᵈ✓#1496')
     
   message.channel.send(hembed) ;
}

}
