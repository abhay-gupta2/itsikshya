import React from 'react'
import { Link } from 'react-router-dom';

function Courses() {
  const courses = [
    {
      name: 'UI/UX Designing',
      description:
        'UI/UX designing involves creating digital interfaces that are attractive and user-friendly. UI focuses on visual elements like layout and colors, while UX ensures the product is easy and enjoyable to use.',
      src: '/assets/courses/ui-ux.jpeg',
    },
    {
      name: 'Flutter',
      description:
        'Flutter is an open-source framework by Google that lets developers build high-performance, cross-platform apps for mobile, web, and desktop using a single codebase written in the Dart programming language.',
      src: '/assets/courses/Flutter.jpg',
    },
    {
      name: 'React JS',
      description:
        'React.js is a popular open-source JavaScript library developed by Facebook for building fast, interactive user interfaces. It uses components and a virtual DOM to efficiently update and render parts of a web application.',
      src: '/assets/courses/React-JS.png',
    },
    {
      name: 'Next JS',
      description:
        'Next.js is a powerful React framework for building fast, scalable web applications. It supports server-side rendering, static site generation, and API routes, making it ideal for SEO-friendly, full-stack, and production-ready projects.',
      src: '/assets/courses/Next-js.png',
    },
    {
      name: 'Social Media Management',
      description:
        'Social media management involves creating, scheduling, analyzing, and engaging with content posted on platforms like Facebook, Instagram, and Twitter. It helps businesses grow their online presence, build brand awareness, and connect with audiences effectively.',
      src: '/assets/courses/Social-Media-Management.webp',
    },
    {
      name: 'React Native',
      description:
        'React Native is an open-source framework by Facebook that allows developers to build mobile apps for iOS and Android using JavaScript and React. It enables code reuse and delivers a native app experience.',
      src: '/assets/courses/React-native.png',
    },
    {
      name: 'Web Designing',
      description:
        'Web designing is the process of creating the layout, visual appearance, and user experience of websites. It combines graphic design, coding, and usability principles to build attractive, functional, and user-friendly web pages.',
      src: '/assets/courses/web-designing.png',
    },
    {
      name: 'Graphics Designing',
      description:
        'Graphic designing is the art of creating visual content using typography, images, and colors to communicate messages. It’s used in branding, advertising, and digital media to make information engaging and visually appealing.',
      src: '/assets/courses/Graphic-Design.jpg',
    },
    {
      name: 'Python',
      description:
        'Python is a versatile, high-level programming language known for its simplicity and readability. It’s widely used in web development, data analysis, artificial intelligence, automation, and more due to its extensive libraries and community support.',
      src: '/assets/courses/Python.jpg',
    },
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
                <img className="mx-auto w-full rounded-t-lg h-[200px] object-cover" src={a.src} alt={a.name} />
                <h2 className='my-1 text-[18px] font-bold'>{a.name}</h2>
                <p className='px-4 text-justify pb-4'>{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Courses
