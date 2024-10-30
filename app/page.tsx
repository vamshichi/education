'use client'

import Image from 'next/image'
import RegistrationForm from "./components/ui/RegistrationForm"
import bgImage from "@/app/images/Cover1.jpg"
import ExhibitionDetails from "@/app/components/ExhibitionDetails"
import logo from "@/app/images/white logo.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100  overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10" />
      </div>

      <header className="relative p-4 sm:p-6 lg:p-8 flex flex-col items-center lg:items-start">
        <Image
          src={logo}
          alt="Logo"
          width={900}
          height={50}
          className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto"
          priority
        />
        <p className="text-yellow-500 text-xl sm:text-2xl md:text-3xl font-semibold pb-4">
          7th and 8th of December
        </p>
        <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
          Dubai
        </p>
        <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
          CROWNE PLAZA
        </p>
        <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
          Salah AI Din St - Deira
        </p>
      </header>

      {/* Main Content */}
      <main className="relative flex-grow flex flex-col lg:flex-row items-start justify-center lg:justify-end  sm:px-6 lg:px-16 py-8 lg:py-12">
        {/* Registration Form */}
        <div className="w-full max-w-md lg:w-1/2 xl:w-2/5 mt-4 lg:mt-0"> {/* Adjusted mt-4 */}
          <div className="relative bg-opacity-95 p-6  sm:p-8 rounded-lg shadow-2xl pb-56">
            <RegistrationForm />
          </div>
        </div>
      </main>

      {/* Exhibition Details */}
      <footer className="relative z-10 mt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <ExhibitionDetails />
      </footer>
    </div>
  )
}
