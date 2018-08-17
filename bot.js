const Discord = require("discord.js");

const PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Bot Online");
    
bot.user.setActivity('!help by Majorblake')
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(' ');
    
    switch (args[0].toLowerCase()) {

        case "help":
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`**Command Help**`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/fLSiuh9.png")
            embed.addField("**!armor [rarity] [level]**","Calculates amount of Energy needed to get specified rarity of **armor** to specified level")
            embed.addField("**!pickaxe [rarity] [level]**", "Calculates amount of Energy needed to get specified rarity of **pickaxe** to specified level")
            embed.addField("**!sword [rarity] [level]**", "Calculates amount of Energy needed to get specified rarity of **sword** to specified level")
            embed.addField("**!axe [rarity] [level]**", "Calculates amount of Energy needed to get specified rarity of **axe** to specified level")
            embed.addField("**!target [type] [rarity] [current level] [target level]**", "Calculates amount of Energy needed to get current level of equipment to target level")
            embed.addField("**!help**", "Displays this message")
            embed.addField("**!stats**", "Displays bot stats")
            embed.addBlankField()
            embed.addField("**[type]:**", "(armor, pickaxe, sword, axe)")
            embed.addField("**[rarity]:**", "(leather, gold, iron, diamond) - (wood, stone, gold, iron, diamond)")
            embed.addField("**[level]:**", "Between 2 and 100 (Keep in mind unenchanted equipment is Level 1)")
            embed.setFooter("note: all commands should be in lower-case", "https://i.imgur.com/0McxHIL.png")
            message.channel.send(embed);
            break;

        case "stats":
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle("**Bot Statistics**")
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/lwwpTCl.png")
            embed.addField("**Servers**", `${bot.guilds.size}`)
            embed.addField("**Channels**", `${bot.channels.size}`)
            embed.addField("**Users**", `${bot.users.size}`)
            message.channel.send(embed);
            break;

        case "armor":
        case "armour":
    
        if (args[1] == "leather" && args[2] >= 2 && args[2] <= 100) {
            var output = ((4300 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 8800));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Leather Armor`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/muDDYan.png")
            message.channel.send(embed);
        } else
        if (args[1] == "gold" && args[2] >= 2 && args[2] <= 100) {
            var output = ((6000 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 10800));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Gold Armor`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/uoYSTj8.png")
            message.channel.send(embed);
        } else
        if (args[1] == "iron" && args[2] >= 2 && args[2] <= 100) {
            var output = ((8400 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 13200));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Iron Armor`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/CAcAXUv.png")
            message.channel.send(embed);
        } else
        if (args[1] == "diamond" && args[2] >= 2 && args[2] <= 100) {
            var output = ((9600 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 14400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Diamond Armor`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/FFwgmCO.png")
            message.channel.send(embed);
        } else message.channel.sendMessage("**Invalid Input**\n\n!armor [rarity] [level]"); 
            break;

        case "pickaxe":
        
        if (args[1] == "wood" && args[2] >= 2 && args[2] <= 100) {
            var output = ((4800 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 9600));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Wood Pickaxe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/FdSfdhC.png")
            message.channel.send(embed);
        } else
        if (args[1] == "stone" && args[2] >= 2 && args[2] <= 100) {
            var output = ((6000 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 10800));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Stone Pickaxe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/tPUTodA.png")
            message.channel.send(embed);
        } else
        if (args[1] == "gold" && args[2] >= 2 && args[2] <= 100) {
            var output = ((7200 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 12000));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Gold Pickaxe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/vctODx9.png")
            message.channel.send(embed);
        } else
        if (args[1] == "iron" && args[2] >= 2 && args[2] <= 100) {
            var output = ((8400 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 13200));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Iron Pickaxe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/uoKfLbK.png")
            message.channel.send(embed);
        } else
        if (args[1] == "diamond" && args[2] >= 2 && args[2] <= 100) {
            var output = ((9600 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 14400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Diamond Pickaxe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/4mESgHv.png")
            message.channel.send(embed);
        } else message.channel.sendMessage("**Invalid Input**\n\n!pickaxe [rarity] [level]"); 
            break;

        case "sword":
        
         if (args[1] == "wood" && args[2] >= 2 && args[2] <= 100) {
            var output = ((4300 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 8800));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Wood Sword`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/EkPagLG.png")
            message.channel.send(embed);
         } else
        if (args[1] == "stone" && args[2] >= 2 && args[2] <= 100) {
            var output = ((6000 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 10800));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Stone Sword`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/lB081Fb.png")
            message.channel.send(embed);
        } else
        if (args[1] == "gold" && args[2] >= 2 && args[2] <= 100) {
            var output = ((7200 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 12000));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Gold Sword`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/IERAunN.png")
            message.channel.send(embed);
        } else
        if (args[1] == "iron" && args[2] >= 2 && args[2] <= 100) {
            var output = ((8400 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 13200));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Iron Sword`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/XOSmxFU.png")
            message.channel.send(embed);
        } else
         if (args[1] == "diamond" && args[2] >= 2 && args[2] <= 100) {
            var output = ((9600 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 14400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Diamond Sword`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/Lz29W0j.png")
            message.channel.send(embed);
        } else message.channel.sendMessage("**Invalid Input**\n\n!sword [rarity] [level]"); 
            break;

        case "axe":
        
        if (args[1] == "wood" && args[2] >= 2 && args[2] <= 100) {
            var output = ((0 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 0));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Wood Axe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/ylzAwN4.png")
            message.channel.send(embed);
        } else
        if (args[1] == "stone" && args[2] >= 2 && args[2] <= 100) {
           var output = ((9000 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 16200));
           var embed = new Discord.RichEmbed()
           embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
           embed.setTitle(`Energy Required to make **Level ${args[2]}** Stone Axe`)
           embed.setDescription(`${output.toLocaleString()} Energy`)
           embed.setColor("4286f4")
           embed.setThumbnail("https://i.imgur.com/q863UJa.png")
           message.channel.send(embed);
       } else
        if (args[1] == "gold" && args[2] >= 2 && args[2] <= 100) {
            var output = ((0 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 0));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Gold Axe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/cYwb3ku.png")
            message.channel.send(embed);
        } else
        if (args[1] == "iron" && args[2] >= 2 && args[2] <= 100) {
            var output = ((0 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 0));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Iron Axe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/jpDXA3g.png")
            message.channel.send(embed);
        } else
        if (args[1] == "diamond" && args[2] >= 2 && args[2] <= 100) {
            var output = ((0 * (args[2] - 1)) + (((args[2] - 2) * (args[2] -1) / 2) * 0));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Diamond Axe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/JvFXvWs.png")
            message.channel.send(embed);
        } else message.channel.sendMessage("**Invalid Input**\n\n!axe [rarity] [level]"); 
            break;

        case "target":
        
        if ((args[1] == "armor" || args[1] == "armour") && args[2] == "leather" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((4300 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 8800)) - ((4300 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 8800)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Leather Armor to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/muDDYan.png")
            message.channel.send(embed);
        } else
        if ((args[1] == "armor" || args[1] == "armour") && args[2] == "gold" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((6000 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 10800)) - ((6000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 10800)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Gold Armor to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/uoYSTj8.png")
            message.channel.send(embed);
        } else
        if ((args[1] == "armor" || args[1] == "armour") && args[2] == "iron" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((7200 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 12000)) - ((7200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12000)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Iron Armor to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/CAcAXUv.png")
            message.channel.send(embed);
        } else
        if ((args[1] == "armor" || args[1] == "armour") && args[2] == "diamond" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((9600 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 14400)) - ((9600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Diamond Armor to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/FFwgmCO.png")
            message.channel.send(embed);
        } else

        if (args[1] == "pickaxe" && args[2] == "wood" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((4800 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 9600)) - ((4800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 9600)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Wood Pickaxe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/FdSfdhC.png")
            message.channel.send(embed);
        } else
        if (args[1] == "pickaxe" && args[2] == "stone" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((6000 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 10800)) - ((6000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 10800)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Stone Pickaxe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/tPUTodA.png")
            message.channel.send(embed);
        } else
        if (args[1] == "pickaxe" && args[2] == "gold" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((7200 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 12000)) - ((7200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12000)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Gold Pickaxe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/vctODx9.png")
            message.channel.send(embed);
        } else
        if (args[1] == "pickaxe" && args[2] == "iron" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((8400 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 13200)) - ((8400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 13200)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Iron Pickaxe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/uoKfLbK.png")
            message.channel.send(embed);
        } else
        if (args[1] == "pickaxe" && args[2] == "diamond" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((9600 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 14000)) - ((9600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Diamond Pickaxe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/4mESgHv.png")
            message.channel.send(embed);
        } else

        if (args[1] == "sword" && args[2] == "wood" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((4300 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 8800)) - ((4300 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 8800)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Wood Sword to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/EkPagLG.png")
            message.channel.send(embed);
        } else
        if (args[1] == "sword" && args[2] == "stone" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((6000 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 10800)) - ((6000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 10800)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Stone Sword to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/lB081Fb.png")
            message.channel.send(embed);
        } else
        if (args[1] == "sword" && args[2] == "gold" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((7200 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 12000)) - ((7200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12000)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Gold Sword to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/IERAunN.png")
            message.channel.send(embed);
        } else
        if (args[1] == "sword" && args[2] == "iron" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((8400 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 13200)) - ((8400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 13200)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Iron Sword to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/XOSmxFU.png")
            message.channel.send(embed);
        } else
        if (args[1] == "sword" && args[2] == "diamond" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((9600 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 14400)) - ((9600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Diamond Sword to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/Lz29W0j.png")
            message.channel.send(embed);
        } else

        if (args[1] == "axe" && args[2] == "wood" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((0 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 0)) - ((0 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 0)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Wood Axe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/ylzAwN4.png")
            message.channel.send(embed);
        } else
        if (args[1] == "axe" && args[2] == "stone" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((9000 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 16200)) - ((9000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 16200)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Stone Axe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/q863UJa.png")
            message.channel.send(embed);
        } else
        if (args[1] == "axe" && args[2] == "gold" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((0 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 0)) - ((0 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 0)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Gold Axe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/cYwb3ku.png")
            message.channel.send(embed);
        } else
        if (args[1] == "axe" && args[2] == "iron" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((0 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 0)) - ((0 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 0)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Iron Axe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/jpDXA3g.png")
            message.channel.send(embed);
        } else
        if (args[1] == "axe" && args[2] == "diamond" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((0 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 0)) - ((0 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 0)));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Diamond Axe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/JvFXvWs.png")
            message.channel.send(embed);
        } else message.channel.sendMessage("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]"); 
            break;
    }   
});

bot.login(process.env.BOT_TOKEN);
