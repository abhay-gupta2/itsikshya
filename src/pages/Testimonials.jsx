import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Testimonials() {
    useEffect(() => {
        document.title = "Testimonials | IT Sikshya"
      }, []);
  return (
    <>
      <section className='w-full mx-auto bg-[#8D8D8D]'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Testimonials</span></h4>
        </div>
      </section>
    </>
  )
}

export default Testimonials
