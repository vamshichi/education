import Image from 'next/image'
import Link from 'next/link'
import Main from "@/app/images/b8a356f8325aa0d7b4d6b8bd7678f52702b1e00d8fb450ca161e3f97167e01ef._SX1080_FMjpg_.jpg"
import Arts from "@/app/images/bachelor-of-arts-graduate-uni-sticker.jpg"
import Commerce from "@/app/images/commerce1.jpg"
import Science from '@/app/images/Logo-for-Science-e1543508229155.jpg'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src={Main}
          alt="College campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Empowering Minds, Shaping Futures
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover your potential at ASC College, where arts, science, and commerce converge to create a unique learning experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/apply" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Apply Now
            </Link>
            <Link href="/tour" className="inline-block bg-white/10 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
              Virtual Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Departments</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Arts Department */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={Arts}
              alt="Arts Department"
              width={400}
              height={300}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-black">Arts</h3>
              <p className="text-gray-600 mb-4">Unleash your creativity and explore the depths of human expression through our diverse arts programs.</p>
              <Link href="/arts" className="text-blue-600 hover:underline font-semibold">
                Explore Arts Programs →
              </Link>
            </div>
          </div>

          {/* Science Department */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={Science}
              alt="Science Department"
              width={400}
              height={300}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-black">Science</h3>
              <p className="text-gray-600 mb-4">Embark on a journey of discovery and innovation in our cutting-edge science programs.</p>
              <Link href="/science" className="text-blue-600 hover:underline font-semibold">
                Explore Science Programs →
              </Link>
            </div>
          </div>

          {/* Commerce Department */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={Commerce}
              alt="Commerce Department"
              width={400}
              height={300}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-black">Commerce</h3>
              <p className="text-gray-600 mb-4">Prepare for a successful career in the dynamic world of business and finance.</p>
              <Link href="/commerce" className="text-blue-600 hover:underline font-semibold">
                Explore Commerce Programs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Why Choose ASC College?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-black">Expert Faculty</h3>
              <p className="text-gray-600">Learn from industry professionals and experienced academics who are passionate about your success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-black">Modern Facilities</h3>
              <p className="text-gray-600">Access state-of-the-art labs, libraries, and learning resources designed to enhance your educational experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-black">Career Support</h3>
              <p className="text-gray-600">Benefit from our strong industry connections, internship opportunities, and comprehensive career services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-black">Open Day 2023</h3>
            <p className="text-gray-600 mb-4">August 15, 2023</p>
            <p className="mb-4 text-slate-950">Experience campus life, meet our faculty, and explore our programs firsthand at our annual Open Day event.</p>
            <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Register Now
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-black">Academic Excellence Awards</h3>
            <p className="text-gray-600 mb-4">September 1, 2023</p>
            <p className="mb-4 text-slate-950">Join us in celebrating the outstanding achievements of our students across all departments.</p>
            <a href="#" className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our diverse community of learners and unlock your potential at ASC College. Your future starts here.
          </p>
          <Link href="/apply" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}