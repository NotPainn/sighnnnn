module.exports = {
    name: 'clear',
    description: 'Clears messages!',
    async execute(message, args) {
        if(!args[0]) return message.reply("Please enter an amount of messages you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You cannot delete more then 100 messages!");
        if(args[0] < 1) return message.reply("You must enter a valid number!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}