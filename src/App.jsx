import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Bestsellers from './components/Bestsellers'
import FestiveBanner from './components/FestiveBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      {/* subtle mesh backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-70" style={{ background:
          'radial-gradient(800px_400px_at_10%_20%,rgba(255,215,128,.06),transparent),radial-gradient(600px_320px_at_80%_10%,rgba(147,197,253,.06),transparent),radial-gradient(900px_500px_at_50%_90%,rgba(236,72,153,.05),transparent)'
        }} />
      </div>

      <Navbar />
      <Hero />
      <Categories />
      <Bestsellers />
      <FestiveBanner />
      <Footer />
    </div>
  )
}

export default App
