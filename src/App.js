
import { MantineProvider } from '@mantine/core';
import './App.css';
import HeaderSimpleProps from './Components/Header';
import HeroImageRight from './Components/Hero'
import { Button } from '@mantine/core';
import Cards from './Components/Cards'
import FooterSocial from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './Pages/About'

function App() {
  return (
    <Router>
    <div className="App">
<MantineProvider theme={{
colorScheme: "dark",
fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' }
}}>

   <HeaderSimpleProps  links={[{
   }]} />

<Routes>
<Route path="/" element={<HeroImageRight/>} />
<Route path="/#about" element={<AboutPage/>} />


</Routes>



<FooterSocial/>




</MantineProvider>
    </div>
    </Router>
  );
}

export default App;
