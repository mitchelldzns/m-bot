const path = require('path');
const config = require(path.join(__dirname, 'config.json'));
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = ("NTgwODU5Mzg2NjMzOTEyMzYw.XOXq4A.AtUJ2MY_T2zUQLJZ3TRhaWLPhdI");
const apikey = ("https://accgen.cathook.club/api/v1/account/J2HGM9M-7NT4MCR-NWNTVTS-RTN5F71");
const fetch = require("node-fetch");


bot.login(token);

bot.on('ready', () => {
	console.log("up");
});


bot.on('message' , message=>{ 
	let args = message.content.substring(config.prefix.length).split(" ");
	switch(args[0]){
		case 'version':
		message.reply('Created by ***Mitch#9464*** & ***Sleep#5910*** - Version 1.0.0');
		break;
	}

});

bot.on("message", (message) => {
	if (message.author.bot || !message.content.startsWith(config.prefix)) return;
	const args = message.content.slice(config.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	usr = message.author.username;
	senddm = message.author;
	if (command === 'account') {	
		message.channel.send("Check your private messages for a steam account.");
		;(async () => {	
			let response = await fetch(apikey)
			let data = await response.json()
			var embed2 = new Discord.RichEmbed()
			.setDescription("Here's your steam account!")
			.setTitle(message.author.username)
			.setTimestamp(new Date().toISOString())
			.setColor(0x02ecff)
			.setFooter('', 'https://cdn.discordapp.com/attachments/581082818604433408/581100094036639744/2c00f5ae7675fc45c6cf85a2242c8646.jpg')
			.addField("Username :", data.login, true)
			.addField("Password :", data.password, true)
			.addField("Profile :", "https://steamcommunity.com/profiles/"+data.steamid, true)
			senddm.sendMessage(embed2);
		})()
	}
});	
