const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor(`RANDOM`)
        .setTitle(`Avatar`)
        .setDescription("[Avatar Link]("+mentionedUser.displayAvatarURL+")")
        .setFooter(`Requested by ${message.author.tag}`);

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "icon"
  }
