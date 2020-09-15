const { Client, RichEmbed, Collection  } = require("discord.js");

const prefix = "u!";

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.once('ready', () =>{
    console.log('I iz Online!');

    client.user.setActivity("Someone", {type: "WATCHING"})

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })

    });

client.on('message', message => {

   
    
    if (message.content === 'Hello') {
      
      message.channel.send('How Are You?');
    }
    if (message.content === 'Fine') {
      message.channel.send('So What Can I Do')
    }
  });




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
    
    let ffff = member.displayAvatarURL
    const wembed = new RichEmbed()
.setColor('#6c8cff')
.setDescription(`Welcome To The Server ${member} Hope You Enjoy Here`)
.setTitle('Welcome')
.setThumbnail(ffff)

.setFooter(member.displayName, member.user.displayAvatarURL);

  
    channel.send(wembed);
}); 
 
client.on('message', msg => {
  if(msg.content === `${prefix}avatar`) {
    let avmem;

        if(msg.mentions.users.first()) {
            avmem = msg.mentions.users.first();
        
        }else  {
            avmem = msg.author;
        };

        const av = avmem.displayAvatarURL;

        const embed = new RichEmbed()
        .setTitle (`${avmem.tag}`)
        .setDescription(`**Avatar**`)
        .setColor('#000000')
        .setURL(av)
        .setImage(av)
    msg.channel.send(embed);
  }
});




client.login(process.env.TOKEN);
