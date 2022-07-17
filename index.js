/* eslint-disable no-undef */
const fs = require('node:fs');

// Other Vars
const prefix = '.';

// Djs Objects

const { Client, MessageEmbed, Collection } = require('discord.js');
const mongoose = require('mongoose')
// Secrets

const { token } = require('./JSON/config.json');
const { mongouri } = require('./JSON/config.json');

// Client

const client = new Client({
	intents: [
		'GUILD_MESSAGES',
		'GUILDS',
		'GUILD_BANS',
		'GUILD_MEMBERS',
	],
});

// Command Paths

client.commands = new Collection();
const commands = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
for (file of commands) {
	const commandName = file.split('.')[0];
	const command = require(`./Commands/${commandName}`);
	client.commands.set(commandName, command);
}

// The Event Listener

client.on('messageCreate', message => {
	if (message.content.startsWith(prefix)) {
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const commandName = args.shift();
		const command = client.commands.get(commandName);


		if (!command) return message.channel.send('Invalid Command!');

		command.run(client, message, args);
	}
});
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
const triggerWords = ['shit', 'ass', 'bitch', 'fuck', 'arse', 'faggot', 'cunt', 'gay', 'furry', 'racist', 'cock', 'penis'];
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //


client.on('messageCreate', (message) => {
	if (message.author.bot) return false;

	triggerWords.forEach((word) => {
		if (message.content.includes(word)) {
			message.channel.send('This Server Is A Safe Space!');
		}
	});
});

client.on('guildMemberAdd', (member) => {

	const byech = client.channels.cache.get('997883280659587142');

	const welcomeEmbed = new MessageEmbed()
		.setTitle('A New Member Has Joined The Server!')
		.setDescription(`Hey <@${member.id}>, Welcome To **Olos Club**!`)
		.setColor('GREEN')
		.addField(
			'Before Continuing On',
			'Read The Rules In <#992046426928459837> and while this is not needed, introduce yourself in <#992500204970455070>',
		);

	byech.send({ embeds: [welcomeEmbed] });
});

client.on('guildMemberRemove', (member) => {

	const welcomech = client.channels.cache.get('997883267556577320');

	const goodbyeEmbed = new MessageEmbed()
		.setTitle('A Member Has Left Us')
		.setColor('RED')
		.setDescription(`${member.user.tag} Has Left Us... We're Sorry For What We Did That Made You Leave`);

	welcomech.send({ embeds: [goodbyeEmbed] });
});
// Functions
function get_ready() {

	const readych = client.channels.cache.get('997884387326693436');
	const readyem = new MessageEmbed()
	.setTitle(`Bot Online`)
	.setColor('GREEN')
	.setDescription(`Bot Is Online, More Features Like Database Connection, Ping and Much More Will Be Added Soon.`)


	readych.send({ embeds: [readyem] });

	client.user.setPresence({ activities: [{ name: `for comamnds in Jck's Club`, type: `WATCHING` }] })
	console.log(`Bot Online And Logged In As ${client.user.tag}`);

	if (!mongouri) return;
	mongoose.connect(mongouri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}).then(() => {
		console.log('Database Connected');
	}).catch((err) => {
		console.log('An Error Has Occured');
		console.log(err);
	});
}

client.on('ready', () => {
	get_ready()
});


client.login(token);