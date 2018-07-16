const Discord = require('discord.js');
const fs = require('fs');
const config = require("./config.json")


module.exports.run = async (client , message , args) => {

  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
  // Here you need your ID so only you can use eval 
        if(message.author.id !== config.ownerID) return;
        try {
          const code = args.join(" ");
          let evaled = eval(code);
    
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
    
          message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
  


module.exports.help ={
  name: "eval",
  description: "Let's you use bot's code while on discord.",
  usae: "/eval [Code goes in here]"
}