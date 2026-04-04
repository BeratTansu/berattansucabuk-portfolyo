import Hero from './sections/Hero/Hero'
import Navbar from './components/layout/Navbar'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default App