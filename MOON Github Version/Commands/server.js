const Discord = require('discord.js')

module.exports.run = async(bot, message, args) =>{
    guildCreated = message.guild.createdAt.toString()

    message.channel.send(`Information about **${message.guild.name}**:`,{embed:{

        description: `:white_small_square: ID:** ${message.guild.id}**\n:white_small_square: Owner: **${message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator}**\n:white_small_square: Location: **${message.guild.region}**\n:white_small_square: Server Creation: **${guildCreated.slice(0, guildCreated.length - 29)}**\n:white_small_square: Users: **${message.guild.memberCount} **(online ${message.guild.presences.findAll('status', 'online').length}, idle ${message.guild.presences.findAll('status', 'idle').length},busy ${message.guild.presences.findAll('status', 'dnd').length}, invis ${message.guild.memberCount - message.guild.presences.array().length})\n:white_small_square: Roles: **${message.guild.roles.array().length}**\n:white_small_square: Channels: **${message.guild.channels.array().length}**  (text ${message.guild.channels.findAll('type', 'text').length}, voice ${message.guild.channels.findAll('type', 'voice').length}) `,

        thumbnail:{
            url: message.guild.iconURL
        },
        color: 0xff0000
    }})
}

module.exports.help = {
    name: "server",
    description: "Sends information about current server",
    usage: "/server"
}