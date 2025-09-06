import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | IT Sikshya"
  }, []);
  return (
    <>
      <section className='w-full mx-auto'>
        <h4 className='text-[36px] font-semibold text-white my-5 px-[130px] py-10 bg-[#8D8D8D]'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Privacy Policy</span></h4>
        <div className="container w-[1200px] mx-auto py-[20px] bg-white">
          <p>This privacy policy sets out how IT Sikshya ("we", "our", or "us") uses, collects, stores, and protects any information that you provide when using our website and services. We are committed to ensuring your privacy is protected. Should we ask you to provide personal information, it will only be used in accordance with this privacy statement.
          </p>
          {/* 1st paragraph */}
          <h5 className='pt-4 text-[20px] font-bold'>1. Information We Collect</h5>
          <p>We may collect and process the following types of personal and usage information:
          </p>
          <ul className="list my-5 list-disc px-4">
            <li><strong>Personal Identification Information:</strong> Name, address, email address, phone number, educational background, and other details submitted during course registration or inquiries.
            </li>
            <li><strong>Demographic Information:</strong> Age, gender, location, and preferences.</li>
            <li><strong>Academic & Professional Details:</strong> Resume/CV data submitted through forms.
            </li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, operating system, referral source, and browsing behavior.</li>
            <li><strong>Other Information:</strong> Feedback, survey responses, and communication records.</li>
          </ul>

          {/* 2nd paragraph */}
          <h5 className='pt-4 text-[20px] font-bold'>2. How We Use the Information</h5>
          <p>The information we collect is used for:</p>
          <ul className="list my-4 list-disc px-4">
            <li>Processing course applications and managing student records</li>
            <li>Improving our services, course offerings, and user experience</li>
            <li>Internal administrative purposes</li>
            <li>Sending emails about course updates, educational content, offers, or events</li>
            <li>Providing customer service and responding to inquiries</li>
            <li>Customizing the website based on your interests</li>
            <li>Conducting market research to better understand user preferences</li>
            <li>Ensuring compliance with legal and regulatory requirements</li>
            <li>We only retain personal data for as long as necessary for the purposes mentioned above.</li>
          </ul>

          {/* 3rd paragraph */}
          <h5 className='pt-4 text-[20px] font-bold'>3. Security</h5>
          <p>We are committed to ensuring your personal information is secure. To prevent unauthorized access or disclosure, we have implemented appropriate physical, electronic, and managerial procedures including:
          </p>
          <ul className="list my-4 list-disc px-4">
            <li>Secure servers and encrypted data storage</li>
            <li>Regular monitoring and access control</li>
            <li>Data minimization and privacy-by-design principles</li>
            <li>Restricted access to sensitive data within our team</li>
          </ul>

          {/* 4th paragraph */}
          <h5 className='pt-4 text-[20px] font-bold'>4. Cookies</h5>
          <p>Our website uses cookies to enhance user experience and collect usage data. Cookies help us:</p>
          <ul className="list my-4 list-disc px-4">
            <li>Understand website traffic and page interactions</li>
            <li>Save your preferences for future visits</li>
            <li>Provide relevant course or service suggestions based on browsing behavior</li>
            <li>You can choose to accept or decline cookies through your browser settings. Disabling cookies may affect site functionality.</li>
          </ul>

          {/* 5th paragraph */}
          <h5 className='pt-4 text-[20px] font-bold'>5. Third-Party Services</h5>
          <p>We may use third-party platforms (such as analytics tools, email marketing services, or online payment processors) that handle user data on our behalf. These service providers are contractually obligated to keep your information secure and confidential.</p> <br />
          <p>We do not sell or rent your personal information to third parties.</p>

          {/* 6th paragraph */}
          <h5 className='pt-4 text-[20px] font-bold'>6. Links to Other Websites</h5>
          <p>Our website may include links to other websites of interest. However, once you leave our site, we do not control the external website and are not responsible for the protection and privacy of any information you provide on those sites. Please review their privacy policies before sharing any personal data.
          </p>

          {/* 7th paragraph */}
          <h5 className='pt-4 text-[20px] font-bold'>7. Controlling Your Personal Information</h5>
          <p>You have control over your personal information. You may:
          </p>
          <ul className="list my-4 list-disc px-4">
            <li>Request a copy of the personal data we hold about you</li>
            <li>Ask for correction of inaccurate or incomplete data</li>
            <li>Withdraw consent for direct marketing at any time</li>
            <li>Request that your data be deleted or anonymized</li>
            <li>Object to the processing of your personal data</li>
            <li>To exercise these rights, please email us at info@itsikshya.com or write to:</li>
          </ul>
          <p> IT Sikshya <br />
            rem.work, Kathmandu, Nepal</p>

          {/* 8th paragraph */}
          <h5 className='pt-4 text-[20px] font-bold'>8. Children’s Privacy</h5>
          <p>Our services are not intended for individuals under the age of 13. We do not knowingly collect personal data from children without parental consent. If we discover such information has been collected inadvertently, we will promptly delete it.</p>

          {/* 9th paragraph */}
          <h5 className='pt-4 text-[20px] font-bold'>9. Changes to This Privacy Policy</h5>
          <p>We may update this policy from time to time by posting a new version on our website. It is your responsibility to review this page periodically to stay informed of changes. <br />
            Last Updated: [15<sup>th</sup> May, 2025]</p>

          {/* 10th paragraph */}
          <h5 className='pt-4 text-[20px] font-bold'>10. Contact Us</h5>
          <p className='pb-[20px]'>If you have questions or concerns about this Privacy Policy or how your data is handled, please contact: <br />
            Email: info@itsikshya.com <br />
            Address: rem.work, Kathmandu, Nepal</p>
        </div>
      </section>
    </>
  )
}

export default Privacy
