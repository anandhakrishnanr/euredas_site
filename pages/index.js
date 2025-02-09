import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Head>
        <title>Business Analytics Startup</title>
        <meta name="description" content="Business Analytics Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Our Business Analytics Startup</h1>
      </header>

      <main className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">We help businesses grow with data insights</h2>
        <p className="mt-4 text-lg text-gray-600">Explore our services and analytics solutions</p>
        
        {/* Corrected Link without <a> tag */}
        <Link href="/services" className="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
          Our Services
        </Link>
      </main>

      <footer className="mt-auto py-4 text-center bg-gray-800 text-white">
        <p>© 2025 Your Business Analytics Startup</p>
      </footer>
    </div>
  )
}
