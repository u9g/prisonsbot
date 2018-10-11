const Discord = require("discord.js");

const PREFIX = "!";

var bot = new Discord.Client();

var channelid = "479281923261202432";

var sendchannelid = "498473254504366099";

bot.on("ready", function() {
    var devchannel = bot.channels.get(channelid)
    devchannel.send("<@204248274826166272> Bot Online")
    console.log("Bot Online");
    
bot.user.setActivity('!help by Majorblake')
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(' ');
    
    switch (args[0].toLowerCase()) {

        case "a":
        if (message.author.id == "204248274826166272") {
        var announce = bot.channels.array()
        announce.send(message)
        } break;

        case "prune":

        if (message.channel.type == "text") {
        if (message.author.id == "204248274826166272") {
        if ((args[1] >= 1) && (args[1] <= 500)) {
        message.channel.bulkDelete(args[1])
        } else message.channel.send(`**error**`)
        } break;
        } message.channel.send(`!prune cannot be used in a ${message.channel.type}`)
        break;


        case "send":

        if (args.length > 1){
        var sendchannel = bot.channels.get(sendchannelid);
        sendchannel.send(`**${message.author.username}:** ${message}`)
        message.channel.send("**Thank You, your message has been sent**")
        } else
        message.channel.send("**Invalid Input**\n\n!send [info]")
        break;

        case "armor":
        case "armour":
        case "pickaxe":
        case "sword":
        case "axe":
        case "guard":

        message.channel.send("**This command has moved!**\n\nUse !help")
        break;

        case "help":

		var now = new Date();
        var hours = [ now.getHours()];
        var minutes = [ now.getMinutes()];
        var devchannel = bot.channels.get(channelid);
        devchannel.send(`**[${hours}:${minutes}]** ${message.author.username}: *${message}*`)

            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`**Command Help**`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/fLSiuh9.png")
            embed.addField("**!calc [type] [rarity] [level]**","Calculates amount of Energy needed to get specified rarity of equipment to specified level")
            embed.addField("**!target [type] [rarity] [current level] [target level]**", "Calculates amount of Energy needed to get current level of equipment to target level")
            embed.addField("**!help**", "Displays this message")
            embed.addField("**!stats**", "Displays bot stats")
            embed.addField("**!send [info]**", "Send information to the developer")
            embed.addBlankField()
            embed.addField("**[type]:**", "(pickaxe, guard, satchel)")
            embed.addField("**[rarity]:**", "(wood, stone, gold, iron, diamond)\n(coal, coalore, iron, ironore, lapis, lapisore, redstone, redstoneore, diamond, diamondore, emerald, emeraldore)")
            embed.addField("**[level]:**", "Between 2 and 100 (Keep in mind unenchanted equipment is Level 1)\nor between 2 and 40 for guards")
            embed.setFooter("note: all commands should be in lower-case", "https://i.imgur.com/0McxHIL.png")
            message.channel.send(embed);
            break;

        case "stats":

		var now = new Date();
        var hours = [ now.getHours()];
        var minutes = [ now.getMinutes()];
        var devchannel = bot.channels.get(channelid);
        devchannel.send(`**[${hours}:${minutes}]** ${message.author.username}: *${message}*`)

            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle("**Bot Statistics**")
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/UKxYECm.png")
            embed.addField("**Servers**", `${bot.guilds.size}`)
            embed.addField("**Channels**", `${bot.channels.size}`)
            embed.addField("**Users**", `${bot.users.size}`)
            message.channel.send(embed);
            break;

        case "calculate":
        case "calc":

		var now = new Date();
        var hours = [ now.getHours()];
        var minutes = [ now.getMinutes()];
        var devchannel = bot.channels.get(channelid);
        devchannel.send(`**[${hours}:${minutes}]** ${message.author.username}: *${message}*`)

// DISABLED
        if (args[1] == "armor" || args[1] == "armour" || args[1] == "sword" || args[1] == "axe") {
            message.channel.send("**Due to the recent** ***'Pvp Update'*** **Armor, Swords, & Axes can no longer be supported**\nPickaxes, Guards, & Satchels *do* still work for both !calc & !target\n\n*The PvP Update* - https://bit.ly/2QzHBJ4")
        } else
//PICKAXE
        if (args[1] == "pickaxe" || args[1] == "pick") {
        if ((args[2] == "wood" || args[2] == "wooden") && args[3] >= 2 && args[3] <= 100) {
            var output = ((4800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 9600));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Wood Pickaxe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/FdSfdhC.png")
            message.channel.send(embed);
        } else
        if (args[2] == "stone" && args[3] >= 2 && args[3] <= 100) {
            var output = ((6000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 10800));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Stone Pickaxe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/tPUTodA.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "gold" || args[2] == "golden") && args[3] >= 2 && args[3] <= 100) {
            var output = ((7200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12000));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Gold Pickaxe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/vctODx9.png")
            message.channel.send(embed);
        } else
        if (args[2] == "iron" && args[3] >= 2 && args[3] <= 100) {
            var output = ((8400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 13200));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Iron Pickaxe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/uoKfLbK.png")
            message.channel.send(embed);
        } else
        if (args[2] == "diamond" && args[3] >= 2 && args[3] <= 100) {
            var output = ((9600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Diamond Pickaxe`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/4mESgHv.png")
            message.channel.send(embed);
        
        } else message.channel.send("**Invalid Input**\n\n!calc [type] [rarity] [level]")
        } else

// GUARD
        if (args[1] == "guard" || args[1] == "guards") {
        if (args[2] >= 2 && args[2] <= 40) {
            var output = (((args[2] - 1)* 5160) + (((Math.pow((args[2] - 2), 3) / 3) + ((Math.pow((args[2] - 2), 2)) / 2) + (((args[2] - 2) / 6))) * 1041))
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[2]}** Guard`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/ZdHDjrj.png")
            message.channel.send(embed)
        } else message.channel.send("**Invalid Input**\n\n!calc [type] [rarity] [level]")
        } else

// SATCHELS
        if (args[1] == "satchel") {
        if ((args[2] == "coal") && args[3] >= 2 && args[3] <= 100) {
            var output = ((10800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12600));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Coal Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/riB4W6x.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "coalore") && args[3] >= 2 && args[3] <= 100) {
            var output = ((7200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 8400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Coal Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/qKK2rXT.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "iron") && args[3] >= 2 && args[3] <= 100) {
            var output = ((12600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Iron Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/ZFQD8EM.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "ironore") && args[3] >= 2 && args[3] <= 100) {
            var output = ((8400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 9600));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Iron Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/3F9vI6s.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "lapis") && args[3] >= 2 && args[3] <= 100) {
            var output = ((14400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 16200));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Lapis Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/J1QgASo.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "lapisore") && args[3] >= 2 && args[3] <= 100) {
            var output = ((9600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 10800));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Lapis Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/46RNDxp.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "redstone") && args[3] >= 2 && args[3] <= 100) {
            var output = ((16200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 18000));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Redstone Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/BIoiD7q.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "redstoneore") && args[3] >= 2 && args[3] <= 100) {
            var output = ((10800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12000));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Redstone Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/mL8mBcW.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "gold") && args[3] >= 2 && args[3] <= 100) {
            var output = ((18000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 19800));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Gold Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/Xz86tkD.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "goldore") && args[3] >= 2 && args[3] <= 100) {
            var output = ((12000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 13200));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Gold Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/InthtCT.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "diamond") && args[3] >= 2 && args[3] <= 100) {
            var output = ((19800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 21600));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Diamond Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/S9NLL3d.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "diamondore") && args[3] >= 2 && args[3] <= 100) {
            var output = ((13200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Diamond Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/jsBBMeb.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "emerald") && args[3] >= 2 && args[3] <= 100) {
            var output = ((21600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 23400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Emerald Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/tTq2TEV.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "emeraldore") && args[3] >= 2 && args[3] <= 100) {
            var output = ((14400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 15600));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Emerald Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/L8HWA6J.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!calc [type] [rarity] [level]")
        } else message.channel.send("**Invalid Input**\n\n!calc [type] [rarity] [level]")
    break;

// TARGET
        case "target":

		var now = new Date();
        var hours = [ now.getHours()];
        var minutes = [ now.getMinutes()];
        var devchannel = bot.channels.get(channelid);
        devchannel.send(`**[${hours}:${minutes}]** ${message.author.username}: *${message}*`)

// ARMOR
        if (args[1] == "armor" || args[1] == "armour" || args[1] == "sword" || args[1] == "axe") {
            message.channel.send("**Due to the recent** ***'Pvp Update'*** **Armor, Swords, & Axes can no longer be supported**\nPickaxes, Guards, & Satchels *do* still work for both !calc & !target\n\n*The PvP Update* - https://bit.ly/2QzHBJ4")
        } else
// PICKAXE
        if (args[1] == "pickaxe" || args[1] == "pick") {
        if ((args[2] == "wood" || args[2] == "wooden") && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((4800 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 9600)) - ((4800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 9600)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Wood Pickaxe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/FdSfdhC.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else 
        if (args[2] == "stone" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((6000 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 10800)) - ((6000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 10800)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Stone Pickaxe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/tPUTodA.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else
        if ((args[2] == "gold" || args[2] == "golden") && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((7200 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 12000)) - ((7200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12000)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Gold Pickaxe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/vctODx9.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else
        if (args[2] == "iron" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((8400 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 13200)) - ((8400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 13200)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Iron Pickaxe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/uoKfLbK.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else
        if (args[2] == "diamond" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((9600 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 14000)) - ((9600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Diamond Pickaxe to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/4mESgHv.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
    } else

// GUARD
        if (args[1] == "guard" || args[1] == "guards") {
        if (args[2] >= 2 && args[2] <= 40 && args[3] >= 2 && args[3] <= 40) {
            var output = ((((args[3] - 1)* 5160) + (((Math.pow((args[3] - 2), 3) / 3) + ((Math.pow((args[3] - 2), 2)) / 2) + (((args[3] - 2) / 6))) * 1041)) - (((args[2] - 1)* 5160) + (((Math.pow((args[2] - 2), 3) / 3) + ((Math.pow((args[2] - 2), 2)) / 2) + (((args[2] - 2) / 6))) * 1041)))
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[2]}** Guard to **Level ${args[3]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/ZdHDjrj.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
    } else

// SATCHEL

        if (args[1] == "satchel") {
        if (args[2] == "coal" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((10800 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 12600)) - ((10800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12600)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Coal Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/riB4W6x.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else
        if (args[2] == "coalore" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((7200 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 8400)) - ((7200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 8400)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Coal Ore Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/qKK2rXT.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else 
        
        if (args[2] == "iron" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((12600 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 14400)) - ((12600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Iron Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/ZFQD8EM.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else
        if (args[2] == "ironore" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((8400 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 9600)) - ((8400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 9600)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Iron Ore Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/3F9vI6s.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else 

        if (args[2] == "lapis" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((14400 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 16200)) - ((14400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 16200)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Lapis Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/J1QgASo.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else
        if (args[2] == "lapisore" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((9600 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 10800)) - ((9600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 10800)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Lapis Ore Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/46RNDxp.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else 

        if (args[2] == "redstone" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((16200 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 18000)) - ((16200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 18000)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Redstone Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/BIoiD7q.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else
        if (args[2] == "redstoneore" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((10800 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 12000)) - ((10800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12000)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Redstone Ore Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/mL8mBcW.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else 

        if (args[2] == "gold" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((18000 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 19800)) - ((18000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 19800)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Gold Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/Xz86tkD.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else
        if (args[2] == "goldore" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((12000 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 13200)) - ((12000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 13200)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Gold Ore Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/InthtCT.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else 

        if (args[2] == "diamond" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((19800 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 21600)) - ((19800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 21600)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Diamond Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/S9NLL3d.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else
        if (args[2] == "diamondore" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((13200 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 14400)) - ((13200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Diamond Ore Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/jsBBMeb.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else 

        if (args[2] == "emerald" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((21600 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 23400)) - ((21600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 23400)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Emerald Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/tTq2TEV.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else
        if (args[2] == "emeraldore" && args[3] >= 2 && args[3] <= 100 && args[4] >= 2 && args[4] <= 100) {
            var output = (((14400 * (args[4] - 1)) + (((args[4] - 2) * (args[4] -1) / 2) * 15600)) - ((14400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 15600)));
            if (output >= 0) {
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required get **Level ${args[3]}** Emerald Ore Satchel to **Level ${args[4]}**`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/L8HWA6J.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
        } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
    } else message.channel.send("**Invalid Input**\n\n!target [type] [rarity] [current level] [target level]")
    break;
    
    }   
});

bot.login(process.env.BOT_TOKEN);
