import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const socket = io('http://192.168.29.116:80');

export default function index() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [isDisconnected, setIsDisconnected] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
      setIsDisconnected(false);
    });

    socket.on('message', (data) => {
      console.log(data);
      setMessages([...messages, data]);
    });

    socket.on('activeUser', (data) => {
      console.log(data);
      setUserCount(data?.count);
    });

    socket.on('disconnect', (reason) => {
      console.log('Disconnected:', reason);
      setIsDisconnected(true);
    });

    // Cleanup the event listeners when the component is unmounted
    return () => {
      socket.off('connect');
      socket.off('message');
      socket.off('activeUser');
      socket.off('disconnect');
    };
  }, [messages]);

  const disconnectFunc = () => {
    socket.disconnect();
  };

  return (
    <div>
      <p>{userCount}</p>
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
      <div>
        <input
          type="text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          onClick={() => {
            socket.emit('message', message);
            setMessage('');
          }}
        >
          Send
        </button>
        <br />
        <button onClick={disconnectFunc} disabled={isDisconnected}>
          {isDisconnected ? 'Disconnected' : 'Disconnect'}
        </button>
      </div>
    </div>
  );
}
