import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <section className=' bg-gray-100 w-full mx-auto'>
                <hr />
                <div className="container mx-auto pb-5">
                    <div className="footer footer-main flex flex-col md:flex-row gap-y-6 items-center justify-between py-8">
                        <h5 className='font-bold text-[25px] text-[#0d5d59]'>IT Sikshya</h5>
                        <div className="social-icons flex gap-3">
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="/assets/footer/facebook.svg" alt="facebook" />
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="/assets/footer/twitter.svg" alt="twitter" />
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="/assets/footer/youtube.svg" alt="youtube" />
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="/assets/footer/instagram.svg" alt="instagram" />
                        </div>
                    </div>

                    <div className="footer-list footer-main grid lg:grid-cols-4 gap-6 items-center text-center md:items-start md:text-start lg:items-start lg:text-start gap-y-6">

                      <div className='text-wrap mx-auto'>
                            <p className='text-[13px] text-[#0d5d59]'>
                                Join a global community of learners, collaborate on real-world projects, and build lasting connections—all while enjoying the flexibility to balance your learning with your lifestyle.
                            </p>
                            
                        </div>
                        <div className="mx-auto">
                            <h5 className='text-[15px] text-[#0d5d59] font-semibold'>Browse More</h5>
                            <ul className='text-[13px] text-[#0d5d59] md:items-start md:text-start'>
                                <li className='py-1'><Link to={'/glance'}>Glance</Link></li>
                                <li className='py-1'><Link to={'/testimonials'}>Testimonials</Link></li>
                                <li className='py-1'><Link to={'/eligibility'}>Eligibility</Link></li>
                                <li className='py-1'><Link to={'/payment'}>Payment Details</Link></li>
                                <li className='py-1'><Link to={'/team'}>Team</Link></li>
                            </ul>
                        </div>

                        <div className="mx-auto">
                            <h5 className='text-[15px] text-[#0d5d59] font-semibold'>Contact</h5>
                            <ul className='text-[13px] text-[#0d5d59] md:flex md:flex-col md:items-start md:text-start lg:items-start lg:text-start'>
                                {/* <li className='py-1'>Suchana Bibhag Darta #123-081/82</li> */}
                                <li className='py-1 flex gap-2 justify-center items-center'><img className='w-[16px] rounded-full h-[17px] bg-slate-200 border' src="/assets/footer/location.svg" alt="location" /> Kamalpokhari, Kathmandu, Nepal</li>
                                <li className='py-1 flex gap-2 justify-center items-center'><img className='w-[16px] rounded-full h-[17px] bg-slate-200 border' src="/assets/footer/phone.svg" alt="phone" /> +977-9852025735</li>
                                <li className='py-1 flex gap-2 justify-center items-center'><img className='w-[16px] rounded-full h-[17px] bg-slate-200 border' src="/assets/footer/email.svg" alt="email" /> p@sriyog.com</li>
                            </ul>
                        </div>

                        <div className="mx-auto">
                            <img className='w-[130px] py-2' src="/assets/footer/google-play.webp" alt="" />
                            <img className='w-[130px]' src="/assets/footer/app-store.webp" alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-[13px] container items-center text-center gap-y-2  mx-auto py-5 text-[#0d5d59] flex flex-col md:flex-row justify-between">
                    <p>Copyright © SRIYOG Consulting Pvt. Ltd.</p>

                    <ul className="footer-list text-[13px] flex gap-5">
                        <li><Link to={'/tos'}>Terms of Service</Link></li>
                        <li><Link to={'/policy'}>Privacy Policy</Link></li>
                        <li><Link to={'/disclaimer'}>Disclaimer</Link></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Footer