import NavBar from '@/components/NavBar';
import Welcome from '@/section/Welcome';
import AboutMe from '@/section/AboutMe';

import Projects from '@/section/Projects';
import Contacts from '@/section/Contacts';
import Footer from '@/components/Footer';

import Link from 'next/link';
import Image from 'next/image';
import Experiences from '@/section/Experiences';



export default function Home() {
  return (
    <div className={"w-full h-min-screen flex flex-col justify-center items-center"}>
      <NavBar />
        <Welcome />
        <AboutMe />
        <Projects />
        <Contacts />
        
        {/* <Experiences />
        <Projects />
         */}
      <Footer />
    </div>
  )
}