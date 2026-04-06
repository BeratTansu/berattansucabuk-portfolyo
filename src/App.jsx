import Hero from './sections/Hero/Hero'
import Navbar from './components/layout/Navbar'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App