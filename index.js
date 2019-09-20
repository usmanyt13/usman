const { Client, RichEmbed, Collection  } = require("discord.js");

const TOKEN = "NjE5NTcyMDk0Mzc5ODg0NTc0.XYUR3g.oCUGMC22hYlUrmSXHcvw7UzF5NA";

const prefix = "u!";

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online in ${client.guilds.size}!`);

    // Set the user presence
    client.user.setPresence({
        status: "dnd",
        game: {
            name: "Getting Ready | u!help",
            type: "WATCHING"
        }
    }); 
})


client.on("message", async message => {
    

    // If the author's a bot, return
    // If the message was not sent in a server, return
    // If the message doesn't start with the prefix, return
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);

});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    

    const wembed = new RichEmbed()
.setColor('#6c8cff')
.setDescription('Welcome To The Server')
.setTitle('Welcome')
    // Send the message, mentioning the member
    channel.send(wembed `${member}`);
}); 


client.login(TOKEN);
