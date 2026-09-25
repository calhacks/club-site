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
      <a
			  id="mlh-trust-badge"
			  style={{
			    display: 'block',
			    maxWidth: '100px',
			    minWidth: '60px',
			    position: 'fixed',
			    right: '50px',
			    top: '0',
			    width: '10%',
			    zIndex: 10000
			  }}
			  href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=blue"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  <img
			    src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-blue.svg"
			    alt="Major League Hacking 2026 Hackathon Season"
			    style={{ width: '100%' }}
			  />
			</a>
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
