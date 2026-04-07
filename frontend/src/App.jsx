import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DailyMenu from './components/DailyMenu'
import MenuGrid from './components/MenuGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F0F9FF] text-[#0C4A6E] relative flex flex-col">
      <div className="fixed inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(45deg, #0369a1 25%, transparent 25%), 
                           linear-gradient(-45deg, #0369a1 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, #0369a1 75%), 
                           linear-gradient(-45deg, transparent 75%, #0369a1 75%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}>
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />

        <main className="flex-grow pt-24">
          <Hero />
          <DailyMenu />
          <MenuGrid />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App