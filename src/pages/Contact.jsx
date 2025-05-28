import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Contact() {

  const coordinator = [
    {
      name: "Aasha",
      field: "Next Js",
      image: "/assets/contact/Aasha.png"
    },

    {
      name: "Madan",
      field: "React Js",
      image: "/assets/contact/madan.png"
    },

    {
      name: "Kritika",
      field: "UI/UX",
      image: "/assets/coordinator/supriya.png"
    }
  ]

  useEffect(() => {
    document.title = "IT Sikshya Contact | Professional Marketplace"
  }, []);
  return (
    <>
      <section className='w-full mx-auto bg-[#8D8D8D]'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Contact</span></h4>
        </div>
      </section>
      <section className='max-w-[1400px] w-full mb-6 mt-12 mx-auto bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-[32px] font-bold'>Welcome to IT Sikshya</h2>
          <p className='text-[22px] font-medium'>Empowering the next generation of tech enthusiasts!</p>
          <p className='text-[20px] font-thin'>At IT Sikshya, we’re dedicated to providing practical, high-quality IT education to help you kickstart and grow your career in the tech industry. Whether you're just beginning or looking to sharpen your skills, you're in the right place.</p>
        </div>
        <div className="mx-auto h-[700px] max-w-[1380px] w-full px-4 py-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.268747271204!2d85.32061524339905!3d27.711079113837975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e3ff83574d%3A0x23e6caecc2eba3c0!2sRem.work%20HQ!5e0!3m2!1sen!2snp!4v1745487637094!5m2!1sen!2snp" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      {/* <section className='max-w-[1400px] mx-auto bg-[#F2F7FA]'>
        <div className="container mx-auto py-6">
          <h2 className='text-[26px] font-semibold text-black'>All campuses contacts</h2>
          <div className='grid lg:grid-cols-2 gap-6 gap-y-6'>
            <div>
              <p className='text-[18px] my-2 lg:w-[455px]'>We are you first point of contect for assistance with computer, the internet, telephones, printers and associated information technology equipment and services.</p>
              <img src="/assets/contact/image_1.png" alt="mobile_network" />
            </div>
            <div className='flex flex-col gap-4'>

              <div className='text-[18px]'>
                <p className='font-bold'>Service desk</p>
                <p>T : <a href="tel:08 7943 6600" className='text-[#519095]'>08 7943 6600</a></p>
                <p>E : <a href="mailto:itsupport@cdu.edu.au" className='text-[#519095]'>itsupport@cdu.edu.au</a> ( for faults )</p>
                <p>Internal: Ext 6600 International : <a href="tel:+618 7943 6600" className='text-[#519095]'>+618 7943 6600</a></p>
              </div>

              <div className='text-[18px]'>
                <p className='font-bold'>Opening hours</p>
                <p>Mon - Thu : <span className='text-[#4B4B4B]'>7:30 AM - 6 PM</span></p>
                <p>FRI : <span className='text-[#4B4B4B]'>7:30 AM - 5:30 PM</span></p>
              </div>

              <div className='text-[18px]'>
                <p className='font-bold'>In-person</p>
                <p className='text-[#4b4b4b]'>CDU Library, Red Building 8, Casuarina campus </p>
                <a href='#' className='text-[#519095] underline'>Casuarina campus map (PDF 1MB)</a>
              </div>

              <div className='text-[18px]'>
                <p className='font-bold'>Feedback</p>
                <p className='text-[#4b4b4b]'>Tell us about your experience with DTS. We would love to hear from you. </p>
                <a href='#' className='text-[#519095] underline'>Provide feedback</a>
              </div>

            </div>
          </div>
        </div>
      </section> */}

      <section className='max-w-[1400px] mx-auto bg-white'>
        <div className="container mx-auto py-6 text-center">
          <h2 className='text-[26px] font-[700] text-black '>Training Coordinators</h2>
          <div className='flex justify-center my-6 gap-36 gap-y-7'>
            {coordinator.map((a) => (
              <div className='text-center flex flex-col gap-0'>
                <div className='w-[200px]'>
                  <img className='mx-auto w-full' src={a.image} alt={a.name} />
                </div>
                <h3 className='text-[20px] font-medium'>{a.name}</h3>
                <p className='text-[16px]'>{a.field}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
