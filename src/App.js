import './App.css';
import { NavBar } from './components/NavBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const nevigate = useNavigate();

  useEffect(() => nevigate('/home'), []);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
