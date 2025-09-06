import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Glance from '../pages/Glance'
import Certificates from '../pages/Certificates'
import Contact from '../pages/Contact'
import Tos from '../pages/Tos'
import FAQs from '../pages/FAQs'
import Policy from '../pages/Policy'
import Disclaimer from '../pages/Disclaimer'
import Apply from '../pages/Apply'
import Eligibility from '../pages/Eligibility'
import ScrollToTop from './ScrollToTop'
import About from '../pages/About'
import Courses from '../pages/Courses'
import Team from '../pages/Team'
import Testimonials from '../pages/Testimonials'
function Navbar() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
        <Route path='/eligibility' element={<Eligibility/>}/>
        <Route path='/glance' element={<Glance/>}/>
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/certificates' element={<Certificates/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/tos' element={<Tos/>}/>
        <Route path='/apply' element={<Apply/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        <Route path='/courses' element={<Courses/>} />
        <Route path='/team' element={<Team/>} />

    </Routes>
    </>
  )
}

export default Navbar
