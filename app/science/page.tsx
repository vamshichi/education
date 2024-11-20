import Image from 'next/image'
import Link from 'next/link'
import subimage from '@/app/images/science1.jpg'
import bg from '@/app/images/science0.jpg'

export default function Science() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={bg}
          alt="Science Department"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Department of Science
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover the wonders of the natural world and push the boundaries of knowledge through our cutting-edge science programs.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Biology', 'Chemistry', 'Physics'].map((program) => (
            <div key={program} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={subimage}
                alt={program}
                width={400}
                height={300}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-black">{program}</h3>
                <p className="text-gray-600 mb-4">Explore the fascinating world of {program.toLowerCase()} through our comprehensive program.</p>
                <Link href={`/science/${program.toLowerCase()}`} className="text-blue-600 hover:underline font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Highlights */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Research Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-black">
              <h3 className="text-xl font-semibold mb-2">Breakthrough in Quantum Computing</h3>
              <p className="text-gray-600 mb-4">Our researchers have made significant progress in developing stable qubits, bringing us closer to practical quantum computers.</p>
              <Link href="/research/quantum-computing" className="text-blue-600 hover:underline font-semibold">
                Read More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-black">
              <h3 className="text-xl font-semibold mb-2">Advancements in Renewable Energy</h3>
              <p className="text-gray-600 mb-4">Our team has developed a new type of solar cell that dramatically increases energy conversion efficiency.</p>
              <Link href="/research/renewable-energy" className="text-blue-600 hover:underline font-semibold">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore the Frontiers of Science?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our community of researchers and innovators at ASC College.
          </p>
          <Link href="/apply" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}