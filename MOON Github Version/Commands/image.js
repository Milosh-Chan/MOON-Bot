const Discord = require('discord.js');
const GoogleImages = require('google-images');
const image = new GoogleImages('YOUR TOKEN HERE', 'YOUR TOKEN HERE');

module.exports.run = async (client, message, args) => {
    const bargs =  message.content.split(' ');
    const searchString = bargs.slice(1).join(' ')
    image.search(searchString, {safe: "off", type: "face", page: 1})
    .then(images => {
        /*
        [{
            "url": "http://steveangello.com/boss.jpg",
            "type": "image/jpeg",
            "width": 1024,
            "height": 768,
            "size": 102451,
            "thumbnail": {
                "url": "http://steveangello.com/thumbnail.jpg",
                "width": 512,
                "height": 512
            }
        }]
        
         */
        message.channel.send({embed: {
            
            description: `:frame_photo: **Picture I found:**`,
            author: {
                name: message.author.username,
                icon_url: message.author.avatarURL,
            },
            color: 0xff0000,
            image: {
                url: images[0].url
            },
            timestamp: new Date(),
        
        }
    
        
    })
})

}




module.exports.help = {
    name: "image",
    description: "Sends an image from your args.",
    usage: "/image [Search here]"
}