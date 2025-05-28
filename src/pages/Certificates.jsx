import React, { useEffect } from 'react'
import { initLightboxJS } from 'lightbox.js-react'
import { SlideshowLightbox } from 'lightbox.js-react'
import { Link } from 'react-router-dom';

function Certificates() {
  const certificate = [
    {
      id: 1,
      name: "Salina Bastola",
      image: "/assets/certificates/Salina Bastola.png",
      alt: "salin bastola"
    },
    {
      id: 2,
      name: "Salina Bastola",
      image: "/assets/certificates/Anjani Gurung.png",
      alt: "salin bastola"
    },
    {
      id: 3,
      name: "Salina Bastola",
      image: "/assets/certificates/Shiv Kumar.png",
      alt: "salin bastola"
    }
  ];
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "Insert plan type here");
  }, []);

  useEffect(() => {
      document.title = "IT Sikshya Certificates | Professional Marketplace"
    }, []);
  return (
    <>
    <section className='w-full mx-auto bg-[#8D8D8D]'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Certificates</span></h4>
        </div>
      </section>
      <section className='w-full mx-auto bg-white mb-6 mt-12'>
        <div className='container mx-auto py-4'>
          <SlideshowLightbox className="container grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4 gap-y-4 mx-auto">
            {certificate.map((a) => (
              <img className="w-full rounded" src={a.image} alt={a.alt} />
            ))}
          </SlideshowLightbox>
        </div>
      </section>
    </>
  )
}

export default Certificates
