import Image from 'next/image'
import Navbar from './components/Navbar';
import Welcome from './sections/Welcome';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Contacts from './sections/Contacts';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className={"w-full h-min-screen flex flex-col justify-center items-center bg-[#102921]"}>
      <Navbar />
        <Welcome />
        <AboutMe />
        <Projects />
        <Contacts />
      <Footer />
    </main>
    );
}
