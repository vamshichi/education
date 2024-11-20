import Image from 'next/image'
import Link from 'next/link'
import bg from '@/app/images/b8a356f8325aa0d7b4d6b8bd7678f52702b1e00d8fb450ca161e3f97167e01ef._SX1080_FMjpg_.jpg'
import student from '@/app/images/student.jpg'
import Avathar from '@/app/images/logo1.png'

export default function About() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={bg}
          alt="ASC College Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About ASC College
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Empowering minds and shaping futures since 1950.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At ASC College, our mission is to provide a transformative educational experience that empowers students to become lifelong learners, critical thinkers, and responsible global citizens.
            </p>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision ASC College as a leading institution of higher education, recognized for its academic excellence, innovative research, and commitment to societal impact.
            </p>
          </div>
          <div>
            <Image
              src={student}
              alt="ASC College Students"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-gray-100 text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
          <div className="space-y-8">
            {[
              { year: 1950, event: "ASC College founded" },
              { year: 1975, event: "Expansion of Science department" },
              { year: 2000, event: "Introduction of Commerce programs" },
              { year: 2020, event: "Launch of state-of-the-art research facilities" }
            ].map((item) => (
              <div key={item.year} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-24 text-right font-bold">{item.year}</div>
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="flex-grow">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Dr. Jane Smith', 'Prof. John Doe', 'Dr. Emily Brown'].map((leader) => (
            <div key={leader} className="text-center">
              <Image
                src={Avathar}
                alt={leader}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{leader}</h3>
              <p className="text-gray-600">Position at ASC College</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join the ASC College community and help shape the future of education and innovation.
          </p>
          <Link href="/apply" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}