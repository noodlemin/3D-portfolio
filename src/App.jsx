import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Showcase from './sections/ShowcaseSection'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Foorter'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App