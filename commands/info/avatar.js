const MessageEmbed = require('discord.js');
module.exports = {
    name:'avatar',    
    run: async (client, message, args) => {
        if(message.content === `u!avatar`){
      let user;

      if(message.mentions.users.first()) {
          user = message.mentions.users.first();
      
      }else  {
          user = message.author;
      };

      let av = user.displayAvatarURL({dynamic:true, size:4096 });
      const embed = new Discord.MessageEmbed()
      .setTitle (`${user.tag}`)
      .setDescription(`**Avatar**`)
      .setColor('#000000')
      .setURL(av)
      .setImage(av)
    message.channel.send(embed);
    }

    }
}
