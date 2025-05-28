import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-full bg-[#11294D]">
        <section className="container px-0  mx-auto">
          <div className="flex justify-between flex-wrap-reverse text-[16px] items-center  text-white py-8">
            <div className="mt-6 lg:mt-0 md:mt-4 lg:text-start lg:mx-0 mx-auto ">
              <h4 className="text-white lg:text-start text-center">
                All Rights Reserved. IT Sikshya Pvt. Ltd.
                <br />
                Kamalpokhari, kathmandu, Nepal
              </h4>
            </div>
            <ul className="flex flex-wrap gap-2 gap-y-2 lg:mx-0 mx-auto text-[15px] sm:self-end self-center  ">
              <li>
                <Link to={"/certificates"}>Certificates</Link>
              </li>
              <li>|</li>
              <li>
                <Link to={"/tos"}>Terms of Service</Link>
              </li>
              <li>|</li>
              <li>
                <Link to={"/privacy"}>Privacy Policy</Link>
              </li>
              <li>|</li>
              <li>
                <Link to={"/disclaimer"}>Disclaimer</Link>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
