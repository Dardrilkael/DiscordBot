console.log("Beep");

require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on("ready",readyDiscord);

const commandHandler = require("./commands");

client.on("message",commandHandler);



function readyDiscord()
{
    console.log("♥");
}