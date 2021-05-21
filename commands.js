
const { SystemChannelFlags } = require('discord.js');
const eadiff = require('./commands/playsong.js');
var exec = require('child_process').exec, child;
const Discord = require("discord.js");
const fetch = require("node-fetch");
//const channel = client.channels.cache.get(784152887508074501);
async function Get(msg,args)
{
  var str = msg.content.slice(5);
  var file ='./resources/'+str;
  console.log(file);
  msg.channel.send(new Discord.MessageAttachment(file) );

}

async function tchau (msg,args)
{
    var str = msg.content.slice(6);
      //msg.channel.send(str);
     // if(msg.content==='lol')
     // {
        //child = exec("shutdown -p");
     // }
//System("calc");
};

async function goin(msg,args)
{
  if (msg.member.voice.channel) 
  {

    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('https://dictionary.cambridge.org/media/english/uk_pron/e/epd/epd08/epd08451.mp3');
   // dispatcher.resume();
  }
 else msg.reply('You need to join a voice channel first!');
}

async function blay(msg,args)
{

}

async function kça(msg,args)
{
msg.channel.send("rato");
}

async function gif(msg,args)
{
  let url = `https://g.tenor.com/v1/search?q=${args}&key=${process.env.TENORKEY}`;
  let response = await fetch(url);
  let json = await response.json();
  console.log(json);
  var str = msg.content.slice(11,15);
  msg.channel.send(str);
  const index = Math.floor(Math.random() * json.results.length);
  msg.channel.send(json.results[index].url);
} 

async function play(msg,args)
{
  
//console.log(msg.member.user.username);
msg.channel.send("S musica coco em, "+msg.member.user.username);
}

async function p (msg,args)
{
play(msg,args);
}

async function ka(msg,args)
{

  let role = msg.member.guild.roles.cache.find(role => role.name === "Caçador Supremo");
if (role) msg.guild.members.cache.get(msg.author.id).roles.add(role);


}
const commands = { eadiff,tchau,Get,goin,blay, kça,ka ,gif,p,play };

module.exports = async function(msg) {
    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === '-') {
      command = command.substring(1);
      commands[command](msg, tokens);
    }
  
};