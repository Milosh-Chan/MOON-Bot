const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const Pornsearch = require('pornsearch')
    const bargs =  message.content.split(' ');
    const searchString = bargs.slice(1).join(' ')
    if (!message.channel.nsfw) return message.reply("You can use this command only in nsfw channels!");
    if(!searchString)return message.reply('Nigga insert some words')
Pornsearch.search(searchString)
.gifs()
.then(gifs => message.channel.send({embed:{
    color: 0xff0000,
    description: `**GIF ${gifs[0].title}**`,
    image: {
        url: gifs[0].url
    }

}}))
Pornsearch.search(searchString)
.videos()
.then(videos => message.channel.send({embed:{
    author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL
    },
    color: 0xff0000,
    title: `*Video* `+ videos[0].title,
    description: videos[0].url,
    image: {
        url: videos[0].thumb
    }
}}))



}

module.exports.help = {
    name: "pornhub",
    description: "Searches for pornhub videos and sends them to channel",
    usage: "/pornhub [Search here]"
}
