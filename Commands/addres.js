const { MessageEmbed } = require('discord.js')


module.exports.run = (client, message) => {

	if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`You Do Not Have Valid Permissions!`);

	const resourcech = client.channels.cache.get('996785559760535652');

	const msglink = message.content.slice(7)

	const newResource = new MessageEmbed()
		.setTitle(`New Resource Made`)
		.setColor('GREEN')
		.setDescription(`[Resource Link](${msglink})`)
		.addField(`Made By - `, `<@${message.author.id}>`)


	const addresourceEmbed = new MessageEmbed()
		.setTitle(`New Resource Added`)
		.setColor('GREEN')
		.setDescription(`[Resource Link](${msglink})`)

	message.channel.send({ embeds: [addresourceEmbed] })
	resourcech.send({ embeds: [newResource] })
}