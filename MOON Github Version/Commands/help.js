const Discord = require("discord.js");

module.exports.run = async (bot , message , args) => {


    var helpEmbed = new Discord.RichEmbed()
    .setDescription(`You can find Moon's full list on our official website`)
    
  
    message.react('🌜')
    /*
    message.channel.send({embed:{
    color:0xff0000,
    title: "MoonLife Studios Official Site",
    url: "http://moonlifestudios.space",
    description: "**MOON help has been sent to your DM's.**",

    footer: {
        icon_url: bot.user.avatarURL,
        text: "© Copyright MoonLife Studios 2018"
      }
    }})
    */
    if (!args[0]) {
        const commandNames = Array.from(bot.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.author.send({embed:{
           color: 0xff0000,
           description: `__**Command List**__\n\n[*Use* **/help** __<commandname>__ *for details*]\n\n${bot.commands.map(c => `**/${c.help.name}**${' '.repeat(longest - c.help.name.length)} -   *${c.help.description}*`).join('\n')}`
        }
        })
      } else {
        let command = args[0];
        if (bot.commands.has(command)) {
          command = bot.commands.get(command);
          var commandNAME = args[0]
          message.channel.send({embed:{
            color: 0xff0000,
            description: `${message.author}, I've sent you help about **${commandNAME}** command.`
          }})
          message.author.send({embed:{

              color: 0xff0000,
              description:`= ${command.help.name} = \n${command.help.description}\n\nUsage :: ${command.help.usage}`
          }
        })
          
        }
      }
    };
    
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['h', 'halp']
    };
    
    module.exports.help = {
      name: 'help',
      description: 'Displays all the available commands for your permission level.',
      usage: 'help [command]'
    };
    
    /*
    message.author.send({embed:{
        color:0xff0000,
        title: "MOON help",
        url: "https://moonlifestudios.space/moon/",
        description: "**Click on the link for full list of MOON's commands.**",
    
        footer: {
            icon_url: bot.user.avatarURL,
            text: "© Copyright MoonLife Studios 2018"
          }
        }})
    }

*/





