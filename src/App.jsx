import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import backgroundMusic from '../public/iPhoneBgm.mp3';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <audio id="audio" loop autoPlay>
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer /> 
    </main>
  )
}

export default Sentry.withProfiler(App);
