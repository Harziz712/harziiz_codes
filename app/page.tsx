import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <>
   <Navbar/>
     <main className="relative">
        <Hero />
        <ProfileCard/>
        <HowItWorks/>
        {/* Other sections go here */}
      </main>
    </>
  );
}
