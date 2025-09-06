import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Disclaimer() {
  useEffect(() => {
      document.title = "Disclaimer | IT Sikshya"
    }, []);
  return (
    <>
      <section className='w-full mx-auto bg-[#8D8D8D]'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Disclaimer</span></h4>
        </div>
      </section>

      <section className='my-6 max-w-[1400px] mx-auto'>
        <div className="container mx-auto mb-4 text-justify">
          <p>The information provided on the IT Sikshya website is intended for general informational purposes only. While we make every effort to ensure that the content is accurate, current, and reliable, IT Sikshya makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website or related graphics for any purpose.</p>
          <br />
          <p>All content, including but not limited to course descriptions, schedules, policies, fees, and contact details, is subject to change without prior notice. Although we strive to update the website regularly, there may be instances where some information becomes outdated or contains errors.</p>
          <br />
          <p>Any reliance you place on the information presented on this website is strictly at your own risk. IT Sikshya will not be liable for any loss or damage, including indirect or consequential loss, arising from the use of—or reliance on—any information on this website.</p>
          <br />
          <p>It is your responsibility to verify any information before making decisions or taking actions based on the content of this website. For official updates, clarifications, or policy-related inquiries, we encourage you to contact us directly.</p>
        </div>
      </section>
    </>
  )
}

export default Disclaimer
