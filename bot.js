const Discord = require("discord.js");

const fs = require("fs")

var bot = new Discord.Client();

var channelid = "479281923261202432";

var sendchannelid = "498473254504366099";

var updateObject = JSON.parse(process.env.UPDATE)

const PREFIX = "!";

function currentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0
  var yyyy = today.getFullYear();
  
  if (dd < 10) {
    dd = '0' + dd;
  }
  
  if (mm < 10) {
    mm = '0' + mm;
  }
  
  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

function currentTime() {
  var today = new Date();
  var hh = today.getHours();
  var mm = today.getMinutes();
  var ss = today.getSeconds();

  if (hh < 10) {
    hh = '0' + hh;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  if (ss < 10) {
    ss = '0' + ss;
  }
  time = hh + ':' + mm + ':' + ss;
  return time;
}

function getValidFiles (callback, option) {
  files = fs.readdirSync('./')
  validfiles = []
  if (option.includes('full')) {
    files.forEach(function (file) {
      if (!fs.statSync('./' + file).isDirectory()) {
        if (!option.includes('formatted')) {
          validfiles.push(file)
        }
        if (option.includes('formatted')) {
          validfiles.push("**`" + file + "`**")
        }
      }
    })
    files.forEach(function (file) {
      if (fs.statSync('./' + file).isDirectory()) {
        if (!option.includes('formatted')) {
          validfiles.push(file + "/")
        }
        if (option.includes('formatted')) {
          validfiles.push("`" + file + "`/")
        }
        subfiles = fs.readdirSync('./' + file)
        subfiles.forEach(function (subfile) {
          if (!fs.statSync('./' + file + '/' + subfile).isDirectory()) {
            if (!option.includes('formatted')) {
              validfiles.push(file + "/" + subfile)
            }
            if (option.includes('formatted')) {
              validfiles.push("`" + file + "`/**`" + subfile + "`**")
            }
          }

          if (fs.statSync('./' + file + '/' + subfile).isDirectory()) {
            if (!option.includes('formatted')) {
              validfiles.push(file + "/" + subfile + "/")
            }
            if (option.includes('formatted')) {
              validfiles.push("`" + file + "`/`" + subfile + "`/")
            }
          }
          
        })
      }
    })
    callback(validfiles)
    return;
  }
  files.forEach(function (file) {
    if (!fs.statSync('./' + file).isDirectory() && (file.endsWith('.txt')) || (file.endsWith('.json'))) {
      if (!option.includes('formatted')) {
        validfiles.push(file)
      }
      if (option.includes('formatted')) {
        validfiles.push("**`" + file + "`**")
      }
    }
  })
  files.forEach(function (file) {
    if (fs.statSync('./' + file).isDirectory()) {
      subfiles = fs.readdirSync('./' + file)
      subfiles.forEach(function (subfile) {
        if (!fs.statSync('./' + file + '/' + subfile).isDirectory() && (subfile.endsWith('.txt')) || (subfile.endsWith('.json'))) {
          if (!option.includes('formatted')) {
            validfiles.push(file + "/" + subfile)
          }
          if (option.includes('formatted')) {
            validfiles.push("`" + file + "`/**`" + subfile + "`**")
          }
        }
      })
    }
  })
  callback(validfiles)
}

function pickaxeEnergy (rarity, level) {
  if (level < 1 || level > 500 || Number.isInteger(parseFloat(level)) == false) { return false }
  if (['wood', 'wooden', 'stone', 'gold', 'golden', 'iron', 'diamond'].includes(rarity.toLowerCase())) {
    switch (rarity.toLowerCase()) {

      case "wood":
      case "wooden":
      return ((4800 * (level - 1)) + (((level - 2) * (level -1) / 2) * 9600));

      case "stone":
      return ((6000 * (level - 1)) + (((level - 2) * (level -1) / 2) * 10800));

      case "gold":
      case "golden":
      return ((7200 * (level - 1)) + (((level - 2) * (level -1) / 2) * 12000));

      case "iron":
      return ((8400 * (level - 1)) + (((level - 2) * (level -1) / 2) * 13200));

      case "diamond":
      return ((9600 * (level - 1)) + (((level - 2) * (level -1) / 2) * 14400));
      
      default:
      return false

    }
  }
}

function prestigeLevels (rarity, level) {

  if (level < 1 || level > 10 || Number.isInteger(parseFloat(level)) == false) { return false }
  level = parseFloat(level)

  switch (rarity.toLowerCase()) {
    case "wood":
    case "wooden":
    return (20 + ((level - 1) * 5))

    case "stone":
    return (25 + ((level - 1) * 5))

    case "gold":
    case "golden":
    return (30 + ((level - 1) * 5))

    case "iron":
    return (35 + ((level - 1) * 5))

    case "diamond":
    return (40 + ((level - 1) * 5))
    
    default:
    return false
  }
}

function toRomanNumerals (input) {
  if (typeof input == 'string') {
    input = input.toLowerCase()
  }
  if (Number.isInteger(parseFloat(input))) {
    input = parseFloat(input).toFixed(0)
  }
    switch (input) {

      case '0':
      case 'o':
      case 'nulla':
      return '0'

      case '1':
      case 'i':
      return 'I'

      case '2':
      case 'ii':
      return 'II'
          
      case '3':
      case 'iii':
      return 'III'

      case '4':
      case 'iV':
      return 'IV'

      case '5':
      case 'V':
      return 'V'

      case '6':
      case 'VI':
      return 'VI'

      case '7':
      case 'VII':
      return 'VII'

      case '8':
      case 'VIII':
      return 'VIII'

      case '9':
      case 'IX':
      return 'IX'

      case '10':
      case 'X':
      return 'X'

      default:
      return 'null'
  }
}

function toPrestigeNumber (input) {
  if (typeof input == 'string') {
    input = input.toLowerCase()
  }
  switch (input) {
    case "o":
    input = 0
    break;
    case "i":
    input = 1
    break;
    case "ii":
    input = 2
    break;
    case "iii":
    input = 3
    break;
    case "iv":
    input = 4
    break;
    case "v":
    input = 5
    break;
    case "vi":
    input = 6
    break;
    case "vii":
    input = 7
    break;
    case "viii":
    input = 8
    break;
    case "ix":
    input = 9
    break;
    case "x":
    input = 10
    break;
  }
  input = parseFloat(input)
  if (typeof input == 'number') {
    input = input.toFixed(0)
    return input
  }
  return false
}

bot.on("ready", function() {
    var devchannel = bot.channels.get(channelid)
    devchannel.send("Bot Online")
    console.log("Bot Online");
    
    if (updateObject != undefined) {
      if (typeof updateObject == 'object') {
        if (Object.keys(updateObject).includes('enabled') && Object.keys(updateObject).includes('activity')) {
          if (updateObject['enabled'] == true) {
            if (updateObject['activity'] != undefined && updateObject['activity'] != '') {
              bot.user.setActivity(updateObject['activity'])
              return;
            }
          }
        }
      }
    }
    bot.user.setActivity('!help by Majorblake')
  });
  bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.channel.type == 'dm') {
        var sendchannel = bot.channels.get(sendchannelid);
        sendchannel.send(`**${currentDate()} [${currentTime()}]** *Direct Message:* **${message.author.username}:** ${message}`)
	    
	      link = false
        message.content.split(' ').forEach(element => {
          if (RegExp(/(https:\/\/discord\.gg\/.*)|(invite)/).test(element.toLowerCase())) {
            link = true
          }
        })
        if (link == true) {
          message.channel.send(new Discord.RichEmbed()
          .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
          .setColor("4286f4")
          .setDescription('Click **[here](https://discordapp.com/oauth2/authorize?client_id=479282051129016339&scope=bot&permissions=3072)** to add the bot to your server!')
          .setFooter(`You must have the 'Manage Server' permission in the server you wish to add the bot to.`)
          )
          return;
        }
    }

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(' ');
    
    switch (args[0].toLowerCase()) {

      case "fs":
      if (message.author.id != "204248274826166272") { return }
      if (args[1] == 'full') {
        try {
          getValidFiles(function (callback) {
            message.channel.send(new Discord.RichEmbed()
            .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            .setColor("4286f4")
            .setDescription(`Found **${callback.length}** valid files in local directory\n\n${callback.join('\n')}`)
            )
          }, ['formatted', 'full'])
          return;
        }
        catch (e) {
          console.log(e)
        }
        return;
      }
      try {
        getValidFiles(function (callback) {
          message.channel.send(new Discord.RichEmbed()
          .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
          .setColor("4286f4")
          .setDescription(`Found **${callback.length}** valid files in local directory\n\n${callback.join('\n')}`)
          )
        }, ['formatted'])
        return;
      }
      catch (e) {
        console.log(e)
      }
      break;

      case "update":
      if (updateObject != undefined) {
        if (typeof updateObject == 'object') {
          updateObject = updateObject
          if (Object.keys(updateObject).includes('enabled') && Object.keys(updateObject).includes('content')) {
            if (updateObject['enabled'] == true) {
              message.channel.send(new Discord.RichEmbed()
              .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
              .setColor("4286f4")
              .setDescription(updateObject['content'])
              )
              return;
            }
          }
        }
      }
      message.channel.send(new Discord.RichEmbed()
      .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
      .setColor("4286f4")
      .setDescription(`**Couldn't find any recent updates!**`)
      )
      break;

      case "activity":
      if (message.author.id != "204248274826166272") { return }
        if (args.length >= 2) {
            if (args[1] == 'reset') {
              try {
                bot.user.setActivity('!help by Majorblake')
              }
              catch (err) {
                console.log(err)
              }
              return;
            }
              args.shift()
              activity = args.join(' ')
              try {
                bot.user.setActivity(activity)
              }
              catch (err) {
                console.log(err)
              }
              return;
          }
          message.channel.send("**Invalid Input**\n\n!activity [message/reset]")
      break;

        case "user":
        if (message.author.id != "204248274826166272") { return }
        if (args.length >= 2) {
          var UsernameArray = [];
          var FoundUsers = [];
          UsersObject = bot.users.values()
          for (let User of UsersObject) {
            UsernameArray.push(`${User.username},${User.discriminator},${User.id}`)
          }
          for (i = 0; i < UsernameArray.length; i++) {
            if (UsernameArray[i].split(',')[0].toLowerCase().includes(`${args[1].toLowerCase()}`)) {
              FoundUsers.push(`**${UsernameArray[i].split(',')[0]}#${UsernameArray[i].split(',')[1]}** (${UsernameArray[i].split(',')[2]})`)
            }
          }
          if (FoundUsers.length > 20) {
            message.channel.send(new Discord.RichEmbed()
            .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            .setColor("4286f4")
            .setDescription(`Found > 20 Usernames matching "${args[1]}"\nTry Being more specific`)
            )
            return;
          } 
          if (FoundUsers.length >= 1) {
            message.channel.send(new Discord.RichEmbed()
            .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            .setColor("4286f4")
            .setDescription(`Found ${FoundUsers.length} Usernames matching "${args[1]}"\n\n${FoundUsers.join('\n')}`)
            )
            return;
          }
          message.channel.send(new Discord.RichEmbed()
          .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
          .setColor("4286f4")
          .setDescription(`Found 0 Usernames matching "${args[1]}"`)
          )
          return;
        }
        break;

        case "reply":
        if (message.author.id != "204248274826166272") { return }
        if (args.length >= 3) {
          if (args[1].length == 18) {
            user = bot.users.get(args[1])
            if (user != undefined) {
              args.splice(0, 2)
              user.send(new Discord.RichEmbed()
              .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
              .setColor("4286f4")
              .setDescription(`Reply from **${message.author.username}**:\n\n` + "`" + `${args.join(' ')}` + "`")
              )
              return;
            }
            message.channel.send(new Discord.RichEmbed()
            .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            .setColor("4286f4")
            .setDescription(`Couldn't find user with ID: **${args[1]}**`)
            )
          return;
          }
        }
        message.channel.send(new Discord.RichEmbed()
        .setColor("4286f4")
        .setAuthor(`Error`, iconURL)
        .setDescription(`Invalid Arguments`)
        )
        break;

        case "prune":

        if (message.channel.type == "text") {
        if (message.author.id == "204248274826166272") {
        if ((args[1] >= 1) && (args[1] <= 500)) {
        message.channel.bulkDelete(args[1])
        } else message.channel.send(`**error**`)
        } break;
        } message.channel.send(`!prune cannot be used in a ${message.channel.type}`)
        break;

        case "report":
        case "suggestion":
        case "support":

        if (args.length > 1){
        var sendchannel = bot.channels.get(sendchannelid);
        sendchannel.send(`**${message.author.username}:** ${message}`)
        message.channel.send(`**Thank You, your ${args[0].replace('support', 'support ticket')} has been sent**`)
        } else
        message.channel.send(`**Invalid Input**\n\n!${args[0].replace('support', 'support ticket')} [info]`)
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
        devchannel.send(`**${currentDate()} [${currentTime()}]** ${message.author.username}: *${message}*`)

            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`**Command Help**`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/fLSiuh9.png")
            embed.addField("**!calc [type] [rarity] <prestige level> [level]**","Calculates amount of Energy needed to get specified rarity of equipment to specified level\n*Optional: <prestige level> to calculate the energy needed for the specified Prestige tier pickaxe with specified pickaxe level*")
            embed.addField("**!target [type] [rarity] [current level] [target level]**", "Calculates amount of Energy needed to get current level of equipment to target level")
            embed.addField("**!help**", "Displays this message")
            embed.addField("**!stats**", "Displays bot stats")
            embed.addField("**!report [message]**", "Report a bug")
            embed.addField("**!suggestion [message]**", "Make a suggestion")
            embed.addField("**!support [message]**", "Ask for support from the owner of the bot")
            embed.addBlankField()
            embed.addField("**[type]:**", "(pickaxe, guard, satchel)")
            embed.addField("**[rarity]:**", "(wood, stone, gold, iron, diamond)\n(coal, coalore, iron, ironore, lapis, lapisore, redstone, redstoneore, diamond, diamondore, emerald, emeraldore)")
            embed.addField("**[level]:**", "Between 2 and 500 for pickaxes (Unenchanted equipment is Level 1)\nBetween 2 and 500 for satchels\nBetween 2 and 40 for guards\nBetween I and X (or 1-10) for prestige pickaxes")
            embed.addField("**<prestige level>**", "Numerals (I-X) or Numbers (1-10)")
            embed.setFooter("note: all commands should be in lower-case", "https://i.imgur.com/0McxHIL.png")
            message.channel.send(embed);
            break;

        case "stats":

        var devchannel = bot.channels.get(channelid);
        devchannel.send(`**${currentDate()} [${currentTime()}]** ${message.author.username}: *${message}*`)

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
        devchannel.send(`**${currentDate()} [${currentTime()}]** ${message.author.username}: *${message}*`)
// DISABLED
        if (args[1] == "armor" || args[1] == "armour" || args[1] == "sword" || args[1] == "axe") {
            message.channel.send("**Due to the** ***'Pvp Update'*** **Armor, Swords, & Axes can no longer be supported**\nPickaxes, Guards, & Satchels *do* still work for both !calc & !target\n\n*The PvP Update* - https://bit.ly/2QzHBJ4")
        } else
//PICKAXE
        if (args[1] == "pickaxe" || args[1] == "pick") {
          if (args.length == 4) {
            if ((args[2] == "wood" || args[2] == "wooden") && args[3] >= 2 && args[3] <= 500) {
                var output = ((4800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 9600));
                var embed = new Discord.RichEmbed()
                embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
                embed.setTitle(`Energy Required to make **Level ${args[3]}** Wood Pickaxe`)
                embed.setDescription(`${output.toLocaleString()} Energy`)
                embed.setColor("4286f4")
                embed.setThumbnail("https://i.imgur.com/FdSfdhC.png")
                message.channel.send(embed);
            } else
            if (args[2] == "stone" && args[3] >= 2 && args[3] <= 500) {
                var output = ((6000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 10800));
                var embed = new Discord.RichEmbed()
                embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
                embed.setTitle(`Energy Required to make **Level ${args[3]}** Stone Pickaxe`)
                embed.setDescription(`${output.toLocaleString()} Energy`)
                embed.setColor("4286f4")
                embed.setThumbnail("https://i.imgur.com/tPUTodA.png")
                message.channel.send(embed);
            } else
            if ((args[2] == "gold" || args[2] == "golden") && args[3] >= 2 && args[3] <= 500) {
                var output = ((7200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12000));
                var embed = new Discord.RichEmbed()
                embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
                embed.setTitle(`Energy Required to make **Level ${args[3]}** Gold Pickaxe`)
                embed.setDescription(`${output.toLocaleString()} Energy`)
                embed.setColor("4286f4")
                embed.setThumbnail("https://i.imgur.com/vctODx9.png")
                message.channel.send(embed);
            } else
            if (args[2] == "iron" && args[3] >= 2 && args[3] <= 500) {
                var output = ((8400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 13200));
                var embed = new Discord.RichEmbed()
                embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
                embed.setTitle(`Energy Required to make **Level ${args[3]}** Iron Pickaxe`)
                embed.setDescription(`${output.toLocaleString()} Energy`)
                embed.setColor("4286f4")
                embed.setThumbnail("https://i.imgur.com/uoKfLbK.png")
                message.channel.send(embed);
            } else
            if (args[2] == "diamond" && args[3] >= 2 && args[3] <= 500) {
                var output = ((9600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400));
                var embed = new Discord.RichEmbed()
                embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
                embed.setTitle(`Energy Required to make **Level ${args[3]}** Diamond Pickaxe`)
                embed.setDescription(`${output.toLocaleString()} Energy`)
                embed.setColor("4286f4")
                embed.setThumbnail("https://i.imgur.com/4mESgHv.png")
                message.channel.send(embed);
            
            } 
          } else
          if (args.length == 5) {
            if (['wood', 'wooden', 'stone', 'gold', 'golden', 'iron', 'diamond'].includes(args[2].toLowerCase())) {
              prestigeLevel = parseFloat(toPrestigeNumber(args[3]))
              if (isNaN(prestigeLevel) == false && prestigeLevel >= 1 && prestigeLevel <= 10) {
                pickaxeLevel = parseFloat(args[4]).toFixed(0)
                if (isNaN(pickaxeLevel) == false && ((pickaxeLevel >= 2 && pickaxeLevel <= 500) || pickaxeLevel == 1)) {
                  totalEnergy = 0
                  for (i = 1; i <= prestigeLevel; i++) {
                    levels = prestigeLevels(args[2].toLowerCase(), i)
                    totalEnergy += pickaxeEnergy(args[2].toLowerCase(), levels)
                  }
                  totalEnergy += pickaxeEnergy(args[2].toLowerCase(), pickaxeLevel)

                  switch (args[2].toLowerCase()) {
                    case "wood":
                    case "wooden":
                      message.channel.send(new Discord.RichEmbed()
                      .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
                      .setTitle(`Energy Required to make **Prestige ${toRomanNumerals(prestigeLevel)}** Wood Pickaxe with **Level ${pickaxeLevel}**`)
                      .setDescription(`${totalEnergy.toLocaleString()} Energy`)
                      .setColor("4286f4")
                      .setThumbnail("https://i.imgur.com/FdSfdhC.png")
                      )
                    break;
        
                    case "stone":
                      message.channel.send(new Discord.RichEmbed()
                      .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
                      .setTitle(`Energy Required to make **Prestige ${toRomanNumerals(prestigeLevel)}** Stone Pickaxe with **Level ${pickaxeLevel}**`)
                      .setDescription(`${totalEnergy.toLocaleString()} Energy`)
                      .setColor("4286f4")
                      .setThumbnail("https://i.imgur.com/tPUTodA.png")
                      )
                    break;
        
                    case "gold":
                    case "golden":
                      message.channel.send(new Discord.RichEmbed()
                      .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
                      .setTitle(`Energy Required to make **Prestige ${toRomanNumerals(prestigeLevel)}** Gold Pickaxe with **Level ${pickaxeLevel}**`)
                      .setDescription(`${totalEnergy.toLocaleString()} Energy`)
                      .setColor("4286f4")
                      .setThumbnail("https://i.imgur.com/vctODx9.png")
                      )
                    break;
        
                    case "iron":
                      message.channel.send(new Discord.RichEmbed()
                      .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
                      .setTitle(`Energy Required to make **Prestige ${toRomanNumerals(prestigeLevel)}** Iron Pickaxe with **Level ${pickaxeLevel}**`)
                      .setDescription(`${totalEnergy.toLocaleString()} Energy`)
                      .setColor("4286f4")
                      .setThumbnail("https://i.imgur.com/uoKfLbK.png")
                      )
                    break;
        
                    case "diamond":
                      message.channel.send(new Discord.RichEmbed()
                      .setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
                      .setTitle(`Energy Required to make **Prestige ${toRomanNumerals(prestigeLevel)}** Diamond Pickaxe with **Level ${pickaxeLevel}**`)
                      .setDescription(`${totalEnergy.toLocaleString()} Energy`)
                      .setColor("4286f4")
                      .setThumbnail("https://i.imgur.com/4mESgHv.png")
                      )
                    break;
                  }

                  return;
                }
              }
            }
            message.channel.send("**Invalid Input**\n\n!calc [type] [rarity] <prestige level> [level]")
            return;
          } else message.channel.send("**Invalid Input**\n\n!calc [type] [rarity] <prestige level> [level]")
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
        } else message.channel.send("**Invalid Input**\n\n!calc [type] [rarity] <prestige level> [level]")
        } else

