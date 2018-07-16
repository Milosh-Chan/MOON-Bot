const Discord = require('discord.js')
const getInsult = require('insults')
module.exports.run = async(bot, message, args)=>{
    var insults = [
        "YOUR INSULTS HERE"


];

 var user = message.mentions.members.first()

                if (!user) {
                        message.reply('Give me someone to insult.')
                        return;
                }
                message.channel.send({embed:{
                    color: 0xff0000,
                    author: {
                        name: "MOON Says..",
                        icon_url: bot.user.avatarURL
                    },
                    description: `\n:anger_right: **${insults[Math.floor(Math.random() * insults.length)]}**`
                }})
}

module.exports.help = {
    name: "insult",
    description: "Sends an insult to channel you can choose to mention user who you want insulted.",
    usage: "/insult [@USER]"
}