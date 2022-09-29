import React from 'react';
import RoomProvider from './context/RoomProvider/RoomProvider';
import App from './App';

export default function Wrapper() {
  return (
    <RoomProvider>
      <App />
    </RoomProvider>
  );
}
