import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Testimonials() {
  useEffect(() => {
      document.title = "IT Sikshya Testimonials | Professional Marketplace"
    }, []);
  return (
    <>
    <section className='w-full mx-auto bg-[#8D8D8D]'>
            <div className="container mx-auto py-[40px]">
              <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>About</span></h4>
            </div>
          </section>
      <section className='mb-6 max-w-[1400px] mx-auto bg-[#9CD4F5] mt-12'>
        <div className='container mx-auto py-4'>
          <div className='flex justify-center gap-10 items-center flex-wrap'>
            <div className='flex gap-3 items-center'>
              <p className='text-[18px]'>You are viewing this website as a</p>
              <div className='h-[20px] w-[30px] bg-[#211545]'></div>
              <p className='text-[18px]'>Domestic Student</p>
            </div>
            <div className='underline text-[16px] font-bold'>Switch to International</div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-white my-6'>
        <div className="container mx-auto py-2">
          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-14 gap-y-6'>
            <div className='rounded overflow-hidden'>
              <img className='w-full h-full object-cover' src="/assets/testimonials/about_1.jpg" alt="" />
            </div>
            <div className='px-6 flex flex-col gap-4'>
              <h3 className='text-[26px] font-bold'>Career Support Through Real Experience</h3>
              <p className='text-[#4b4b4b] text-[16px]'>IT Sikshya’s training Program is designed to help you launch a successful career in the IT industry. Our alumni share how hands-on projects, mentorship, and structured guidance helped them build confidence and direction.</p>
              <div className='flex flex-col gap-3 text-[16px]'>
                <div className='flex items-start gap-3'>
                  <div className='p-2 mt-1 rounded-[100%] bg-[#36D0FF]'></div>
                  <p>Mentorship & Career Guidance - One-on-one support from industry professionals helped our interns identify their strengths, set goals, and stay on track toward a rewarding IT career.</p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='p-2 mt-1 rounded-[100%] bg-[#36D0FF]'></div>
                  <p>Professional Growth : Through real-time project exposure, technical skill-building, and soft-skill training, interns gained practical experience that directly translated into job opportunities and freelance work.</p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='p-2 mt-1 rounded-[100%] bg-[#36D0FF]'></div>
                  <p>Success Stories : Explore our intern testimonials to see how IT Sikshya helped them grow from learners to confident professionals, ready to take on the global tech world.</p>
                </div>
              </div>
              <Link className='text-center w-[150px] rounded-[10px] py-[10px] bg-[#FCDB2E]'>Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-[#F0F0F0] my-6'>
        <div className="container mx-auto">
          <div className='grid lg:grid-cols-2 gap-6 py-4'>
            <div className='mt-12'>
              <h2 className='text-[26px] font-bold pe-6 text-black'>A Global Learning Experience, Wherever You Are</h2>
              <p className='text-[18px] my-6 pe-6'>At IT Sikshya, learning isn’t limited by location. Our virtual platform connects you to real-world IT projects, expert mentors, and a diverse community of learners from around the world.
                Experience hands-on training and professional development tailored to your goals—no matter where you're based.</p>
            </div>
            <div className='rounded-[10px] overflow-hidden'>
              <img className='w-full' src="/assets/testimonials/about_2.jpg" alt="About_2" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className='max-w-[1400px] mx-auto bg-white my-6'>
        <div className="container mx-auto py-4">
          <div className='flex flex-col lg:flex-row md:flex-row gap-6'>
            <div className='lg:w-[50%]'>
              <img className='h-[365px] w-full' src="/assets/testimonials/testimonials_3.png" alt="testimonials_3" />
              <p className='text-[#B0B0B3] my-2 text-[18px] font-semibold'>TRAINING STORIES</p>
              <p className='text-[24px] font-medium'>Intern Video Series: Meet Aarav Joshi</p>
              <p className='text-[16px] font-medium text-[#A5A7A9] text-justify'>This month, we meet Aarav Joshi, an IT Sikshya intern who worked on frontend development projects during his 100-day training.</p>
              <Link className='underline text-[#958864] text-[16px] font-medium mb-6'>READ MORE</Link>
            </div>

            <div className='lg:w-[100%]'>
              <img className='h-[365px] w-full' src="/assets/testimonials/testimonials_4.png" alt="testimonials_4" />
              <p className='text-[#B0B0B3] my-2 text-[18px] font-semibold'>UPDATES</p>
              <p className='text-[24px] font-medium'>New Specialized Tracks Launching Soon</p>
              <p className='text-[16px] font-medium text-[#A5A7A9]'>Our upcoming short-term tracks in Web Development, Data Science, and DevOps are launching soon. Seats are limited, and spots fill quickly!</p>
              <Link className='underline text-[#958864] text-[16px] font-medium'>READ MORE</Link>
            </div>

            <div className='lg:w-[50%]'>
              <img className='h-[365px] w-full' src="/assets/testimonials/testimonials_5.png" alt="testimonials_5" />
              <p className='text-[#B0B0B3] my-2 text-[18px] font-semibold'>INTERN STORIES</p>
              <p className='text-[24px] font-medium'>Intern Video Series: Meet Sneha Rai</p>
              <p className='text-[16px] font-medium text-[#A5A7A9]'>Sneha Rai shares her journey at IT Sikshya, where she gained hands-on experience in backend development and built a strong portfolio.</p>
              <Link className='underline text-[#958864] text-[16px] font-medium'>READ MORE</Link>
            </div>
          </div>
        </div>
      </section> */}

      <section className='max-w-[1400px] mx-auto bg-white my-6'>
        <div className="container mx-auto bg-[#E9E9E9] pt-3">
          <h3 className='font-[600] text-[26px] my-6 underline'>IT SIKSHYA TRAINING ADMISSIONS</h3>
          <div className='grid lg:grid-cols-3 gap-4 gap-y-6 md:grid-cols-3 sm:grid-cols-2'>
            <div className='w-full'>
              <img className='w-full' src="/assets/testimonials/testimonials_6.png" alt="testimonials_6" />
              <p className='py-5 bg-white px-6 text-[20px]'>How to Apply?</p>
              <div className='flex gap-2 my-2'>
                <p className='text-[#C1CED6] bg-white text-[18px] w-full px-3'>Explore our simple online application process and take the first step toward your 100-day training in IT.</p>
                <img className='w-[28px] bg-white' src="/assets/icons/share.svg" alt="share" />
              </div>
            </div>

            <div className='w-full'>
              <img className='w-full' src="/assets/testimonials/testimonials_7.png" alt="testimonials_7" />
              <p className='py-5 bg-white px-6 text-[20px]'>Find program  contacts</p>
              <div className='flex gap-2 my-2'>
                <p className='text-[#C1CED6] bg-white text-[18px] w-full px-3'>GRADUATE COLLEGE</p>
                <img className='w-[28px] bg-white' src="/assets/icons/share.svg" alt="share" />
              </div>
            </div>

            <div className='w-full'>
              <img className='w-full' src="/assets/testimonials/testimonials_8.png" alt="testimonials_8" />
              <p className='py-5 bg-white px-6 text-[20px]'>Funding Opportunities</p>
              <div className='flex gap-2 my-2'>
                <p className='text-[#C1CED6] bg-white text-[18px] w-full px-3'>GRADUATE COLLEGE</p>
                <img className='w-[28px] bg-white' src="/assets/icons/share.svg" alt="share" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
