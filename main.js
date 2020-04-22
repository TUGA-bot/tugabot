const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} est désormais en ligne !`);
});

client.on('message', msg => {
  if (msg.content === 'ntm') {
    msg.channel.send('Attends, je termine avec la tienne.');
  }
});

client.on('message', msg => {
    if (msg.content === 'fdp') {
      msg.channel.send('Approche toi que je te pète les rotules.');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'ca va ?') {
      msg.channel.send('Comme un bot et toi ?');
    }
});

    client.on('message', msg => {
        if (msg.content === 'GATU infos') {
          msg.channel.send('Je suis un bot amplement personnalisable fondé par TUGA');
        }
    });

    client.on('message', msg => {
        if (msg.content === 'ta mère la pute') {
          msg.channel.send('Laisse moi deux secondes, je quitte pornhub, ta mère me dégoûte des sites pornos');
        }
    });

client.login('NzAyMzc2NjE4NjM0NzcyNDgw.XqCKxA.CcFt7hWaDMbwxspCSknnMkpNVxY');