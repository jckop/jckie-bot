const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message) => {
	const embed = new MessageEmbed()
		.setTitle();

	message.channel.send({ embeds: [embed] });
};