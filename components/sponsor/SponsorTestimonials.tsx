import Image from 'next/image'

export function SponsorTestimonials() {
  return (
    <section className="py-16">

      <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gray-900 dark:text-white">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <Image
                src="https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/images/cal_hacks_1.jpg"
                alt="Cal Hacks event"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                &quot;Our booth was swarmed with students interested in both full-time
                and internship opportunities... We ran out of nearly all the swag
                we brought with us ... even my stack of business cards... As a
                recruiter, this was a dream opportunity: getting to chat with
                hundreds of energetic, passionate students...&quot;
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-bold">
                — rideOS
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <Image
                src="https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/images/cal_hacks_2.jpg"
                alt="Cal Hacks event"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                &quot;Cal Hacks 6.0 blew me away... We were astounded by both the
                creativity and resolve demonstrated at Cal Hacks. We wish we could
                have given all of our integrations an award.&quot;
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-bold">
                — DocuSign
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 