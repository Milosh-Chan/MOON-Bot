const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
bot.on("ready", ready =>{
  console.log('Im so fucking ready you slut')
  console.log(bot.readyAt)
bot.user.setActivity(`/help | Serving to [` + bot.users.size + `] users.`, {
  name: "Streaming",
  url: "https://www.twitch.tv/forsen",
  type: 1
})
})
fs.readdir("./commands/", (err, files)=>{
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log(`Couldn't find commands`)

    return;
  }

  jsfile.forEach((f, i) =>{

    let props = require(`./commands/${f}`);
    console.log(`${f} loaded`);
    bot.commands.set(props.help.name, props)
  });
});
const config = require("./commands/config.json")
bot.login('YOUR TOKEN HERE');


const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const settings = new Enmap({provider: new EnmapLevel({name: "settings"})});

const defaultSettings = {
  prefix: "/",
  modLogChannel: "mod-log",
  modRole: "Moderator",
  adminRole: "SPECIAL PEOPLE",
}



bot.on("guildCreate", guild => {
  // Adding a new row to the collection uses `set(key, value)`
  settings.set(guild.id, defaultSettings);
});

bot.on("guildDelete", guild => {
  // Removing an element uses `delete(key)`
  settings.delete(guild.id);
});


   
// Nowe let's get to the commands!
// This runs on every message we'll use it to demonstrate loading and changing values
bot.on("message", async (message) => {
  

  let messsageArray = message.content.split(" ")
  let cmd = messsageArray[0];

  // This stops if it's not a guild (obviously), and we ignore all bots.
  if(!message.guild || message.author.bot) return;

  // Let's load the config:
  const guildConf = settings.get(message.guild.id);
  
  // We also stop processing if the message does not start with our prefix.
  if(message.content.indexOf(guildConf.prefix) !== 0) return;

  //Then we use the config prefix to get our arguments and command:
  const args = message.content.split(/\s+/g);
  const command = args.shift().slice(guildConf.prefix.length).toLowerCase();
  
  queue = {};
  // Alright. Let's make a command! This one changes the value of any key in the configuration.
  if(command === "setconf") {
    // Command is admin only, let's grab the admin value: 
    const adminRole = message.guild.roles.find("name", guildConf.adminRole);
    
    // Then we'll exit if the user is not admin
    if(!adminRole) return message.reply("You're not an admin, sorry!")
    
    const key = args[0];
    const value = args[1];
    // Since we inserted an object, it comes back as an object, and we can use it with the same properties:
    if(!guildConf.hasOwnProperty(key)) return message.reply("This key is not in the configuration.");
    
    // Now we can finally change the value. Here we only have strings for values so we won't
    // bother trying to make sure it's the right type and such. 
    guildConf[key] = value;
    
    // Then we re-apply the changed value to the PersistentCollection
    settings.set(message.guild.id, guildConf);
    
    // We can confirm everything's done to the bot.
    message.channel.send(`Guild configuration item ${key} has been changed to:\n\`${value}\``);
  }
  
  // Now let's make another command that shows the configuration items.
  if(command === "settings") {
    var configKeys = "";
    Object.keys(guildConf).forEach(key => {
      configKeys += `${key}  :  ${guildConf[key]}\n`;
    });
    message.channel.send(`Server settings for **${message.guild.name}**: \n${configKeys}`);
  }

  
  
  let commandFile = bot.commands.get(cmd.slice(guildConf.prefix.length));
  if(commandFile) commandFile.run(bot,message,args);

})