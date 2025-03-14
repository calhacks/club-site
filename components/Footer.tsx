import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa'


export function Footer() {
  return (
    <footer className="bg-primary text-white py-16 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo */}
          <Link href="/" className="transition-transform hover:scale-105">
            <Image
              src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/hackathonsatberkeley/hackathons-at-berkeley-logo.png"
              alt="Hackathons at Berkeley Logo"
              width={200}
              height={50}
              className="h-12 w-auto invert"
            />
          </Link>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:opacity-80 transition-all hover:translate-x-1">Home</Link>
              <a href="http://cubstart.com" className="hover:opacity-80 transition-all hover:translate-x-1">Cubstart</a>
              <a href="https://ai.calhacks.io/" className="hover:opacity-80 transition-all hover:translate-x-1">UC Berkeley AI Hackathon</a>
            </div>
            <div className="flex flex-col space-y-3">
              <Link href="/sponsor" className="hover:opacity-80 transition-all hover:translate-x-1">Sponsor Us</Link>
              <a href="/conduct.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all hover:translate-x-1">
                Code of Conduct
              </a>
              <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all hover:translate-x-1">
                MLH Code of Conduct
              </a>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.facebook.com/CalHacks/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                  <FaFacebook size={20} className="text-white" />
                </a>
                <a href="https://twitter.com/CalHacks" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                  <FaTwitter size={20} className="text-white" />
                </a>
                <a href="https://www.instagram.com/calhacks/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                  <FaInstagram size={20} className="text-white" />
                </a>
                <a href="https://github.com/calhacks" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                  <FaGithub size={20} className="text-white" />
                </a>
                <a href="https://discord.gg/calhacks" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                  <FaDiscord size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-12">
          <p className="text-sm bg-white/10 inline-block px-6 py-2 rounded-full">Made with ♡, by Hackathons at Berkeley</p>
        </div>
      </div>
    </footer>
  )
} 