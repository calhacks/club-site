import DefaultLayout from "./default-layout";
import { Hero } from "@/components/Hero";
import { Initiatives } from "@/components/Initiatives";
import { PhotoGallery } from "@/components/PhotoGallery";

export default function Home() {
  return (
    <DefaultLayout>
      <main>
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
        <Hero />
        <Initiatives />
        <PhotoGallery />
      </main>
    </DefaultLayout>
  );
}
