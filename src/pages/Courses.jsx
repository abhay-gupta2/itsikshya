import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Courses() {

  useEffect(() => {
      document.title = "Courses | IT Sikshya"
    }, []);
  

  const courses = [
  {
    id: 1,
    name: 'UI/UX Designing',
    description:
      'UI/UX designing involves creating digital interfaces that are both visually appealing and user-friendly. UI focuses on layout, color, and typography, while UX ensures smooth and intuitive user experiences.',
    src: '/assets/courses/1.jpg',
    duration : "1 Month",
    price : "Rs. 15,000",
    offer : "Rs. 5,000"
  },
  {
    id: 2,
    name: 'React Js',
    description:
      'React.js is a popular open-source JavaScript library used for building fast and interactive user interfaces. It utilizes components and a virtual DOM to efficiently render dynamic web applications.',
    src: '/assets/courses/2.jpg',
    duration : "1 Month",
    price : "Rs. 25,000",
    offer : "Rs. 15,000"
  },
  {
    id: 3,
    name: 'Next Js',
    description:
      'Next.js is a powerful React framework that enables server-side rendering, static site generation, and API routes, making it ideal for building modern, fast, and SEO-friendly web applications.',
    src: '/assets/courses/3.jpg',
    duration : "1 Month",
    price : "Rs. 50,000",
    offer : "Rs. 30,000"
  },
  {
    id: 4,
    name: 'Mongo DB',
    description:
      'MongoDB is a flexible, document-oriented NoSQL database used for high-volume data storage. It stores data in JSON-like documents and is known for its scalability and performance.',
    src: '/assets/courses/4.jpg',
    duration : "1 Week",
    price : "Rs. 100,000",
    offer : "Rs. 70,000"
  },
  {
    id: 5,
    name: 'Flutter',
    description:
      'Flutter is an open-source UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase using the Dart language.',
    src: '/assets/courses/5.jpg',
    duration : "1 Month",
    price : "Rs. 5,000",
    offer : "Rs. 3,000"
  },
  {
    id: 6,
    name: 'React Native',
    description:
      'React Native is a framework developed by Facebook that allows developers to build cross-platform mobile apps using JavaScript and React, delivering native performance and code reuse.',
    src: '/assets/courses/6.jpg',
    duration : "1 Month",
    price : "Rs. 50,000",
    offer : "Rs. 20,000"
  },
  {
    id: 7,
    name: 'Pitch Deck Creation',
    description:
      'Pitch deck creation involves designing professional presentations that clearly communicate business ideas, products, or startups to potential investors, clients, or stakeholders.',
    src: '/assets/courses/7.jpg',
    duration : "1 Work",
    price : "Rs. 15,000",
    offer : "Rs. 5,000"
  },
  {
    id: 8,
    name: 'Web Design',
    description:
      'Web design is the process of planning, conceptualizing, and arranging content online. It combines aesthetics and functionality to build websites that are visually appealing and user-friendly.',
    src: '/assets/courses/8.jpg',
    duration : "3 Month",
    price : "Rs. 50,000",
    offer : "Rs. 20,000"
  },
  {
    id: 9,
    name: 'Mobile App Development',
    description:
      'Mobile app development is the creation of software applications for smartphones and tablets. It includes designing, coding, testing, and deploying apps for platforms like Android and iOS.',
    src: '/assets/courses/9.jpg',
    duration : "3 Month",
    price : "Rs. 100,000",
    offer : "Rs. 70,000"
  }
];

  return (
    <>
      <section className='w-full mx-auto bg-[#8D8D8D]'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Courses</span></h4>
        </div>
      </section>
      <section className='max-w-[1400px] mx-auto my-6'>
        <div className="container mx-auto py-6">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-y-6 gap-8'>
            {courses.map((a) => (
              <div className='mx-auto text-center border rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer'>
                <img className="mx-auto w-full rounded-t-lg h-[200px] object-cover border-b-2" src={a.src} alt={a.name} />
                <h2 className='my-1 text-[18px] font-bold'>{a.name}</h2>
                <p className='px-6 text-justify pb-4'>{a.description}</p>
                <div className='text-start pb-2 px-6'>
                <p>Duration : {a.duration}</p>
                <p>Regular Fee : <span className=''>{a.price}</span></p>
                <p className='border-2 px-1 w-[180px] font-bold rounded mt-2 text-[#333333]'>Offer Free : {a.offer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Courses
