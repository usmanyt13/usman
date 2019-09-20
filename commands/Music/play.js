const ytdl = require('ytdl-core');


module.exports = {
    name:'play',
    run: async (client, message, args, ops) => {
        if (!message.member.voiceChannel)return message.channel.send('Please Join A Voice Channel');

        if (message.guild.me.voiceChannel) return message.channel.send('Soory I/m in a Voice Channel');

        if (!args[0]) return message.channel.send('Play Enter A UrL');

        let validate = await ytdl.validateURL(args[0]);

        if (!validate) return message.channel.send('Please Enter A Calid **URL**');

        let info = await ytdl.getInfo(args[0]);

        let connection = await message.member.voiceChannel.join();
         
        let dispactcher = await connection.play(ytdl(args[0], { filter: 'audioonly'}));

        message.channel.send(`Now Playing ${info.title}`)

    }
}