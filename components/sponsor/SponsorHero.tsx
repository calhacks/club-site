'use client'

export function SponsorHero() {
  const scrollToContent = () => {
    const contentElement = document.getElementById('sponsor-content')
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8 md:pt-24 lg:pt-32 md:pb-12 relative z-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 md:mb-12 text-gray-900 dark:text-white text-center sm:text-left">
          Make Cal Hacks your event.
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl flex-1">
            <h4 className="text-lg sm:text-xl font-bold text-primary mb-2">Establish your brand!</h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Cal Hacks is the perfect way to establish your brand and build and
              grow awareness for your company among thousands of talented
              engineers.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl flex-1">
            <h4 className="text-lg sm:text-xl font-bold text-primary mb-2">Connect with top candidates!</h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              We can provide you everything you need to find top talent in the
              tech and hacker community.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl flex-1">
            <h4 className="text-lg sm:text-xl font-bold text-primary mb-2">Show off your tech!</h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Cal Hacks is the largest collegiate hackathon, the best place to
              display your tech and see hackers use your APIs in creative and
              innovative ways.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-6 flex flex-col gap-2 text-center sm:text-left">
          <h4 className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-lg sm:text-xl font-bold text-primary items-center sm:items-start">
            <span>Our next event is in</span>
            <div className="text-blue-600 dark:text-blue-400 hover:underline">
              October 2025!
            </div>
          </h4>

          <h4 className="text-lg sm:text-xl font-bold text-primary">
            Ready to jump onboard? Email{' '}
            <a
              href="mailto:sponsorship@hackberkeley.org"
              className="text-blue-600 dark:text-blue-400 hover:underline break-all sm:break-normal"
            >
              sponsorship@hackberkeley.org
            </a>
          </h4>
        </div>

        
      </div>
    </div>
  )
} 