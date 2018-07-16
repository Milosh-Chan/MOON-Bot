const Discord = require('discord.js')

module.exports.run = async(bot,message,args)=>{
    var love = [
        "**420%**|| :smoking::smoking::smoking::smoking::smoking::smoking::smoking::smoking::smoking::smoking: ||**420%**",
        "**0%** || :broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart: ||**0%**",
        "**10%**|| :heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**10%**",
        "**20%**|| :heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**20%**",
        "**30%**|| :heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**30%**",
        "**40%**|| :heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**40%**",
        "**50%**|| :heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**50%**",
        "**60%**|| :heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: ||**60%**",
        "**69%**|| :eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant: ||**69%**",
        "**70%**|| :heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart: ||**70%**",
        "**80%**|| :heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart: ||**80%**",
        "**90%**|| :heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart: ||**90%**",
        "**100%**|| :heart::heart::heart::heart::heart::heart::heart::heart::heart::heart: ||**100%**",
];


    var user2 = message.mentions.members.last();
                        if (!user2) {
                                message.reply('Please mention user you want to match yourself with!')
                                return;
                        }
                        /*
                        if(!user) return message.channel.send("Can't find user!");
                        if(!user2) return message.channel.send("Can't find user!");
                        */
                        var athor = message.author
                        var author = message.member.nickname
                        var embed = new Discord.RichEmbed()
                                .setThumbnail("https://media.discordapp.net/attachments/427168044528173056/436659295598280725/meterheart.png?width=344&height=344")

                                .setDescription(" " + " " + "       __**:heartbeat::bow_and_arrow: MATCHMAKING :bow_and_arrow::heartbeat:**__" + "" + `\n\n          :small_red_triangle_down:**[**` + message.author.username + "**]**" + "" + "\n          :small_red_triangle:**[**" + user2.user.username + "**]**" + "\n\n" + love[Math.floor(Math.random() * love.length)])

                                .setColor(0xff0000)
                                
                                message.channel.send(embed)
}

module.exports.help = {
    name: "loves",
    description: "Sends love result of message author and mentioned user.",
    usage: "/loves [@USER]"
}