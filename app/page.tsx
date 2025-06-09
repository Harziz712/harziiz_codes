import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
   <Navbar/>
     <main className="relative">
        <Hero />
        {/* Other sections go here */}
      </main>
    </>
  );
}
