import Image from 'next/image'
import Link from 'next/link'
import bg from '@/app/images/artesbg.jpg'
import avathar from '@/app/images/logo1.png'

export default function Arts() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={bg}
          alt="Arts Department"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Department of Arts
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore the world of creativity, culture, and human expression through our diverse arts programs.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Literature', 'Fine Arts', 'Performing Arts'].map((program) => (
            <div key={program} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={bg}
                alt={program}
                width={400}
                height={300}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-black">{program}</h3>
                <p className="text-gray-600 mb-4">Discover the beauty and complexity of {program.toLowerCase()} through our comprehensive program.</p>
                <Link href={`/arts/${program.toLowerCase().replace(' ', '-')}`} className="text-blue-600 hover:underline font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-3xl font-bold text-center mb-12">Faculty Spotlight</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <Image
                src={avathar}
                alt="Professor Jane Doe"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Professor Jane Doe</h3>
                <p className="text-gray-600">Award-winning author and expert in contemporary literature</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 ">
              <Image
                src={avathar}
                alt="Professor John Smith"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Professor John Smith</h3>
                <p className="text-gray-600">Renowned sculptor and installation artist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Artistic Journey?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our vibrant community of artists, writers, and performers at ASC College.
          </p>
          <Link href="/apply" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}