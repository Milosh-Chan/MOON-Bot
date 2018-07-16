const Discord = require('discord.js')
const randomPuppy = require('random-puppy')
// I actually havent tested this since I don't use vanilla discord.js, but it should work

const { get } = require('request-promise-native') // You can also use normal request if you want, you would just lose the ability of using .then(). Or you could just use snekfetch

module.exports.run = async (client, message) => {
    if (!message.channel.nsfw) return message.reply("You can use this command only in nsfw channels!");

    var subreddits = [
       'dankmemes',
       'memes',
       'surrealmemes'
        
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.tag, message.author.avatarURL)
                .setFooter("Here is your random meme").setTimestamp()
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}



module.exports.help = {
    name: "meme",
    description: "Sends random meme from reddit to your channel.",
    usage: "/meme"
}