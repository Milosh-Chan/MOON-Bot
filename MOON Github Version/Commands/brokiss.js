const Discord = require('discord.js')

module.exports.run = async(bot, message, args)=>{
    var brokiss = [
        "https://media.giphy.com/media/5Zs730U1OtUt2/giphy.gif",
        "https://vignette.wikia.nocookie.net/glee/images/4/49/Gay_kiss_hot_yum_sexy_lush.gif",
        "https://i.skyrock.net/0468/61280468/pics/3227978577_1_2_sJ7u75Xo.gif",
        "https://33.media.tumblr.com/405f347d9b196ad5f5cf8dbf63b85946/tumblr_mms22nOONW1spkzr7o1_500.gif",
        "https://media1.giphy.com/media/JExvSJiSakNRC/giphy.gif",
        "https://media.giphy.com/media/KDCaqfnBUW9mU/giphy.gif",
        "https://media1.giphy.com/media/8Lilv7zif4yje/giphy.gif",
        "https://media3.giphy.com/media/139AyyGTomHGiQ/giphy.gif",
        "https://media1.giphy.com/media/QPJbdghBlG4KI/giphy.gif",
        "https://media0.giphy.com/media/W6fGnhuUfafSg/giphy.gif"


];

var user = message.mentions.members.first()
                if (!user) {
                        message.reply('Mention bro....')
                        return;
                }
                var randomColor = Math.floor(Math.random()*16777215).toString(16);

var colors = [
0xffffff,
0x000000,
0x0000ff,
0xff0000,
0x7a7a7a,
0x00ffff,
0xffd700,
0x4b0082
]
                 
                message.channel.send({embed:{
                    description: `Hey! ${user}, ${message.author} just kissed you! :flushed:`,
                    image: {
                        url: brokiss[Math.floor(Math.random() * brokiss.length)]
                    },
                    color: colors[Math.floor(Math.random() * colors.length)]



            
                }})
            





}

module.exports.help ={
    name: "brokiss",
    description: "Sends picture of two homosexuals kissing you can mention someone to kiss that way.",
    usae: "/brokiss [@YOURBRO]"
  }