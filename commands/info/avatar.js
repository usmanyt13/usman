const Discord = require('discord.js');
module.exports = {
    name:'avatar',    
    run: async (client, message, args) => {
        if(message.content === `u!avatar`){
      let avmem;

      if(message.mentions.users.first()) {
          avmem = message.mentions.users.first();
      
      }else  {
          avmem = message.author;
      };

            let avatar = avmem.displayAvatarURL({dynamic:true, size:4096 });

      
      const embed = new Discord.MessageEmbed()
      .setTitle (`${user.tag}`)
      .setDescription(`**Avatar**`)
      .setColor('#000000')
      .setURL(avatar)
      .setImage(avatar)
    message.channel.send(embed);
    }

    }
}
