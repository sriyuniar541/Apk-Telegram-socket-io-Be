const { store, list } = require('../models/chats.js');

module.exports = (io, socket) => {
  socket.on('ping', (data) => {
    socket.emit('ping-response', data);
  });
  
  // join private room
  socket.on('join-room', (data) => {
    const { id, fullname, password } = data;
    socket.join(id);
  });

  // post private room
  socket.on('send-message', (data) => {
    store(data)
      .then(async () => {
        const listChats = await list(data.sender, data.receiver);
        io.to(data.receiver).emit('send-message-response', listChats.rows);
      })
      .catch((err) => {
        console.log('error send message');
        console.log(err);
      });
  });

  // get history chat
  socket.on('chat-history', async (data) => {
    try {
      console.log(data);
      const listChats = await list(data.sender, data.receiver);
      io.to(data.sender).emit('send-message-response', listChats.rows);
    } catch (err) {
      console.log('Error chat-history');
      console.log(err);
    }
  });

  //join group chat
  socket.on("join_room_group", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined rooms: ${data}`);
  });

  socket.on("send_message_group", (data) => {
    socket.to(data.rooms).emit("receive_message_group", data);
  });
};


