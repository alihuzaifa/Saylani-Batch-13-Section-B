import { useState, useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'
import './App.css'

interface Message {
  id: string
  username: string
  message: string
  timestamp: Date
}

interface User {
  id: string
  username: string
  joinedAt: Date
}

function App() {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [username, setUsername] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const initializeSocket = () => {
    const newSocket = io('http://localhost:3000')
    setSocket(newSocket)

    newSocket.on('connect', () => {
      setIsConnected(true)
    })

    newSocket.on('disconnect', () => {
      setIsConnected(false)
    })

    newSocket.on('joined', (data) => {
      setCurrentUser(data.message.split(' ')[3].replace('!', ''))
      setUsers(data.users)
      setMessages(data.recentMessages)
    })

    newSocket.on('userJoined', (data) => {
      setUsers(data.users)
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        username: 'System',
        message: data.message,
        timestamp: new Date()
      }])
    })


    newSocket.on('newMessage', (data) => {
      setMessages(prev => [...prev, {
        id: data.id || Date.now().toString(),
        username: data.username,
        message: data.message,
        timestamp: new Date(data.timestamp)
      }])
    })



    return newSocket
  }

  useEffect(() => {
    const newSocket = initializeSocket()
    
    return () => {
      newSocket.close()
    }
  }, [])


  const joinChat = () => {
    if (username.trim() && socket) {
      socket.emit('join', { username: username.trim() })
    }
  }

  const sendMessage = () => {
    if (newMessage.trim() && socket) {
      socket.emit('sendMessage', { message: newMessage.trim() })
      setNewMessage('')
    }
  }


  if (!isConnected) {
    return (
      <div className="app">
        <div className="connection-status">
          <h2>Connecting to server...</h2>
        </div>
      </div>
    )
  }

  if (!currentUser) {
    return (
      <div className="app">
        <div className="join-form">
          <h2>Join Chat</h2>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && joinChat()}
            maxLength={20}
          />
          <button onClick={joinChat}>Join Chat</button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="chat-container">
        <div className="chat-header">
          <h2>Group Chat</h2>
          <div className="user-info">
            <span>Welcome, {currentUser}</span>
            <div className="connection-indicator">
              <div className={`status-dot ${isConnected ? 'connected' : 'disconnected'}`}></div>
              {isConnected ? 'Connected' : 'Disconnected'}
            </div>
          </div>
        </div>

        <div className="users-panel">
          <h3>Online Users ({users.length})</h3>
          <div className="user-list">
            {users.map(user => (
              <span key={user.id} className="user-badge">
                {user.username}
              </span>
            ))}
          </div>
        </div>

        <div className="messages-container">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.username === currentUser ? 'own' : msg.username === 'System' ? 'system' : ''}`}>
              <div className="message-bubble">
                {msg.username !== 'System' && <span className="message-username">{msg.username}</span>}
                <span className="message-text">{msg.message}</span>
              </div>
              <div className="message-time">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                sendMessage()
              }
            }}
            maxLength={500}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default App