import DefaultLayout from "../default-layout";
import { SponsorHero } from "@/components/sponsor/SponsorHero";
import { SponsorStats } from "@/components/sponsor/SponsorStats";
import { SponsorPast } from "@/components/sponsor/SponsorPast";
import { SponsorTestimonials } from "@/components/sponsor/SponsorTestimonials";
import { SponsorContact } from "@/components/sponsor/SponsorContact";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sponsor - Hackathons at Berkeley',
  description: 'Help support Cal Hacks, the largest collegiate hackathon, and make Cal Hacks your event.',
}

export default function Sponsor() {
  return (
    <DefaultLayout>
      <main>
        <SponsorHero />
        <SponsorStats />
        <SponsorContact />
        <SponsorPast />
        <SponsorTestimonials />
      </main>
    </DefaultLayout>
  );
} 
