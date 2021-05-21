const replies = ['🚂🌈💖', 'Choo choo!', 'Ding! 🛎', 'Never forget this dot!'];

module.exports = function(msg, args) {
  const index = Math.floor(Math.random() * replies.length);
  msg.channel.send("https://ead2.iff.edu.br/");
};