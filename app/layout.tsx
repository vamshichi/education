import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ASC College - Arts, Science, and Commerce',
  description: 'Empowering minds through Arts, Science, and Commerce education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer className="bg-gray-100 mt-16 text-black">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="hover:text-blue-600 transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs" className="hover:text-blue-600 transition-colors">
                        Programs
                      </Link>
                    </li>
                    <li>
                      <Link href="/admissions" className="hover:text-blue-600 transition-colors">
                        Admissions
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-blue-600 transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Departments</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/arts" className="hover:text-blue-600 transition-colors">
                        Arts
                      </Link>
                    </li>
                    <li>
                      <Link href="/science" className="hover:text-blue-600 transition-colors">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link href="/commerce" className="hover:text-blue-600 transition-colors">
                        Commerce
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/library" className="hover:text-blue-600 transition-colors">
                        Library
                      </Link>
                    </li>
                    <li>
                      <Link href="/career" className="hover:text-blue-600 transition-colors">
                        Career Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/events" className="hover:text-blue-600 transition-colors">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <ul className="space-y- text-black">
                    <li>
                      <a href="#" className="hover:text-blue-600 transition-colors">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600 transition-colors">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600 transition-colors">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600 transition-colors">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 text-center text-sm text-gray-600">
                © 2023 ASC College. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
