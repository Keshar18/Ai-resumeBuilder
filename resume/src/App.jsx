import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useUser } from '@clerk/clerk-react';
import './App.css';
// import { Button } from "/components/ui/button";
import { Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';

function App() {
  const user = useUser();

  return (
    <div className="App">
      <Header />
      <h1>Welcome to your App</h1>
      {/* Example usage of Clerk user */}
      {user.isSignedIn ? <p>Hello, {user.user.firstName}</p> : <Navigate to="/signin" />}
      <Outlet />
    </div>
  );
}

export default App;
