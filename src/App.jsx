import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Necklaces from './pages/Necklaces'
import Bracelets from './pages/Bracelets'
import FAQ from './pages/FAQ'
import Custom from './pages/Custom'

function AnimatedRoutes(){
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Products/></PageWrapper>} />
          <Route path="/necklaces" element={<PageWrapper><Necklaces/></PageWrapper>} />
          <Route path="/bracelets" element={<PageWrapper><Bracelets/></PageWrapper>} />
          <Route path="/custom" element={<PageWrapper><Custom/></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ/></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About/></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

const PageWrapper = ({children}) => (
  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.45}}>
    {children}
  </motion.div>
)

export default function App(){
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main class