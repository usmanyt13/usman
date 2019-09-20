module.exports = {
    name:'avatar',    
    run: async (client, message, args) => {
        message.reply(message.author.avatarURL);

    }
}
