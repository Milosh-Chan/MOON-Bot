const Discord = require('discord.js')

module.exports.run = async(client, message) => {
    const args = message.content.split(' ');
    const searchString = args.slice(1).join(' ')
    const searcH = require('youtube-search');

    var opts = {
            maxResults: 10,
            key: 'YOUR TOKEN HERE'
    };


    searcH(searchString, opts, function (err, results) {
            if (!searchString) return message.reply(':tv: **Please specify what video you are trying to find...**')

            message.channel.send(`__**Title:**__ \`${results[0].title}\`` + `\n__**Description:**__ ` + "`" + results[0].description + "`" + `\n__**Video link:**__  ` + results[0].link)

    });
}

module.exports.help = {
    name: "video",
    description: "Finds a video from youtube and sends URL Name and Description to channel.",
    usage: "/video [Video name]"
}
