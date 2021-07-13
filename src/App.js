
import './App.css';
import React,{Suspense} from 'react';
import styled from "styled-components"
import { Canvas } from '@react-three/fiber';
import Hand from './components/Hand/Index.jsx'
import { OrbitControls } from '@react-three/drei';
import { MainSection } from './components/Files/Main';
import { Nav } from './components/Files/Nav';
import { AboutMe } from './components/Files/AboutMe';
import { Work } from './components/Files/Work';
import { Contact } from './components/Files/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const CanvasContainer = styled.div`
width:100%;
height:100%;
`;

function App() {
  return (
    <Router>
     <Switch>
    <Route exact path='/'>
    <CanvasContainer>
      <MainSection/>
      <Canvas camera={{position:[0,0,300],fov:70}}>
        <OrbitControls autoRotate={true} autoRotateSpeed={10} enableRotate={false} enableZoom={false}/>
        <ambientLight intensity={0.3}/>
        <spotLight position={[0,120,0]} intensity={1}/>
        <Suspense fallback={null}>
          <Hand/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
    </Route>
   
    <Route exact path='/nav'>
      <Nav/>
    </Route>
    <Route exact path='/about'>
      <AboutMe/>
    </Route>
    <Route exact path='/work'>
      <Work/>
    </Route>
    <Route exact path='/contact'>
      <Contact/>
    </Route>
    </Switch>
    </Router>
   
  ) 
}

export default App;
