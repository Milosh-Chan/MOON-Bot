const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    var choices = [
        '● **It is certain**',
        '● **It is decidedly so**',
        '● **Without a doubt**',
        '● **Yes definitely**',
        '● **You may rely on it**',
        '● **You can count on it**',
        '● **As I see it, yes**',
        '● **Most likely**',
        '● **Outlook good**',
        '● **Yes**',
        '● **Signs point to yes**',
        '● **Absolutely**',
        '● **Reply hazy try again**',
        '● **Ask again later**',
        '● **Better not tell you now**',
        '● **Cannot predict now**',
        '● **Concentrate and ask again**',
        "● **Don't count on it**",
        '● **My reply is no**',
        '● **My sources say no**',
        '● **Outlook not so good**',
        '● **Very doubtful**',
        "● **Chances aren't good**"

        
    ]
    var embed = new Discord.RichEmbed()
    .setAuthor('MOON 8ball','http://www.pngmart.com/files/3/8-Ball-Pool-PNG-Photos.png')
    .setThumbnail('https://vignette.wikia.nocookie.net/uncyclopedia/images/4/40/8ball.png/revision/latest?cb=20131030182451')
    .setDescription(`${choices[Math.floor(Math.random() * choices.length)]}`)
    .setColor(000000)

    message.channel.send(embed)
   

}


module.exports.help = {
    name: "8ball",
    description: "8Ball is a command used for fortune-telling or seeking advice.",
    usage: "/8ball [Your question]"
}