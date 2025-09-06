import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Tos() {
  useEffect(() => {
      document.title = "Terms of Service | IT Sikshya"
    }, []);
  return (
    <>
      <section className='w-full mx-auto bg-[#8D8D8D]'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Terms of Service</span></h4>
        </div>
      </section>

      <section className='my-6 bg-white max-w-[1400px] mx-auto'>
        <div className="container mx-auto">
          <p>Welcome to IT Sikshya. By enrolling in or participating in our Hybrid/Online 100-day training Program, you agree to comply with and be bound by the following Terms of Service. IT Sikshya is based at Rem.Work, Kamalpokhri, Kathmandu, Nepal.</p>

          <h2 className='text-[20px] font-bold pt-4'>1. Eligibility</h2>
          <p>Our training program is open to students and recent graduates from any university worldwide who are proficient in English and motivated to pursue a career in Information Technology.</p>

          <h2 className='text-[20px] font-bold pt-4'>2. Program Delivery</h2>
          <p>The training is conducted online or through a hybrid model, allowing participants to join from any location with reliable internet access. IT Sikshya reserves the right to adjust program content, format, or schedule to maintain educational quality and effectiveness.</p>

          <h2 className='text-[20px] font-bold pt-4'>3. Application and Information</h2>
          <p>Applicants must provide accurate and complete information during registration and throughout the program. Providing false or misleading information may result in disqualification or termination.</p>

          <h2 className='text-[20px] font-bold pt-4'>4. Intellectual Property</h2>
          <p>All training materials, project content, and resources provided during the training remain the property of IT Sikshya or its partners. Participants are granted a limited, non-transferable license to use these materials solely for educational purposes within the training.</p>

          <h2 className='text-[20px] font-bold pt-4'>5. Certification and Recommendation</h2>
          <p>Participants who successfully complete the program will receive a certificate of completion. Based on performance and mentor evaluations, qualified participants may also receive a recommendation letter to support their career development.</p>

          <h2 className='text-[20px] font-bold pt-4'>6. Conduct and Responsibilities</h2>
          <p>Participants are expected to maintain professionalism, communicate respectfully, and meet deadlines. Any form of misconduct, plagiarism, or unethical behavior may lead to removal from the program.</p>

          <h2 className='text-[20px] font-bold pt-4'>7. Liability</h2>
          <p>While IT Sikshya strives to deliver a valuable learning experience, we do not guarantee employment or specific skill outcomes. The program is provided “as is,” and IT Sikshya is not liable for any direct or indirect losses resulting from participation.</p>

          <h2 className='text-[20px] font-bold pt-4'>8. Privacy</h2>
          <p>Personal information collected during the application and training process will be handled in accordance with IT Sikshya’s Privacy Policy and applicable data protection laws.</p>

          <h2 className='text-[20px] font-bold pt-4'>9. Termination</h2>
          <p>IT Sikshya reserves the right to suspend or terminate any participant’s enrollment for violation of these terms or other valid reasons.</p>

          <h2 className='text-[20px] font-bold pt-4'>10. Governing Law</h2>
          <p>These terms are governed by the laws of Nepal. Any disputes will be subject to the exclusive jurisdiction of the courts in Kathmandu, Nepal.</p>
        </div>
      </section>
    </>
  )
}

export default Tos
