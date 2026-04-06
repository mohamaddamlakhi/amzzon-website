import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="gallery"><Gallery /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
