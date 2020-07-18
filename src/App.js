import React, { useRef, useEffect } from 'react';
import Header from './components/sections/Header';
import Main from './components/sections/Main';
import SimpleCard from './components/sections/SimpleCard';
import FlipingCards from './components/sections/FlipingCards';
import Stories from './components/sections/Stories';
import Form from './components/sections/Form';

// import SmoothScrollbar from 'smooth-scrollbar';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overflow';
import Scrollbar from 'react-smooth-scrollbar';
import './App.css';

function App() {
  // let myScrollbar = useRef();

  return (
    <Scrollbar
      damping={0.5}
      thumbMinSize={10}
      // syncCallbacks={boolean}
      renderByPixels={true}
      alwaysShowTracks={false}
      continuousScrolling={true}
      // wheelEventTarget={myScrollbar}
    >
      <Header />
      <Main />
      <SimpleCard />
      <FlipingCards />
      <Stories />
      <Form />
    </Scrollbar>
  );
}

export default App;
