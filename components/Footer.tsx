import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Text */}
          <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link href="/" className="relative top-0 left-0 transition-transform hover:scale-105 mr-10">
                <Image
                  src="/branding/pose.svg"
                  alt="Hackathons at Berkeley Logo"
                  width={200}
                  height={200}
                  className="h-40 w-auto"
                />
              </Link>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold">Hackathons @ Berkeley</p>
                <p className="text-lg text-white/80 italic">Made with ❤️</p>
                <div className="flex space-x-4 pt-4 justify-center md:justify-start">
                  <a href="https://www.instagram.com/calhacks/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                    <FaInstagram size={20} className="text-white" />
                  </a>
                  <a href="https://www.facebook.com/CalHacks/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                    <FaFacebook size={20} className="text-white" />
                  </a>
                  <a href="https://twitter.com/CalHacks" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                    <FaTwitter size={20} className="text-white" />
                  </a>
                  <a href="https://github.com/calhacks" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                    <FaGithub size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="hover:opacity-80 transition-all hover:translate-x-1">Home</Link>
                <a href="http://cubstart.com" className="hover:opacity-80 transition-all hover:translate-x-1">Cubstart</a>
                <a href="https://ai.hackberkeley.org/" className="hover:opacity-80 transition-all hover:translate-x-1">UC Berkeley AI Hackathon</a>
              </div>
              <div className="flex flex-col space-y-3">
                <Link href="/sponsor" className="hover:opacity-80 transition-all hover:translate-x-1">Sponsor Us</Link>
                <a href="/conduct.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all hover:translate-x-1">
                  Code of Conduct
                </a>
                <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all hover:translate-x-1">
                  MLH Code of Conduct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
