import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import RootLayout from './layout'
import About from './Components/About';
import History from './Components/History';
import Vision from './Components/Vision';
import Clubs from './Components/Clubs';
import Executives from './Components/Executives';
import Cluster from './Components/Cluster';
import Teams from './Components/Teams';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


export default function Home() {
  return (
    <RootLayout className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <History />
      <Executives />
      <Teams />
      <Clubs />
      <Cluster />
      <Events />
      <Contact />
      <Footer />
    </RootLayout>
  );
}
