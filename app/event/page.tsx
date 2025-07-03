import Main from "./Main";
import { Metadata } from "next";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Cal Hacks 12.0 - Coming October 24-26, 2025",
  description: "Cal Hacks 12.0 - Hackathons @ Berkeley",
};


export default function Event() {
  return (
    <div className={`relative h-dvh w-screen antialiased`}>
      <Navbar />
      <div className="m-0 box-border h-full w-full p-0">
      
        <main className="relative grid h-full w-full place-items-center bg-gradient-to-b from-black to-[#36517d]">
          {/* Clean gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none"></div>
          
          <Main />
        </main>
      </div>
      <Footer />
    </div>
  )
}