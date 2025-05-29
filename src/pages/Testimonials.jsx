import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function About() {
  useEffect(() => {
    document.title = "IT Sikshya About | Professional Marketplace"
  }, []);
  return (
    <>
      <section className='w-full mx-auto bg-[#8D8D8D]'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Testimonials</span></h4>
        </div>
      </section>
      <section className='w-full mx-auto bg-white mb-6 mt-12'>
        <div className=' bg-[#F4F4F4] my-6 container mx-auto'>
          <div className='grid gap-x-14 lg:grid-cols-2'>
            <div className='w-full mt-[42px]'>
              <h2 className='text-[36px] font-semibold text-black'>Shaping Your Career</h2>
              <div className='bg-[#E3E5E4] p-1 mt-[79px]'>
                <div className='h-[385px] mb-[28px]'>
                  <img className='w-full h-full object-cover' src="/assets/about/about_1.png" alt="job listing" />
                </div>
                <h4 className='text-[28px] ms-[20px] h-[48px]'>Cources Recover</h4>
                <p className='text-[18px] ms-[20px] mb-[20px] mt-1'>Access opportunities that enable IT Sikshya interns and graduates to apply skills, gain experience, and advance in their IT careers.</p>
              </div>
            </div>
            <div className='w-full mt-[42px] p-1'>
              <p className='font-semibold text-[16px]'>IT Sikshya, established to provide practical IT training, connects students and graduates with real-world projects and mentorship, preparing them for successful careers in the IT industry.</p>

              <div className='flex mt-[20px] items-center gap-4 my-1'>
                <img className='p-2 bg-[#646F77] rounded-full w-[30px] invert' src="/assets/icons/right-arrow.svg" alt="right-arrow" />
                <p className='text-[18px] font-semibold'>Visit Talent Acquisition and Outreach</p>
              </div>
              <div className='mt-10'>
                <div className='bg-[#E3E5E4] p-1 mt-[25px]'>
                  <div className='mb-[28px] h-[385px]'>
                    <img className='w-full h-full object-cover' src="/assets/about/about_2.png" alt="job listing" />
                  </div>
                  <h4 className='text-[28px] ms-[20px] h-[48px]'>Why IT Sikshya?</h4>
                  <p className='text-[18px] ms-[20px] mt-1 mb-[10px]'>At IT Sikshya, you join a supportive learning community that empowers future IT professionals through hands-on experience, real projects, and essential skill-building for a successful career.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-white mb-6 mt-12 mx-auto'>
        <div className='bg-[#F4F4F4] container mx-auto py-8'>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 flex-wrap gap-8'>
            <div>
              <img className='w-full rounded' src="/assets/about/about_3.png" alt="about_3" />
            </div>
            <div className='flex flex-col gap-1'>
              <h4 className='text-[18px] text-[#000] font-semibold'>Build Your Own Career</h4> <br />
              <h2 className='text-[28px] text-[#000] mt-[-10px]'>Rising Talent</h2>
              <p className='text-[18px] text-[#4C4B4B]'>An IT Sikshya intern gaining hands-on experience and training in React.js, Next.js, Flutter, React Native, and UI/UX design.</p>
              <div className='flex mt-[22px] items-center gap-4 mb-0'>
                <img className='p-2 bg-[#646F77] rounded-full w-[30px] invert' src="/assets/icons/right-arrow.svg" alt="right-arrow" />
                <p className='text-[18px]'>Meet more emerging professionals from the IT Sikshya community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-white my-[43px] mx-auto'>
        <div className='container mx-auto bg-[#F4F4F4] py-4'>
          <h2 className='text-[24px] font-semibold text-black'>Experience IT Beyond the Classroom</h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-4'>
            <div className='relative'>
              <img className='w-full' src="/assets/about/about_4.png" alt="about_4" />
              <div className='w-full h-full z-0 bg-[#33333371] absolute top-0 left-0 right-0'></div>
              <div className='absolute bottom-6 z-10'>
                <h3 className='text-[26px] text-white font-semibold px-4 text-wrap h-auto inline-block '>Hands-On Projects</h3>
                <p className='text-[18px] text-white px-4'>Engage in real-world IT projects that challenge your skills and ignite creativity beyond textbooks.</p>
              </div>
            </div>

            <div className='relative'>
              <img className='w-full' src="/assets/about/about_5.png" alt="about_5" />
              <div className='absolute bottom-6 z-10'>
                <h3 className='text-[26px] text-white font-semibold px-4 text-wrap h-auto inline-block '>Industry Expert Sessions</h3>
                <p className='text-[18px] text-white px-4'>Learn from IT professionals and gain insights into the latest trends and career opportunities.</p>
              </div>
            </div>

            <div className='relative'>
              <img className='w-full' src="/assets/about/about_6.png" alt="about_6" />
              <div className='w-full h-full z-0 bg-[#333333a2] absolute top-0'></div>
              <div className='absolute bottom-6 z-10'>
                <h3 className='text-[26px] text-white font-semibold px-4 text-wrap h-auto inline-block '>Collaborative Learning</h3>
                <p className='text-[18px] text-white px-4'>Work with peers on innovative tech solutions and build teamwork skills that prepare you for the future.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-white mx-auto'>
        <div className='container mx-auto mb-6'>
          <div className='flex flex-wrap gap-6 gap-y-10'>
            <div className='lg:w-[55%]'>
              <h2 className='text-[24px] text-[#5B7FA3] font-bold'>Upcoming Sessions</h2>
              <div className='flex flex-col gap-4 pt-[36px]'>

                <div className='flex justify-between w-full items-center'>
                  <div className='flex gap-2 items-center'>
                    <div className='px-2 text-center text-[20px]'>
                      <p className='text-[#5B7FA3] leading-none'>MAR</p>
                      <p className='text-[#2B455F] font-bold leading-none'>28</p>
                    </div>
                    <div className='border-s-2 ps-5 border-black text-[20px]'>
                      <p>Fri, Feb 28 - Sun, Mar 30, All Day</p>
                      <p className='text-[#5B7FA3] font-bold'>Ramadan (Islam)</p>
                    </div>
                  </div>
                  <img className='lg:ms-14 w-[40px]' src="/assets/icons/right-direction.svg" alt="right-arrow" />
                </div>

                <hr />

                <div className='flex justify-between w-full items-center'>
                  <div className='flex gap-2 items-center'>
                    <div className='px-2 text-center text-[20px]'>
                      <p className='text-[#5B7FA3] leading-none'>MAR</p>
                      <p className='text-[#2B455F] font-bold leading-none'>28</p>
                    </div>
                    <div className='border-s-2 ps-5 border-black text-[20px]'>
                      <p>Fri, Feb 28 - Sun, Mar 30, All Day</p>
                      <p className='text-[#5B7FA3] font-bold'>Ramadan (Islam)</p>
                    </div>
                  </div>
                  <img className='lg:ms-14 w-[40px]' src="/assets/icons/right-direction.svg" alt="right-arrow" />
                </div>

                <hr />

                <div className='flex justify-between w-full items-center'>
                  <div className='flex gap-2 items-center'>
                    <div className='px-2 text-center text-[20px]'>
                      <p className='text-[#5B7FA3] leading-none'>MAR</p>
                      <p className='text-[#2B455F] font-bold leading-none'>28</p>
                    </div>
                    <div className='border-s-2 ps-5 border-black text-[20px]'>
                      <p>Fri, Feb 28 - Sun, Mar 30, All Day</p>
                      <p className='text-[#5B7FA3] font-bold'>Ramadan (Islam)</p>
                    </div>
                  </div>
                  <img className='lg:ms-14 w-[40px]' src="/assets/icons/right-direction.svg" alt="right-arrow" />
                </div>

                <hr />

                <div className='flex justify-between w-full items-center'>
                  <div className='flex gap-2 items-center'>
                    <div className='px-2 text-center text-[20px]'>
                      <p className='text-[#5B7FA3] leading-none'>MAR</p>
                      <p className='text-[#2B455F] font-bold leading-none'>28</p>
                    </div>
                    <div className='border-s-2 ps-5 border-black text-[20px]'>
                      <p>Fri, Feb 28 - Sun, Mar 30, All Day</p>
                      <p className='text-[#5B7FA3] font-bold'>Ramadan (Islam)</p>
                    </div>
                  </div>
                  <img className='lg:ms-14 w-[40px]' src="/assets/icons/right-direction.svg" alt="right-arrow" />
                </div>

              </div>
            </div>

            <div className='lg:w-[40%]'>
              <h2 className='text-[24px] text-[#5B7FA3] font-bold'>Latest Update</h2>
              <div className='mt-[36px] flex flex-col gap-4'>
                <div className='border w-full flex gap-4'>
                  <div className='w-[50%]'>
                    <img className='h-full' src="/assets/about/about_3.png" alt="" />
                  </div>
                  <div className='my-4'>
                    <h4 className='text-blue-500 text-[18px]'>Title</h4>
                    <p className='text-[#333333be] text-[14px]'>Author</p>
                    <p className='text-[#333]'>Date</p>
                    <p></p>
                  </div>
                </div>

                <div className='border w-full flex gap-4'>
                  <div className='w-[50%]'>
                    <img className='h-full' src="/assets/about/about_3.png" alt="" />
                  </div>
                  <div className='my-4'>
                    <h4 className='text-blue-500 text-[18px]'>Title</h4>
                    <p className='text-[#333333be] text-[14px]'>Author</p>
                    <p className='text-[#333]'>Date</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
