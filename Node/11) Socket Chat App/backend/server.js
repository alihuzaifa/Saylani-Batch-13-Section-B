import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const messages = [];
const users = [];

const addUser = (socketId, username) => {
  users.push({
    id: socketId,
    username: username,
    joinedAt: new Date()
  });
};

const removeUser = (socketId) => {
  const userIndex = users.findIndex(user => user.id === socketId);
  if (userIndex !== -1) {
    const user = users[userIndex];
    users.splice(userIndex, 1);
    return user;
  }
  return null;
};

const getUsers = () => {
  return users;
};

const addMessage = (message) => {
  messages.push({
    id: Date.now() + Math.random(),
    ...message,
    timestamp: new Date()
  });
};

io.on('connection', (socket) => {

  socket.on('join', (data) => {
    const { username } = data;

    if (!username || username.trim() === '') {
      socket.emit('error', { message: 'Username is required' });
      return;
    }

    const existingUser = users.find(user =>
      user.username.toLowerCase() === username.toLowerCase()
    );

    if (existingUser) {
      socket.emit('error', { message: 'Username is already taken' });
      return;
    }

    addUser(socket.id, username.trim());

    socket.emit('joined', {
      message: `Welcome to the chat, ${username}!`,
      users: getUsers(),
      recentMessages: messages.slice(-20)
    });

    socket.broadcast.emit('userJoined', {
      message: `${username} joined the chat`,
      users: getUsers()
    });
  });

  socket.on('sendMessage', (data) => {
    const user = users.find(u => u.id === socket.id);

    if (!user) {
      socket.emit('error', { message: 'You must join first' });
      return;
    }

    const { message } = data;

    if (!message || message.trim() === '') {
      socket.emit('error', { message: 'Message cannot be empty' });
      return;
    }

    const newMessage = {
      username: user.username,
      message: message.trim(),
      socketId: socket.id
    };

    addMessage(newMessage);

    io.emit('newMessage', {
      ...newMessage,
      timestamp: new Date()
    });
  });


  socket.on('disconnect', () => {
    removeUser(socket.id);
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
