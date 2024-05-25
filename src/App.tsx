import React from 'react';
import './App.css';

// @ts-ignore
import Logo from './logo.svg';
import MainPage from './pages/mainPage';
// I'm not sure why, but this import only works with "../node_modules" part
// probably due to webpack config exclusions of node_modules?
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <MainPage/>
  );
}

export default App;
