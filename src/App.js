
import { MantineProvider } from '@mantine/core';
import './App.css';
import HeaderResponsive from './Components/Header';
import HeroImageRight from './Components/Hero';

function App() {
  return (
    <div className="App">
<MantineProvider theme={{
colorScheme: "dark"
}}>

   <HeaderResponsive  links={[{
    link: { link: "www.google.com"}, label: "About Me"}, { 
    link: { link: "www.google.com"}, label: "My Work"}, {
    link: { link: "www.google.com"}, label: "Resume"}, ]} />
<HeroImageRight />


</MantineProvider>
    </div>
  );
}

export default App;
