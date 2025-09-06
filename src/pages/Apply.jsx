import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Apply() {
  useEffect(() => {
    document.title = "Apply | IT Sikshya"
  }, []);
  return (
    <>
      <section className='w-full mx-auto bg-[#8D8D8D] mb-6'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/'}>Training</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Apply</span></h4>
        </div>
      </section>

      <section className='max-w-[700px] mx-auto my-6'>
        <h2 className='text-[24px] font-semibold my-4'>Admission Form</h2>
        <form action="#" className='flex flex-col gap-4 bg-[#f6f8fc] rounded px-2 py-6'>
          <div className='flex flex-col gap-2'>
            <p className='text-[15px]'>Applicant's Name : </p>
            <input type="text" className='w-full capitalize' placeholder='Your Name' name='name' required />
          </div>

          <div className='flex justify-between flex-wrap gap-y-4 items-center'>
            <div className='flex gap-4 lg:w-[50%]'>
              <p className='text-[15px]'>Gender : </p>
              <div>
                <input type="radio" name='gender' id='male' /> Male
              </div>
              <div>
                <input type="radio" name='gender' id='female' /> Female
              </div>
              <div>
                <input type="radio" name='gender' id='others' /> Others
              </div>
            </div>
            <div className='flex gap-4 items-center lg:w-[50%]'>
              <p>Date of Birth : </p>
              <input type="date" className='lg:w-[65%]' name='dob' />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='text-[15px]'>Address : </p>
            <input type="text" className='w-full' placeholder='Your Full Address' name='address' required />
          </div>

          <div className='flex justify-between flex-wrap gap-2 gap-y-4 items-center'>

            <div className='lg:w-[48%] md:w-[48%] sm:w-[48%] w-full flex flex-col gap-2'>
              <p>Contact Number : </p>
              <div>
                <select
                  name="country"
                  id="country"
                  className="input border-e-0"
                  defaultValue="+977"
                  required
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
                <input type="text" maxLength={10} placeholder="98XXXXXXXX" className='border-s-0 lg:w-[68%]' onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }} required />
              </div>
            </div>

            <div className='lg:w-[50%] md:w-[50%] sm:w-[50%] w-full flex flex-col gap-2'>
              <p className='text-[15px]'>E-mail Address : </p>
              <input type="text" name='email' placeholder='abhay@gmail.com'/>
            </div>
            
          </div>

          
          <div className='flex justify-between flex-wrap gap-2 gap-y-4'>
            <div className='lg:w-[48%] w-full flex flex-col gap-2'>
              <p className='text-[15px]'>Course Name : </p>
              <select className='input' name="course" id="" defaultValue=''>
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
            </div>

            <div className='lg:w-[50%] w-full flex flex-col gap-2'>
              <p className='text-[15px]'>Qualification : </p>
              <select name="qualification" id="" className='input'>
                <option value="">Select an option</option>
                <option value="see/slc">SEE/SLC</option>
                <option value="+2">+2</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor</option>
                <option value="masters">Masters</option>
              </select>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='text-[15px]'>College Name : </p>
            <input type="text" className='w-full capitalize' placeholder='Your College name' name='college' required />
          </div>

           <div className='flex flex-col gap-2'>
            <p className='text-[15px]'>Current Semester/Passed Year : </p>
            <input type="text" className='w-full capitalize' placeholder='' name='college' required />
          </div>

          <div className='flex flex-col gap-2'>
            <p className='text-[15px]'>Headshot : </p>
            <input type="file" className='lg:ps-[35%]' placeholder='' name='college' required />
          </div>

          <button
            type="submit"
            class="apply w-28 text-[22px]"
          >
            Submit
          </button>
          

        </form>
      </section>
    </>
  )
}

export default Apply
