import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/sections/NavigationBar';
import Header from './components/sections/Header';
import Main from './components/sections/Main';
import SimpleCard from './components/sections/SimpleCard';
import FlipingCards from './components/sections/FlipingCards';
import Stories from './components/sections/Stories';
import Form from './components/sections/Form';

// import SmoothScrollbar from 'smooth-scrollbar';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overflow';
// import Scrollbar from 'react-smooth-scrollbar';
import './App.css';
import Footer from './components/sections/Footer';

function App() {
  // let myScrollbar = useRef();

  return (
    <Router>
      <NavigationBar />
      <Header />
      <Main />
      <SimpleCard />
      <FlipingCards />
      <Stories />
      <Form />
      <Footer />
    </Router>
  );
}

export default App;
