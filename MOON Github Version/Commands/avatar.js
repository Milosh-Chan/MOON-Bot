const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    regex = /\?=size[0-9]{1,45}$/g;
    memberMention = null;
    if (message.mentions.members) {
        memberMention = message.mentions.members.first()
    }
    if (message.mentions.users) {
        userMention = message.mentions.users.first()
    }
    if (!memberMention) {
        if (message.author.displayAvatarURL.indexOf(/\.gif\?size=[0-9]{1,49}$/g)) {
            return message.channel.send({
                embed: {
                    description: `:frame_photo: **Your Avatar**`,
                    author: {
                        name: message.author.username,
                        icon_url: message.author.avatarURL,
                    },
                    color: 0xff0000,
                    image: {
                        url: message.author.avatarURL
                    },
                    timestamp: new Date(),
                    
                    
                }
                
                })
        }
        return message.channel.send(message.author.displayAvatarURL)
    }
    if (memberMention.user.displayAvatarURL.indexOf(/\.gif\?size=[0-9]{1,49}$/g)) {
        return message.channel.send(
            ({
                embed: {
                    description: `:frame_photo: **Avatar of** ${memberMention}`,
                    author: {
                        name: message.author.username,
                        icon_url: message.author.avatarURL,
                    },
                    color: 0xff0000,
                    image: {
                        url: memberMention.user.avatarURL
                    },
                    timestamp: new Date(),
                    
                    
                }
                
                })
            )
    }
    message.channel.send(memberMention.user.displayAvatarURL)
}


module.exports.help = {
    name: "avatar",
    description: "Shows profile picture of mentioned user or your own.",
    usage: "/avatar for your own or /avatar [@USER] for someone else."
}

