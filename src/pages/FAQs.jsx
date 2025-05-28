import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FAQs() {
  const [open, setOpen] = useState(null);

  const handleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

 const faqData = [
  {
    question: "1. Who can join IT Sikshya's courses?",
    answer: "Anyone with a passion for technology can join. We accept students from all academic backgrounds.",
  },
  {
    question: "2. Are the courses online or offline?",
    answer: "We offer both online and offline courses to cater to different learning preferences.",
  },
  {
    question: "3. How long do the courses last?",
    answer: "The duration of each course varies. Most courses are designed to be completed in 2-3 months.",
  },
  {
    question: "4. Do I need any prior experience to join?",
    answer: "No prior experience is required for most courses, although basic computer knowledge is helpful.",
  },
  {
    question: "5. How can I apply for a course?",
    answer: "You can apply directly on our website by filling out the application form under the Apply Now section.",
  },
  {
    question: "6. Are the courses free?",
    answer: "No, the courses are paid. However, we offer competitive pricing and flexible payment options.",
  },
  {
    question: "7. Will I get a certificate after completing the course?",
    answer: "Yes, all our students receive a certificate of completion after finishing their course.",
  },
  {
    question: "8. How do I pay for the course?",
    answer: "Payment options include online bank transfers, credit cards, and other digital payment methods.",
  },
];


  useEffect(() => {
      document.title = "IT Sikshya FAQs | Professional Marketplace"
    }, []);
  return (
    <>
    <section className='w-full mx-auto bg-[#8D8D8D]'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>FAQs</span></h4>
        </div>
      </section>
      <section className="max-w-[1400px] bg-[#1AA399] mb-6 mt-12 mx-auto">
        <div className="container mx-auto pt-[50px] pb-[40px] text-center">
          <h2 className="font-[600] text-[36px] text-white">
            Kickstart Your Career with IT Sikshya
          </h2>
          <p className="text-[20px] text-white text-center my-4">
            Sikshya offers a 100-day online IT internship for students and graduates to gain real-world experience, build a portfolio, and boost their careers—from anywhere in the world.
          </p>
          <div className="mx-auto w-[201px] px-4 py-1 text-[20px] bg-[#FCDB2E] text-center rounded-[10px]">
            Apply Now
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mb-6 mt-12 mx-auto">
        <div className="container mx-auto bg-[#F0F0F0] py-2">
          <h4 className="text-[24px] font-[500] py-4 inline-block">
            Frequently Ask Questions
          </h4>
          <div className="my-2">
            <div
              id="accordion-collapse"
              className="flex flex-col gap-6 text-left"
            >
              {faqData.map((a, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-white"
                >
                  <h2>
                    <button
                      type="button"
                      onClick={() => handleOpen(index)}
                      className="flex items-center justify-between w-full p-5 font-medium text-gray-500"
                      aria-expanded={open === index ? "true" : "false"}
                      aria-controls={`accordion-collapse-body-${index}`}
                    >
                      <span className="text-left text-[18px]">
                        {a.question}
                      </span>
                      <img
                        className={`w-8 transform transition-transform ${
                          open === index ? "rotate-180" : ""
                        }`}
                        src="/assets/icons/down-arrow.svg"
                        alt="down"
                      />
                    </button>
                  </h2>

                  {open === index && (
                    <div>
                      <hr className="border-t border-gray-200" />
                      <div className="p-5">
                        <p className="text-gray-400 text-[16px]">{a.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] h-full mx-auto bg-[#522298] mb-6 mt-12">
        <div className="container mx-auto pt-10 pb-10 overflow-hidden">
          {/* <img
            className=""
            src="/assets/faqs/faqs_1.png"
            alt="faqs_1"
          /> */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="my-8">
              <p className="text-[#F9E310] text-[20px] font-semibold">
                IT Sikshya Training Programs
              </p>
              <p className="text-[28px] text-white">
                Start building your career with real-world experience and practical skills from IT Sikshya
              </p>
            </div>
            <div className="md:self-center md:row-span-2 transform-translate-y-1/2">
              <img
                className="lg:scale-[1.8] md:scale-[2] object-cover"
                src="/assets/faqs/faqs_2.png"
                alt="faqs_2"
              />
            </div>
            <div className="p-4 bg-white mb-6 flex flex-col gap-6 items-center">
              <p className="text-[32px] font-bold text-[#522298] text-center">
                Find Your Program
              </p>
              <p className="text-[20px] text-center">
                Choose your area of interest
              </p>
              <form
                action="#"
                className="mx-auto flex flex-col gap-10 items-center"
              >
                <select
                  name="program"
                  id="program"
                  className="border-2 px-3 py-1 rounded-[10px] outline-none"
                >
                  <option value="" disabled selected>
                    --Please Select--
                  </option>
                  <option value="ui/ux">UI/UX</option>
                  <option value="web_development">Web Development</option>
                  <option value="app_development">App Development</option>
                  <option value="social_media_management">
                    Social Media Management
                  </option>
                  <option value="data_science">Data Science</option>
                  <option value="java">Java</option>
                </select>
                <button
                  type="submit"
                  className="bg-[#FF6B01] px-6 py-1 mx-auto w-[80%] rounded-[15px] text-white text-[20px]"
                >
                  Next Step
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-white my-6">
        <div className="container mx-auto pt-[60px]">
          <div className="flex flex-wrap lg:gap-8 gap-y-4">
            <div className="lg:w-[35%] w-full rounded overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="/assets/faqs/faqs_3.jpg"
                alt="faqs_3"
              />
            </div>
            <div className="lg:w-[60%]">
              <p className="text-[#5224B2] text-[22px] mb-4">
                THE IT SIKSHYA DIFFERENCE
              </p>
              <p className="text-[30px] leading-none">
                A global internship platform designed to launch your IT career
              </p>
              <p className="text-[20px] text-[#4b4b4b] my-5">
                IT Sikshya is committed to empowering students and recent graduates with the skills and experience needed to thrive in the tech industry.
              </p>
              <p className="text-[20px] text-[#4b4b4b]">
                Here’s what sets IT Sikshya apart:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 mt-1 bg-[#000]"></div>
                  <p>
                    <strong>Practical Learning </strong>- Work on real-time IT projects guided by industry professionals to build hands-on experience and a strong portfolio.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 mt-1 bg-[#000]"></div>
                  <p>
                    <strong>Global Accessibility </strong>- Join from anywhere in the world through our fully online or hybrid 100-day internship program.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 mt-1 bg-[#000]"></div>
                  <p>
                    <strong>Career Support</strong> - Receive a certificate of completion and, based on performance, a recommendation letter to support your professional growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQs;
