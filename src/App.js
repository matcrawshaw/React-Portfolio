import { MantineProvider } from '@mantine/core';
import './App.css';
import HeaderSimpleProps from './Components/Header';
import HomeJumbotron from './Components/Jumbotron'
import { Button } from '@mantine/core';
import CardGrid from './Components/CardGrid'
import FooterSocial from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import WorkPage from './Pages/Work';
import ContactPage from './Pages/Contact'
import Background from "./Components/config/ParticlesBackground";
import React from 'react';


function App() {
  return (
    <Router>
    <div className='App'>


      
<Background/>


<MantineProvider theme={{
colorScheme: "dark",
fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' }
}}>


<HeaderSimpleProps  links={[{
   }]} />


<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/about" element={<AboutPage/>}/>
<Route path="/work" element={<WorkPage/>}/>
<Route path="/contact" element={<ContactPage/>}/>

</Routes>
<FooterSocial/>


</MantineProvider>
    </div>

    </Router>
  )

}

export default App;
