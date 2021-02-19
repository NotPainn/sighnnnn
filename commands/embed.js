const { MessageEmbed } = require("discord.js");
const { description, execute } = require("./ping");

module.exports = {
    name: 'embed',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#2ACAEA')
        .setTitle('Rules')
        .setURL('https://youtube.com/c/notpain')
        .setDescription('This is a embed for the server rules')
        .addFields(
            {name: 'Rule 1' , value: 'NO Discrimination what so ever.'},
            {name: 'Rule 2' , value: 'No Unnecessary Drama'},
            {name: 'Rule 3' , value: 'NO NSFW or talking aboust NSFW, (NO weird Gay stuff included)'},
            {name: 'Rule 4' , value: 'Dont Ping. (replys okay depending on the staff member)'},
            {name: 'Rule 5' , value: 'No impersonation.'},
            {name: 'Rule 6' , value: 'Listen to staff Includes @Trial Mod'},
        )
        .setImage('https://media.discordapp.net/attachments/811272342545760256/811693615221964800/Pain.png?width=720&height=446')
        .setFooter('Rules can subject to change.');
        

        message.channel.send(newEmbed)
    }
    
}