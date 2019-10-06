const {RichEmbed } = require('discord.js');

module.exports = {
    name:'age',
    run: (client, message, args) => {

        //const member = getMember(message, args.join(" "));

        //onst created = formatDate(member.user.createdAt);


    const aembed = new RichEmbed()
    .setTitle('Age')
    .setDescription('Age Of Owner')
    .addField('Owner Age', 'The Age Of My Owner Is 15 Years')
    //.addField('Bot Age', `${client.user.createdAT}`)
    //.addField('Your Accoount Age', `${created}`)
    .setColor('#15f153')

    message.channel.send(aembed);

}
}