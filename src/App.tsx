import { useEffect, useRef, useState } from 'react'
import { Routes, Route } from 'react-router'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Philosophy from './sections/Philosophy'
import Works from './sections/Works'
import Capabilities from './sections/Capabilities'
import Spatial from './sections/Spatial'
import Footer from './sections/Footer'
import Preloader from './sections/Preloader'
import ProjectDetail from './pages/ProjectDetail'
import Login from './pages/Login'
import Education from './sections/Education'
import Teaching from './sections/Teaching'
import Honors from './sections/Honors'
import Collaborations from './sections/Collaborations'
import Publications from './sections/Publications'

function App() {
  const scrollRef = useRef({ y: 0, speed: 0 })
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null)

  useEffect(() => {
    let rafId: number
    let prevY = window.scrollY

    const tick = () => {
      const y = window.scrollY
      const delta = y - prevY
      scrollRef.current.y = y
      scrollRef.current.speed = delta
      prevY = y
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafId)
  }, [])

  const handleSelectProject = (id: string) => setCurrentProjectId(id)
  const handleBack = () => {
    setCurrentProjectId(null)
    setTimeout(() => {
      document.querySelector('#research')?.scrollIntoView({ behavior: 'auto' })
    }, 0)
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={
        <>
          <Preloader />
          <Header scrollRef={scrollRef} forceLight={currentProjectId !== null} />
          {currentProjectId ? (
            <ProjectDetail projectId={currentProjectId} onBack={handleBack} />
          ) : (
            <main>
              <Spatial />
              
              <Education />
              <Publications />
              <Works scrollRef={scrollRef} onSelectProject={handleSelectProject} />
              <Capabilities />
              <Teaching />
              <Honors />
          <Collaborations />
              <Hero />
            </main>
          )}
          
          <Footer />
        </>
      } />
    </Routes>
  )
}

export default App
