const Discord = require("discord.js");

module.exports.run = async (client , message , args) => {
    /*
    var stringlink = 'Invite link'
    
    var lank =`https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot&permissions=8`
    var embed = new Discord.RichEmbed()
    .setDescription('Click on '+ "url":lank)
    .setColor(0xff0000)
    .setTimestamp()

message.author.send(embed).then(message.channel.send(`I've sent you MOON's invite link in DM's.`))
*/
message.author.send({embed: {
    color:0xff0000,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL,
    },
    title: "MoonLife Studios",
    url: "http://moonlifestudios.space",
    description: "**MoonLife Software Development Studio.**",
    fields: [{
        name: "MOON's Website",
        value: "**Click on** [MOON](https://moonlifestudios.space/moon/) **to get some insights on MOON**."
      },
      {
        name: "Invite link",
        value: `**Click on** [invite link](https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8
        ) **to invite MOON to your server**.`
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Copyright MoonLife Studios 2018"
    }
  }
}).then(message.channel.send({embed:{
    color:0xff0000,
    fields: [{

        name: message.author.username + " " +"requested invite link.",
        value: `**I've sent invite link to your DM's** __**${message.author.username}**__.`
    }]
}}))

}

module.exports.help = {
    name: "invite",
    description: "Sends an invite link for the bot to your direct messages.",
    usage: "/invite"
}