'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface Story {
  publisher: string;
  date: string;
  name: string;
  snippet: string;
  author?: string;
  link: string;
}

const stories: Story[] = [
  {
    publisher: "San Francisco Chronicle",
    date: "Jun. 22, 2024",
    name: "‘AI for Good’: Developers seek to solve real-world problems at UC Berkeley hackathon",
    snippet: "“It wouldn’t be a Berkeley hackathon without llamas,” she joked...",
    link: "https://www.sfchronicle.com/bayarea/article/uc-berkeley-ai-hackathon-19522906.php"
  },
  {
    publisher: "UC Berkeley News",
    date: "Jun. 22, 2023",
    name: "UC Berkeley cultivates festive culture of ‘free thinkers’ at AI hackathon",
    snippet: "Computer hackers from around the world convened at Berkeley last weekend for what was considered the largest AI language learning model hackathon ever held....",
    link: "https://news.berkeley.edu/2023/06/22/uc-berkeley-cultivates-festive-culture-of-free-thinkers-at-ai-hackathon/"
  },
  {
    publisher: "New York Times",
    date: "Nov. 15, 2018",
    name: "‘I Don’t Really Want to Work for Facebook.’ So Say Some Computer Science Students.",
    snippet: "The event spanned a weekend, so teenage competitors dragged pillows around with them. The hosts handed out 2,000 burritos as students registered...",
    link: "https://www.nytimes.com/2018/11/15/technology/jobs-facebook-computer-science-students.html"
  },
];

export function InTheNews() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-balance">
            Hackathons @ Berkeley in the news.
          </h2>
          <p className="text-lg max-w-2xl md:max-w-lg text-gray-600 dark:text-gray-300">
            Interested in covering our events? Reach out to{' '}
            <a
              href="mailto:team@hackberkeley.org"
              className="underline decoration-white decoration-1 sm:decoration-2 underline-offset-2 hover:opacity-80 transition-opacity"
            >
              team@hackberkeley.org
            </a>.
          </p>
        </div>

        <div className="flex flex-col">
          {stories.map((story) => (
            <motion.div
              key={story.name}
              className="overflow-hidden shadow-sm h-full flex flex-col"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6 py-2 flex-grow flex flex-col">
                <h4 className='text-gray-700 dark:text-gray-300 text-xl mb-2'>
                  {story.publisher} on {story.date}
                </h4>
                <a href={story.link}>
                  <h3 className="text-2xl font-bold mb-2 underline text-gray-700 dark:text-gray-300">
                    {story.name} 
                  </h3>
                </a>
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow italic">
                  &quot;{story.snippet}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 