// SATCHELS
        if (args[1] == "satchel") {
        if ((args[2] == "coal") && args[3] >= 2 && args[3] <= 500) {
            var output = ((10800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12600));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Coal Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/riB4W6x.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "coalore") && args[3] >= 2 && args[3] <= 500) {
            var output = ((7200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 8400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Coal Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/qKK2rXT.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "iron") && args[3] >= 2 && args[3] <= 500) {
            var output = ((12600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Iron Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/ZFQD8EM.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "ironore") && args[3] >= 2 && args[3] <= 500) {
            var output = ((8400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 9600));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Iron Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/3F9vI6s.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "lapis") && args[3] >= 2 && args[3] <= 500) {
            var output = ((14400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 16200));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Lapis Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/J1QgASo.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "lapisore") && args[3] >= 2 && args[3] <= 500) {
            var output = ((9600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 10800));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Lapis Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/46RNDxp.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "redstone") && args[3] >= 2 && args[3] <= 500) {
            var output = ((16200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 18000));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Redstone Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/BIoiD7q.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "redstoneore") && args[3] >= 2 && args[3] <= 500) {
            var output = ((10800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 12000));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Redstone Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/mL8mBcW.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "gold") && args[3] >= 2 && args[3] <= 500) {
            var output = ((18000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 19800));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Gold Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/Xz86tkD.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "goldore") && args[3] >= 2 && args[3] <= 500) {
            var output = ((12000 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 13200));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Gold Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/InthtCT.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "diamond") && args[3] >= 2 && args[3] <= 500) {
            var output = ((19800 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 21600));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Diamond Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/S9NLL3d.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "diamondore") && args[3] >= 2 && args[3] <= 500) {
            var output = ((13200 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 14400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Diamond Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/jsBBMeb.png")
            message.channel.send(embed);
        } else

        if ((args[2] == "emerald") && args[3] >= 2 && args[3] <= 500) {
            var output = ((21600 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 23400));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Emerald Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/tTq2TEV.png")
            message.channel.send(embed);
        } else
        if ((args[2] == "emeraldore") && args[3] >= 2 && args[3] <= 500) {
            var output = ((14400 * (args[3] - 1)) + (((args[3] - 2) * (args[3] -1) / 2) * 15600));
            var embed = new Discord.RichEmbed()
            embed.setAuthor("Prisons NRG Calculator", "https://i.imgur.com/3wjuFlc.png")
            embed.setTitle(`Energy Required to make **Level ${args[3]}** Emerald Ore Satchel`)
            embed.setDescription(`${output.toLocaleString()} Energy`)
            embed.setColor("4286f4")
            embed.setThumbnail("https://i.imgur.com/L8HWA6J.png")
            message.channel.send(embed);
        } else message.channel.send("**Invalid Input**\n\n!calc [type] [rarity] <prestige level> [level]")
        } else message.channel.send("**Invalid Input**\n\n!calc [type] [rarity] <prestige level> [level]")
    break;

// TARGET
        case "target":

		var now = new Date();
        var devchannel = bot.channels.get(channelid);

// ARMOR
        if (args[1] == "armor" || args[1] == "armour" || args[1] == "sword" || args[1] == "axe") {
            message.channel.send("**Due to the recent** ***'Pvp Update'*** **Armor, Swords, & Axes can no longer be supported**\nPickaxes, Guards, & Satchels *do* still work for both !calc & !target\n\n*The PvP Update* - https://bit.ly/2QzHBJ4")
        } else
// PICKAXE
        if (args[1] == "pickaxe" || args[1] == "pick") {
        if ((args[2] == "wood" || args[2] == "wooden") && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
            var output = pickaxeEnergy("wood", args[4]) - pickaxeEnergy("wood", args[3])
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
        if (args[2] == "stone" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
            var output = pickaxeEnergy("stone", args[4]) - pickaxeEnergy("stone", args[3])
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
        if ((args[2] == "gold" || args[2] == "golden") && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
            var output = pickaxeEnergy("gold", args[4]) - pickaxeEnergy("gold", args[3])
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
        if (args[2] == "iron" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
            var output = pickaxeEnergy("iron", args[4]) - pickaxeEnergy("iron", args[3])
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
        if (args[2] == "diamond" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
            var output = pickaxeEnergy("diamond", args[4]) - pickaxeEnergy("diamond", args[3])
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
        if (args[2] == "coal" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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
        if (args[2] == "coalore" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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
        
        if (args[2] == "iron" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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
        if (args[2] == "ironore" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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

        if (args[2] == "lapis" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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
        if (args[2] == "lapisore" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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

        if (args[2] == "redstone" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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
        if (args[2] == "redstoneore" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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

        if (args[2] == "gold" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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
        if (args[2] == "goldore" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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

        if (args[2] == "diamond" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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
        if (args[2] == "diamondore" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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

        if (args[2] == "emerald" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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
        if (args[2] == "emeraldore" && args[3] >= 2 && args[3] <= 500 && args[4] >= 2 && args[4] <= 500) {
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

bot.on('error', function (error) {
  try {
    console.log(`[${currentDate()}] ${currentTime()} [Discord Error]\n${error}\n\n`)
  }
  catch (err) {
    console.log(err)
  }
})

bot.login(process.env.BOT_TOKEN);
