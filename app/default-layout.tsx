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
      <div className="max-w-screen-xl mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
} 