const { Client, RichEmbed } = require('discord.js');


module.exports = {
    name:'serverinfo',
    run: (client, message, args) => {
        let sicon = message.guild.iconURL;
        let owne = message.guild.ownerID;
    let serverembed = new RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Server Owner", `<@${owne}>`)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    message.channel.send(serverembed);
    }
}
