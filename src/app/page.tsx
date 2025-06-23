import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Programs from './components/Programs';
// import ImpactInAction from './components/ImpactInAction';
import GetInvolved from './components/GetInvolved';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      {/* <ImpactInAction /> */}
      <GetInvolved />
    </main>
  );
}
