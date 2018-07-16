const Discord = require("discord.js");

module.exports.run = async (client , message , args) => {
    const sayMessage = args.join(` `);
    message.delete().catch(O_o => { });
    message.channel.send(sayMessage)
}






module.exports.help = {
    name: "say",
    description: "Client says whatever you type after command in args.",
    usage: "/say [Your text here]"
}