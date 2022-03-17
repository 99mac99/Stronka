import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home/home';
import Mission from './components/mission/mission';
import Roadmap from './components/roadmap/roadmap';
import Team from './components/team/team';
import Footer from './components/footer';


function App() {
  return (
<>
<NavBar />
<Home />
<Mission />
<Roadmap />
<Team />
<Footer />
</>
  );
}

export default App;
