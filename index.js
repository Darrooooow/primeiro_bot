const Discord = require('discord.js');

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


const bot = new Discord.Client();

const token = 'NzQ1NzMzMjcyMTMwMDI3NTkx.Xz2EOw.b1YdPCCz99iAu1WetkN01rGBkV8';
bot.login(token)
bot.on('ready', () =>  {
    console.log('--------------------')
    console.log('CONVENTO ONLINE')
    console.log('---------------------')
})

if(cmd === ${prefix}avatar) {
    let user = message.mentions.users.first() || message.author;
  
    let userinfo = {};
    userinfo.avatar = user.avatarURL;
    userinfo.name = user.username;
    userinfo.discrim = ${user.discriminator};
    userinfo.id = user.id;
  
    const embed = new Discord.RichEmbed()
    .setTitle(:frame_photo:  Avatar de: ${user.tag})
    .setDescription(Clique [aqui](${user.avatarURL}) para baixar a imagem.)
    .setImage(userinfo.avatar)
    .setColor("#28a428")
  
    message.channel.send(embed)
  }