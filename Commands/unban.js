const rgx = /^(?:<@!?)?(\d+)>?$/;
const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
	try {
							const modlogch = client.channels.cache.get('996785753348649101');
              const id = args[0];
              if (!rgx.test(id)) return message.channel.send(`Please provide a valid user ID`)
              const bannedUsers = await message.guild.bans.fetch();
              const user = bannedUsers.get(id).user;
              if (!user) return message.channel.send(`Unable to find user, please check the provided ID valid`)
              let reason = args.slice(1).join(' ');
              if (!reason) reason = '`None`';
              if (!reason.length > 1024) reason = reason.slice(0, 1021) + '...';

              await message.guild.members.unban(user, reason)
							const PubEmbed = new MessageEmbed()
								.setTitle(`Succesfuly UnBanned ${user.tag}`)
								.setFooter(`Unbanned By ${message.author}`)
              const embed = new MessageEmbed()
              .setTitle('UnBan Member')
              .setDescription(`${user.tag} was successfully unbanned.`)
              .addField('Reason', `${reason}`)
              embed.setFooter(`${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
              .setTimestamp()
              .setColor('GREEN');
              modlogch.channel.send({ embeds: [embed] })
							message.channel.send({ embeds: [PubEmbed] })

      }
 catch (err) {
             console.log(err)
         }
}
