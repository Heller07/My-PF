import {About} from '@/sections/About';
import {Contact} from '@/sections/Contact';
import {Experience} from '@/sections/Experience';
import {Hero} from '@/sections/Hero';
import {Projects} from '@/sections/Projects';
import {Achievements} from '@/sections/Achievements';
import { Navbar } from '@/layout/Navbar';
import { Footer } from './layout/Footer';

function App() {

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Achievements/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
