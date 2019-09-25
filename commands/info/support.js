const { RichEmbed, Client } = require('discord.js');

module.exports = {
    name:'support',
    run: async (client, message, args) => {

        
        const sembed = new RichEmbed()
        .setTitle('Support Server')
        .setColor('#59b6eb')
        .setDescription(`Support Server Is Available Soon You Can Contact 
        @!Usmanᵛᵉʳᶦᶠᶦᵉᵈ✓#1496
         For Any Kind of Help `);
        
        message.channel.send(sembed);

    }}