export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  photos: Photo[];
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const events: Event[] = [
  {
    id: "calhacks-11",
    name: "Cal Hacks 11.0",
    description: "Our flagship hackathon hosted in San Francisco",
    date: "October 2024",
    photos: Array.from({ length: 13 }, (_, i) => ({
      id: `calhacks-11-${i + 1}`,
      src: `/images/events/calhacks11-${i + 1}.jpg`,
      alt: `Cal Hacks 11.0 - Photo ${i + 1}`,
      width: 1200,
      height: 800
    }))
  },
  {
    id: "calhacks-10",
    name: "Cal Hacks 10.0",
    description: "Our flagship hackathon hosted in San Francisco",
    date: "October 2023",
    photos: Array.from({ length: 9 }, (_, i) => ({
      id: `calhacks-10-${i + 1}`,
      src: `/images/events/calhacks10-${i + 1}.jpg`,
      alt: `Cal Hacks 10.0 - Photo ${i + 1}`,
      width: 1200,
      height: 800
    }))
  },
  {
    id: "calhacks-ai-2",
    name: "AI Hackathon 2.0",
    description: "Our AI hackathon hosted in Berkeley",
    date: "June 22, 2023",
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: `calhacks-ai-2-${i + 1}`,
      src: `/images/events/calhacksai2-${i + 1}.jpg`,
      alt: `Cal Hacks AI 2.0 - Photo ${i + 1}`,
      width: 1200,
      height: 800
    }))
  },
  {
    id: "calhacks-9",
    name: "Cal Hacks 9.0",
    description: "Our flagship hackathon hosted in San Francisco",
    date: "October 2022",
    photos: Array.from({ length: 7 }, (_, i) => ({
      id: `calhacks-9-${i + 1}`,
      src: `/images/events/calhacks9-${i + 1}.jpg`,
      alt: `Cal Hacks 9.0 - Photo ${i + 1}`,
      width: 1200,
      height: 800
    }))
  },


]; 