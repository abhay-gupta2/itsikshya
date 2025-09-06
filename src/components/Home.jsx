import React, { useEffect, useRef } from "react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    document.title = "IT Sikshya"
  }, []);

  const testimonails = [
    {
      src: "/assets/home/salina.jpg",
      description: "Even though my internship was remote, it was very effective as I received continuous guidance and support throughout the period. Working in a collaborative environment with regular feedback boosted my confidence and problem-solving abilities. I also got a clearer view of how companies work in the tech field, which has motivated me to further pursue a career in web development.",
      name: "Salina Bastola",
      team: "React Js Developer"
    },
    {
      src: "/assets/home/1.jpeg",
      description: "Beyond programming, this internship strengthened my problem-solving, communication, and teamwork abilities. It was a great introduction to working in a production-level setting with a focus on clean, maintainable code. I’m thankful to the SRIYOG team for their mentorship, which helped boost my confidence as a budding developer",
      name: "Sarad Kunwar",
      team: "React Native Developer"
    },
    {
      src: "/assets/home/bitisha.jpg",
      description: "My 3-month internship as a React JS Developer at SRIYOG Consulting Pvt. Ltd. provided me the opportunity to work on real-time web projects. I developed reusable components, implemented state management, and contributed to building scalable user interfaces. This helped me understand best practices in component-based architecture.",
      name: "Bitisha Thapa",
      team: "React Js Developer"
    },

  ]

  const graduates = [
    {
      name: 'Sakchyam',
      src: '/assets/home/graduates/5.webp',
      alt: 'Sakchyam',
      team: 'Flutter'
    },
    {
      name: 'Sagar',
      src: '/assets/home/graduates/3.webp',
      alt: 'sagar',
      team: 'Next Js'
    },
    {
      name: 'Sarad',
      src: '/assets/home/graduates/1.webp',
      alt: 'sarad',
      team: 'React Native'
    },
    {
      name: 'Aashma',
      src: '/assets/home/graduates/2.webp',
      alt: 'aashma',
      team: 'Backend'
    },

    {
      name: 'Milan',
      src: '/assets/home/graduates/4.webp',
      alt: 'Milan',
      team: 'UI/UX'
    },
    {
      name: 'Bitisha',
      src: '/assets/home/graduates/6.webp',
      alt: 'Bitisha',
      team: 'React Js'
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
          <div className="h-[816px] absolute lg:top-[25%] md:top-[25%] sm:top-[25%] top-[10%] z-20">
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
          <form action="#" className="flex justify-between flex-wrap gap-y-6">
            <input type="text" className="outline-none py-2 px-3 border-2 rounded capitalize" placeholder="First Name" name="" />
            <input type="text" className="outline-none py-2 px-3 border-2 rounded capitalize" placeholder="Last Name" name="" />
            <select
              name="Course"
              id="course"
              className="outline-none px-3 py-2 rounded border-2"
              defaultValue=""
            >
              <option value="" disabled>Select a Course</option>
              <option value="uiux">UI/UX</option>
              <option value="reactjs">React Js</option>
              <option value="nextjs">Next Js</option>
              <option value="mongodb">Mongo DB</option>
              <option value="flutter">Flutter</option>
              <option value="reactnative">React Native</option>
              <option value="pitchdeck">Pitch Deck Creation</option>
              <option value="webdesign">Web Design</option>
              <option value="mobiledev">Mobile App Development</option>
            </select>

            <div>
              <select
                name="country"
                id="country"
                className="outline-none px-3 py-2 rounded border-2 border-e-0"
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
              <input type="text" maxLength={10} placeholder="98XXXXXXXX" onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }} className="border-2 outline-none px-3 py-2 rounded border-s-0" />
            </div>
            <a href="https://wa.me/+9779852024365" target="_blank" className="apply lg:pt-2 md:pt-2 sm:pt-2">Request Callback</a>
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
          <div className="lg:w-[65%] self-center">
            <h4 className="text-[32px] font-[500] mb-3 inline-block">
              IT Training Program
            </h4>
            <p className="text-[16px] mb-6 text-justify">
              IT Sikshya welcomes students and recent graduates from any university worldwide who are English proficient and eager to enhance their skills in IT. Our Hybrid monthly training Program provides practical experience by involving the students in real-time projects under professional guidance, allowing them to learn and build a portfolio to strengthen their resumes/Cv.
              <br /><br />
              The program is virtual and can be joined from any location, with a focus on technical and professional skill development. The students receive a certificate of completion and, based on their performance, a recommendation letter to support their professional growth. IT Sikshya is dedicated to preparing the future generation of IT professionals with hands-on experience and real-world exposure.
            </p>
            <Link to={'/apply'} className="apply">
              Apply Now
            </Link>
          </div>
          <div className="lg:w-[30%] h-[280px] lg:mt-[8px] mt-8">
            <img
              className="w-full object-cover h-full rounded"
              src="/assets/home/internship_program.jpg"
              alt="internship program"
            />
            <p className="text-[14px] mt-2 text-center">
              Hybrid training program where Students contribute their valuable time to develop practical skills and build their careers.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto h-[580px] relative mt-[100px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/assets/home/training.jpg"
          alt="banner"
        />
        <div className="bg-[#0d5d595e] w-full h-full absolute top-0 z-10"></div>
        <div className="container  mx-auto">
          <div className="z-10 absolute top-0 transform">
            <h4 className="text-[18px] sm:text-[18px] text-[#0d5d59] lg:mt-[100px] md:mt-[80px] sm:mt-[60px] mt-[50px] font-medium">
              Hybrid Training
            </h4>
            <p className="text-[24px] sm:text-[30px] text-white mt-4 font-medium leading-snug">
              Creating Digital Nomads
            </p>
            <p className="text-[14px] sm:text-[16px] text-white mt-4 max-w-md text-justify pe-2">
              At IT Sikshya, we believe quality education should be accessible to everyone, anywhere. Whether you learn remotely or in person, our programs offer hands-on IT skills with experienced mentors, flexible options, and real-world projects to help build a strong foundation for your career.
            </p>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-16 mt-10 sm:mt-[58px]">
              <div className="ps-3 border-s-[3px] border-[#0d5d59]">
                <h4 className="text-[#0d5d59] font-semibold text-[22px] sm:text-[27px]">
                  Experienced Trainers
                </h4>
                <p className="text-[12px] text-white mt-1">
                  Recognized for excellence in <br /> practical, career-focused education.
                </p>
              </div>

              <div className="ps-3 border-s-[3px] border-[#0d5d59]">
                <h4 className="text-[#0d5d59] font-semibold text-[22px] sm:text-[27px]">
                  Recent Technologies
                </h4>
                <p className="text-[12px] text-white mt-1">
                  Continuous investment in <br /> modern tech and infrastructure.
                </p>
              </div>

              <div className="ps-3 border-s-[3px] border-[#0d5d59]">
                <h4 className="text-[#0d5d59] font-semibold text-[22px] sm:text-[27px]">
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
            {testimonails.map((a) => (
              <div className="text-[16px] w-full lg:mx-0">
                <div className="h-[225px]">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={a.src}
                    alt={a.name}
                  />
                </div>
                <div className="paragraph text-[#183053]">
                  <div className="">
                    <p className="text-justify pt-3 text-[15px]">
                      {a.description}
                    </p>
                  </div>

                  <br />
                  <p className="text-[14px]">{a.name}</p>

                  <h4 className="text-[#102A4F] font-bold text-[16px]">
                    {a.team}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-white mt-[38px]">
        <div className="container mx-auto">
          <h4 className="text-[24px] font-bold text-black">
            Recent Graduates
          </h4>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mx-auto flex-wrap gap-y-4 text-center mt-[52px] mb-7">
            {graduates.map((a) => (
              <div className="w-[120px] mx-auto">
                <img
                  className="w-full border-4 rounded-full"
                  src={a.src}
                  alt={a.alt}
                />
                <p className="text-[16px] font-semibold text-[#4B4B4B] mt-1">
                  {a.name}
                </p>
                <p className="text-[14px] font-semibold text-[#4b4b4b]">{a.team}</p>
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
            <Link to={'/apply'} className="apply">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
