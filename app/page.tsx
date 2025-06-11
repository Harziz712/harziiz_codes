import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <>
   <Navbar/>
     <main className="relative">
        <Hero />
        <ProfileCard/>
        {/* Other sections go here */}
      </main>
    </>
  );
}
