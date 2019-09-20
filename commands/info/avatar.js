module.exports = {
    name:'avatar',    
    run: async (client, message, args) => {
        message.reply('Here Is Your Avatar',message.author.avatarURL);

    }
}