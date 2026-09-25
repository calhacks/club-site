import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <a
        id="mlh-trust-badge"
        style={{
          display: 'block',
          maxWidth: '100px',
          minWidth: '60px',
          position: 'absolute',
          right: '50px',
          top: '0',
          width: '10%',
          zIndex: 10000
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2027-season&utm_content=blue"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-blue.svg"
          alt="Major League Hacking 2027 Hackathon Season"
          style={{ width: '100%' }}
        />
      </a>
      <div className="max-w-screen-xl mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
} 