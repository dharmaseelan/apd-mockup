import React from 'react';
import Header from './components/Header';
import Main_Banner from './components/Main_Banner';
import What_We_Offer from './components/What_We_Offer';
import Counter from './components/Counter';
import Services from './components/Services';
import Team from './components/Our_Team';
import Contact_Us from './components/Contact_Us';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
        <Main_Banner/>
        <What_We_Offer/>
        <Counter/>
        <Services/>
        <Team />
        <Contact_Us />
        <Testimonials />
        <Clients />
      <Footer />
    </div>
  );
}

export default App;
