import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Lab from './components/Lab'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <main style={{ background: '#060d17', minHeight: '100vh', color: '#c9d4e0' }}>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Lab />
      <Contact />
    </main>
  )
}

export default App
