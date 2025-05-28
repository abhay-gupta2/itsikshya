import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Apply() {
  useEffect(() => {
        document.title = "IT Sikshya Terms of Service | Professional Marketplace"
      }, []);
  return (
    <>
      <section className='w-full mx-auto bg-[#8D8D8D] mb-6'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Apply</span></h4>
        </div>
      </section>
    </>
  )
}

export default Apply
