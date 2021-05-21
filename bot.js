console.log("Beep");

require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on("ready",readyDiscord);

const commandHandler = require("./commands");

client.on("message",commandHandler);
const channel = client.channels.cache.get(784152887508074501);
async function gotMessage(msg)
    {
    if(msg.content==="kça")
    {
        msg.channel.send('rato');
    }
    if(msg.content==="join")
    {
        msg.member.voice.channel.join();
    }
    else if (msg.content.slice(0,10) == 'prova enem')
    {
 //   let url = `https://g.tenor.com/v1/search?q=Gabriel&key=${process.env.TENORKEY}`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    var str = msg.content.slice(11,15);
    msg.channel.send(str);
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
    }
}


function readyDiscord()
{
    console.log("♥");
}