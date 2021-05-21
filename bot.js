console.log("Beep");

require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(ODQ0NjAzMDYyODQ0OTE1NzYy.YKUz5g.w9oA1KSAOzQP-lWMmf0e0x2K5WU);

client.on("ready",readyDiscord);

const commandHandler = require("./commands");

client.on("message",commandHandler);



function readyDiscord()
{
    console.log("♥");
}