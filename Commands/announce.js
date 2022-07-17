/* eslint-disable no-unused-vars */
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, prefix) => {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('You do not have permission to use this command');

    if (!args.length) return message.channel.send(`> Usage: ${prefix}announce <#channel> <message>`);

    const channel = message.mentions.channels.first();
    if (!channel) return message.reply('Please specify a channel!');

    if (!args[1]) return message.reply('Please specify a message to announce');

    // mentions
    const embed = new MessageEmbed()
            .setTitle(args.slice(3).join(" "))
            .setDescription(args.slice(1).join(" "))
            .setTimestamp()
            embed.setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('BLURPLE')

    channel.send({ embeds: [embed] })

}