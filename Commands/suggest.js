const { MessageEmbed } = require('discord.js')


module.exports.run = (client, message) => {

	const suggestionch = client.channels.cache.get('997215542991663184');

	const msgsug = message.content.slice(9)

	const suggestionEmbed = new MessageEmbed()
		.setTitle(`New Suggestion Made`)
		.setColor('GREEN')
		.setDescription(`${msgsug}`)
		.addField(`Made By - `, `<@${message.author.id}>`)


	const addsuggestionEmbed = new MessageEmbed()
		.setTitle(`New Suggestion Added`)
		.setColor('GREEN')
		.setDescription(`${msgsug}`)

	message.channel.send({ embeds: [addsuggestionEmbed] })
	suggestionch.send({ embeds: [suggestionEmbed] })
}