const { RichEmbed } = require("discord.js");


module.exports = {
    name: "help",
    category: "info",
    description: "Help Ccommand",
    run: async (client, message, args) => {
        const helpembed = new RichEmbed()
        .setTitle('Commands')
        
        .setDescription('Member Commands')
        
        .addField('Prefix = u!')
        
        .addField('ping')
        
        .addField('userinfo')
        
        .addField('help')
        
        .setTitle('Commands')
        
        .addField('Kick')
        
        .addField('Ban')
        
        .setColor('#6C8CFF');
        message.channel.send(helpembed);
    }
}