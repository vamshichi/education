import Image from 'next/image'
import Link from 'next/link'
import bg from '@/app/images/combg.jpg'
import avathar from '@/app/images/logo1.png'

export default function Commerce() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={bg}
          alt="Commerce Department"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Department of Commerce
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Prepare for a successful career in the dynamic world of business and finance through our comprehensive commerce programs.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Accounting', 'Finance', 'Marketing'].map((program) => (
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
                <p className="text-gray-600 mb-4">Master the intricacies of {program.toLowerCase()} through our industry-aligned program.</p>
                <Link href={`/commerce/${program.toLowerCase()}`} className="text-blue-600 hover:underline font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Industry Partnerships</h2>
          <div className="grid md:grid-cols-4 gap-8 text-black">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company) => (
              <div key={company} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src={avathar}
                  alt={company}
                  width={200}
                  height={80}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Business Career?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our network of future business leaders and entrepreneurs at ASC College.
          </p>
          <Link href="/apply" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}