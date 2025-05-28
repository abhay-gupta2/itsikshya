import React, { useEffect, useRef } from "react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    document.title = "IT Sikshya | Professional Marketplace"
  }, []);

  const graduates = [
    {
      name: 'Lalita',
      src: '/assets/home/graduates/image_1.png',
      alt: 'Lalita',
      team: 'React JS'
    },
    {
      name: 'Salina',
      src: '/assets/home/graduates/image_2.png',
      alt: 'Salina',
      team: 'React JS'
    },
    {
      name: 'Abhay',
      src: '/assets/home/graduates/image_3.png',
      alt: 'Abhay',
      team: 'React JS'
    },
    {
      name: 'Sarad',
      src: '/assets/home/graduates/image_4.png',
      alt: 'Sharad',
      team: 'React Native'
    },
    {
      name: 'Bitisha',
      src: '/assets/home/graduates/bitisha.png',
      alt: 'Bitisha',
      team: 'React JS'
    },
  ];

  return (
    <>
      <section className="w-full mx-auto h-[600px] relative overflow-hidden">
        <img
          className="w-full h-[716px] object-cover sc"
          src="/assets/banner/banner1.jpg"
          alt="banner"
        />
        <div className="bg-[#00000071] w-full h-full absolute top-0 z-10"></div>
        <div className="container  mx-auto">
          <div className="h-[816px] absolute top-[25%] z-20">
            <p className="text-[30px] text-white">
              Build Your Career in IT
            </p>
            <p className="text-[70px] tracking-normal h-[149px] text-white font-[700]">
              LEARN, LEAD <br /> & LEVERAGE
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6 mt-12 max-w-[1400px] mx-auto">
        <div className="container mx-auto">
          <form action="#" className="flex gap-8 flex-wrap">
            <input type="text" className="outline-none py-3 px-4 border-2 rounded capitalize" placeholder="First Name" name="" />
            <input type="text" className="outline-none py-3 px-4 border-2 rounded capitalize" placeholder="Last Name" name="" />
            <div>
              <select
                name="country"
                id="country"
                className="outline-none px-4 py-3 rounded border-2 border-e-0"
                defaultValue="+977"
              >
                <option value="+61">AU +61</option>
                <option value="+880">BD +880</option>
                <option value="+55">BR +55</option>
                <option value="+86">CN +86</option>
                <option value="+49">DE +49</option>
                <option value="+34">ES +34</option>
                <option value="+33">FR +33</option>
                <option value="+91">IN +91</option>
                <option value="+39">IT +39</option>
                <option value="+81">JP +81</option>
                <option value="+82">KR +82</option>
                <option value="+94">LK +94</option>
                <option value="+60">MY +60</option>
                <option value="+977">NP +977</option>
                <option value="+92">PK +92</option>
                <option value="+7">RU +7</option>
                <option value="+65">SG +65</option>
                <option value="+971">AE +971</option>
                <option value="+44">UK +44</option>
                <option value="+1">US +1</option>
              </select>
              <input type="text" maxLength={10} placeholder="98XXXXXXXX" onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }} className="border-2 outline-none px-4 py-3 rounded border-s-0" />
            </div>
            <button type="submit" className="bg-[#113785] text-white px-3 py-2 rounded text-[18px]">Request Callback</button>
          </form>
        </div>
      </section>

      {/* <section className='w-[full]  bg-[#11294D] relative h-auto py-4 overflow-hidden'>
                <section className='container mx-auto relative'>
                    <h4 className='text-[18px] sm:text-[18px] font-[700] text-white'>
                        Knowledge PARTNERS
                    </h4>

                    
                    <button
                        ref={prevRef}
                        className="p-4 absolute left-[-50px]  top-[65%] z-10 bg-white rounded-full hover:bg-gray-100 transform -translate-y-1/2"
                    >
                        <img className='w-[20px] sm:w-[25px] mx-auto' src="/assets/icons/left-arrow.svg" alt="Previous" />
                    </button>

                    <button
                        ref={nextRef}
                        className=" absolute right-[-50px] top-[65%] z-10 bg-white p-4 rounded-full hover:bg-gray-100 transform -translate-y-1/2"
                    >
                        <img className='w-[20px] sm:w-[25px] mx-auto' src="/assets/icons/right-arrow.svg" alt="Next" />
                    </button>

                    <Swiper
                        modules={[Navigation, A11y, Autoplay]}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            480: { slidesPerView: 3 },
                            640: { slidesPerView: 4 },
                            768: { slidesPerView: 5 },
                            1024: { slidesPerView: 6 },
                        }}
                        loop={true}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        className='w-full max-w-[1400px] mx-auto mt-4'
                    >
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/1.png" alt="1" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/2.png" alt="2" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/3.png" alt="3" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/4.png" alt="4" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/5.png" alt="5" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/6.png" alt="6" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/1.png" alt="1" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/2.png" alt="2" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/3.png" alt="3" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/4.png" alt="4" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/5.png" alt="5" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/assets/partners/6.png" alt="6" /></SwiperSlide>
                    </Swiper>
                </section>
            </section> */}

      <section className="max-w-[1400px] bg-white mx-auto mb-6 mt-14">
        <div className="lg:flex justify-between container mx-auto gap-8">
          <div className="lg:w-[46%] self-center">
            <h4 className="text-[32px] font-[500] mb-3 inline-block">
              IT Training Program
            </h4>
            <p className="text-[18px] mb-6 text-justify">
              IT Sikshya welcomes students and recent graduates from any university worldwide who are English proficient and eager to start a career in IT. Our Hybrid/Online 100-day Training Program provides practical experience by involving the interns in real-time projects under professional guidance, allowing them to learn and build a portfolio to strengthen their resumes.
              <br /><br />
              The program is virtual and can be joined from any location, with a focus on technical and professional skill development. The interns receive a certificate of completion and, based on performance, a recommendation letter to support their professional growth. IT Sikshya is dedicated to preparing the future generation of IT professionals with hands-on experience and real-world exposure.
            </p>
            <span className="bg-[#11294D] px-3 py-2 text-white text-[18px] rounded-[15px] font-[500]">
              Apply Now
            </span>
          </div>
          <div className="lg:w-[48%] h-[450px] lg:mt-[8px] mt-8">
            <img
              className="w-full object-cover h-full rounded"
              src="/assets/home/internship_program.jpg"
              alt="internship program"
            />
            <p className="text-[16px] font-[500] mt-2 ">
              Online program where interns contribute their valuable time to develop practical skills and build their careers.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto h-[600px] relative mt-[100px] overflow-hidden">
        <img
          className="w-full h-[716px] object-cover"
          src="/assets/home/training.jpg"
          alt="banner"
        />
        <div className="bg-[#00000071] w-full h-full absolute top-0 z-10"></div>
        <div className="container  mx-auto">
          <div className="z-10 absolute top-0 transform">
            <h4 className="text-[18px] sm:text-[18px] text-[#FFED01] lg:mt-[100px] md:mt-[80px] sm:mt-[60px] mt-[50px] font-medium">
              Virtual & Hybrid Training
            </h4>
            <p className="text-[24px] sm:text-[30px] text-white mt-4 font-medium leading-snug">
              Creating Digital Nonads
            </p>
            <p className="text-[14px] sm:text-[16px] text-white mt-4 max-w-md text-justify pe-2">
              At IT Sikshya, we believe quality education should be accessible to everyone, anywhere. Whether you learn remotely or in person, our programs offer hands-on IT skills with experienced mentors, flexible options, and real-world projects to help build a strong foundation for your career.
            </p>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-16 mt-10 sm:mt-[58px]">
              <div className="ps-3 border-s-[3px] border-[#FFED01]">
                <h4 className="text-[#FFED01] font-semibold text-[22px] sm:text-[27px]">
                  Experienced Trainers
                </h4>
                <p className="text-[12px] text-white mt-1">
                  Recognized for excellence in <br /> practical, career-focused education.
                </p>
              </div>

              <div className="ps-3 border-s-[3px] border-[#FFED01]">
                <h4 className="text-[#FFED01] font-semibold text-[22px] sm:text-[27px]">
                  Recent Technologies
                </h4>
                <p className="text-[12px] text-white mt-1">
                  Continuous investment in <br /> modern tech and infrastructure.
                </p>
              </div>

              <div className="ps-3 border-s-[3px] border-[#FFED01]">
                <h4 className="text-[#FFED01] font-semibold text-[22px] sm:text-[27px]">
                  Remote Freelancing
                </h4>
                <p className="text-[12px] text-white mt-1">
                  Empowering learners with <br />skills for real-world success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-white mt-[50px]">
        <div className="container mx-auto">
          <h2 className="text-[26px] text-black font-bold mb-[35px]">Testimonials</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10 mx-auto">
            <div className="text-[16px] w-full lg:mx-0">
              <div className="h-[225px]">
                <img
                  className="w-full h-full object-cover rounded"
                  src="public/assets/home/bitisha.jpg"
                  alt="image_image_1"
                />
              </div>
              <div className="paragraph text-[#183053]">
                <div className="">
                  <p className="text-justify pt-3 ">
                    I enhanced my skills as a web developer during my time at Sriyog Consulting, where I built a strong foundation in modern web technologies. Specializing as a React.js Developer, I gained hands-on experience developing responsive and dynamic web applications.
                  </p>
                </div>

                <br />
                <p className="text-[14px]">Bitisha Thapa</p>

                <h4 className="text-[#102A4F] font-bold text-[16px]">
                  React Js Developer
                </h4>
              </div>
            </div>

            <div className="text-[16px] w-full lg:mx-0">
              <div className="h-[228px]">
                <img
                  className="w-full h-full rounded"
                  src="public/assets/home/image_2.jpg"
                  alt="image_image_2"
                />
              </div>
              <div className="paragraph text-[#183053]">
                <div className="">
                  <p className="text-justify pt-3 ">
                    I strengthened my expertise in front-end development at Sriyog Consulting, focusing on building seamless and efficient web applications as a React.js Developer. This experience has enhanced my ability to create dynamic and responsive user interfaces.
                  </p>
                </div>
                <br />
                <p className="text-[14px]">Salina Bastola</p>
                <h4 className="text-[#102A4F] font-bold text-[16px]">
                  React.js Developer
                </h4>
              </div>
            </div>

            <div className="text-[16px] w-full lg:mx-0">
              <div className="h-[225px]">
                <img
                  className="w-full h-full object-cover rounded"
                  src="/assets/home/image_3.jpg"
                  alt="image_image_3"
                />
              </div>
              <div className="paragraph text-[#183053]">
                <div className="">
                  <p className="text-justify pt-3 ">
                    My early training gave me a strong creative and technical foundation as a UI/UX designer. I’m currently building on that knowledge through an internship at Sriyog, where I’m gaining hands-on experience on real-world projects and sharpening my skills."
                  </p>
                </div>

                <br />
                <p className="text-[14px]">Mihailo Terzic</p>
                <h4 className="text-[#102A4F] font-bold text-[16px]">
                  Next.js Developer
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-white mt-[38px]">
        <div className="container mx-auto">
          <h4 className="text-[24px] font-bold text-black">
            Recent Intern Graduates
          </h4>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mx-auto flex-wrap gap-y-4 text-center mt-[52px] mb-7">
            {graduates.map((a) => (
              <div className="w-[120px] mx-auto">
                <img
                  className="w-full"
                  src={a.src}
                  alt={a.alt}
                />
                <p className="text-[18px] font-semibold text-[#4B4B4B] mt-1">
                  {a.name}
                </p>
                <p className="text-[16px] font-semibold text-[#4b4b4b]">{a.team}</p>
              </div>
            ))}
          </div>

        </div>
      </section >

      <section className="bg-white mb-6">
        <div className="bg-gray-400 py-2 rounded-[5px] container mx-auto">
          <div className="flex justify-evenly flex-wrap items-center gap-y-6">
            <div className="flex gap-2 lg:w-[85%]">
              <img src="/assets/icons/plant.svg" alt="plant" />
              <div>
                <h4 className="text-[18px] font-semibold text-[#11294D]">
                  Top 10 tips to know before you face any interview remotely.
                </h4>
                <p className="text-[15px] font-semibold text-[#11294D]">
                  Top 10 tips to know before you face any interview remotely.
                  Top 10 tips to know before you face <br /> any interview
                  remotely. Top 10 tips to know before you face any interview
                  remotely.
                </p>
              </div>
            </div>
            <div className="rounded-[15px] bg-[#11294D] text-white px-3 py-1 text-[18px] font-semibold lg:w-[12%] mx-auto text-center">
              Explore Now
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
