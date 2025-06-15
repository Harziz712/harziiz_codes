"use client"

import DesignServices from "./components/DesignServices";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import MyProjects from "./components/MyProjects";
import WhyChooseMe from "./components/WhyChooseMe";
import HappyClients from "./components/HappyClients";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
   <Navbar/>
     <main className="relative">
        <Hero />
        <ProfileCard/>
        <HowItWorks/>
        <DesignServices/>
        <MyProjects/>
        <WhyChooseMe />
        <HappyClients/>
        <Faq/>
        {/* Other sections go here */}
      </main>
    </>
  );
}
