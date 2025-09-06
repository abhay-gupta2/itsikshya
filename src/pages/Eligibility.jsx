import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Eligibility() {
  useEffect(() => {
    document.title = "Eligibility | IT Sikshya"
  }, []);
  return (
    <>
      <section className='w-full mx-auto bg-[#8D8D8D]'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Eligibility</span></h4>
        </div>
      </section>

      <section className='bg-[#F2F7FA] max-w-[1400px] mb-6 mt-12 mx-auto'>
        <div className="container mx-auto py-8">
          <div className='lg:hidden block'>
            <p className='text-[24px] font-medium text-[#281743] lg:text-end'>Online IT Training Designed for Future Professionals</p>
          </div>
          <div className='grid gap-5 lg:grid-cols-2 my-4'>
            <div className='rounded overflow-hidden'>
              <img className='w-full h-full' src="/assets/eligibility/eligibility_1.jpg" alt="eligibility_1" />
            </div>
            <div className='text-[16px] text-wrap text-justify  flex flex-col gap-2'>
              <div>
                <p className='text-[24px] font-medium text-[#281743] lg:block hidden'>Online IT Training Designed for Future Professionals</p>
              </div>
              <p>At IT Sikshya, you have the flexibility to participate in our training program in a way that suits you—fully online or through a hybrid model combining virtual and occasional in-person sessions.</p>
              <p>Our program is designed to fit your schedule, allowing you to learn remotely with access to recorded sessions and live project collaborations.</p>
              <p>With extensive experience in online education, IT Sikshya provides a robust digital platform where you can access all training resources, including project materials, mentorship support, and communication tools to connect with professionals and peers.</p>
              {/* <p className='text-[#418092] underline'>Learn more about the IT Sikshya virtual training journey</p> */}
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto my-6'>
        <div className="container mx-auto py-4">
          <p className='text-center text-[18px]'>IT Sikshya Leadership is a student-focused initiative dedicated to empowering aspiring IT professionals worldwide. We are committed to building technical skills, fostering professional growth, and supporting inclusive community engagement within the IT sector.</p>
          <div className='grid lg:grid-cols-2 gap-6 my-6'>
            <div className='mt-[20px]'>
              <p className='text-[26px] font-medium text-wrap'>Candidate Support and Engagement</p>
              <div>
                <div className='flex gap-6 items-center py-2 border-b'>
                  <p className='text-[#979196] text-[18px] text-nowrap'>Reliable Internet</p>
                  <div className='h-[20px] w-full bg-[#979196]'></div>
                </div>

                <div className='flex gap-6 items-center py-2 border-b'>
                  <p className='text-[#979196] text-[18px] text-nowrap'>Good understanding in English and Nepali</p>
                  <div className='h-[20px] w-full bg-[#979196]'></div>
                </div>

                <div className='flex gap-6 items-center py-2 border-b'>
                  <p className='text-[#979196] text-[18px] text-nowrap'>Noise free Enviroment</p>
                  <div className='h-[20px] w-full bg-[#979196]'></div>
                </div>

                <div className='flex gap-6 items-center py-2 border-b'>
                  <p className='text-[#979196] text-[18px] text-nowrap'>Eager to Learn and Lead</p>
                  <div className='h-[20px] w-full bg-[#979196]'></div>
                </div>
              </div>
            </div>

            <div className='rounded overflow-hidden'>
              <img className='w-full' src="/assets/eligibility/eligibility_2.jpg" alt="eligibility_2" />
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-white my-6'>
        <div className="container mx-auto px-2 py-4">
          <h4 className='text-[#605878] text-[26px]'>Begin your IT career with confidence and expert guidance.</h4>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-6 gap-y-8'>
            <div className='border border-[#333]'>
              <img className='w-full' src="/assets/eligibility/eligibility_3.png" alt="eligibility_3" />
              <div className='px-4 mt-1 mb-3'>
                <p className='text-[#11294D] text-[18px]'>Your Career: How to Become a Skilled IT Professional</p>
                <p className='text-[#5A5965] text-[14px] mt-1 mb-2 text-justify'>If you’re finishing your training with IT Sikshya, now’s the time to think about how to apply your skills and real-world experience to move your career forward. Here, an IT industry expert shares practical advice on becoming a successful IT professional.</p>
                <br /><br />
                <Link className='text-[#333] rounded-[14px] font-bold bg-[#ccc] py-1 px-3'>Read More</Link>
              </div>
            </div>

            <div className='border border-[#333]'>
              <img className='w-full' src="/assets/eligibility/eligibility_4.png" alt="eligibility_4" />
              <div className='px-4 mt-1 mb-3'>
                <p className='text-[#11294D] text-[18px]'>How to Choose Between Different IT Qualifications and Certifications</p>
                <p className='text-[#5A5965] text-[14px] my-1 text-justify'>Certificate, Diploma, Bachelor, Master... If you’re interested in IT but unsure about the various qualifications and what they mean for your career, read on to learn more about your options and how to choose the right path.</p>
                <br /><br />
                <Link className='text-[#333] rounded-[14px] font-bold bg-[#ccc] py-1 px-3'>Read More</Link>
              </div>
            </div>

            <div className='border border-[#333]'>
              <img className='w-full' src="/assets/eligibility/eligibility_5.png" alt="eligibility_5" />
              <div className='px-4 mt-1 mb-3'>
                <p className='text-[#11294D] text-[18px]'>How to Build the Confidence to Start Your IT Journey</p>
                <p className='text-[#5A5965] text-[14px] my-1 text-justify'>Starting something new—whether it’s an training, certification, or a career shift into IT—can feel overwhelming. Here are five practical tips to help you gain the confidence to take that first step and succeed in your journey.</p>
                <br /><br />
                <Link className='text-[#333] rounded-[14px] font-bold bg-[#ccc] py-1 px-3'>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-white'>
        <div className="container mx-auto px-2 py-4">
          <div className='grid gap-8 lg:grid-cols-2'>
            <div className='rounded overflow-hidden'>
              <img className='w-full' src="/assets/eligibility/eligibility_6.jpg" alt="eligibility_6" />
            </div>
            <div className='flex flex-col gap-6 px-10 self-center'>
              <h2 className='text-[26px] font-bold text-black'>Learn from anywhere</h2>
              <p className='text-[16px]'>At IT Sikshya, your location is never a barrier. Our hybrid training program allows you to learn from anywhere—whether you're at home, on campus, or traveling.</p>
              <p className='text-[16px]'>Join a global community of learners, collaborate on real-world projects, and build lasting connections—all while enjoying the flexibility to balance your learning with your lifestyle.</p>
              <Link to={'/apply'} className='self-start apply'>Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Eligibility
