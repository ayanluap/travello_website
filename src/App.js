import React from 'react';
import Header from './components/sections/Header';
import Main from './components/sections/Main';
import SimpleCard from './components/sections/SimpleCard';
import FlipingCards from './components/sections/FlipingCards';
import Stories from './components/sections/Stories';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <SimpleCard />
      <FlipingCards />
      <Stories />
    </div>
  );
}

export default App;
