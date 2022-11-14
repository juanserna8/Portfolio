import React, { useEffect } from 'react';

import JuanAbout from '../images/Juan-about.svg';
import About1 from '../images/About10.jpg';
import About2 from '../images/About2.jpg';
import About3 from '../images/About30.jpg';
import Target from '../images/target.svg';
import JSLogo from '../images/JS-logo.jpg'


// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Autoplay, Navigation]);

function Carousel() {

  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20 mx-auto px-4 sm:px-6">
        <div className='font-poppins max-w-3xl mx-auto'>
            <h1 className='h1 lg:text-3xl mb-4'>Skillset</h1>
            <ul className='mt-8'>
                <li className='grid grid-cols-3 items-center mb-4 gap-2'>
                  <div className='col-span-1'></div>
                  <img src={Target} alt="target image" className='col-span-1 mx-auto'/>
                  <div className='col-span-1'>
                    <p className='col-span-1 text-2xl text-gray-600 font-poppins dark:text-white'>JAVASCRIPT:</p>
                    <p className=''>React JS, Redux Toolkit, Node JS, TypeScript</p>                
                  </div>
                </li>
                <li className='grid grid-cols-3 items-center mb-4 gap-2'>
                  <div className='col-span-1'>
                    <p className='text-2xl text-gray-600 font-poppins dark:text-white text-right'>CSS:</p>
                    <p className='text-right'>Tailwind CSS, Bootstrap, Framer-motion</p>
                  </div>
                  <img src={Target} alt="target image" className='col-span-1 mx-auto'/>
                  <div className='col-span-1'></div>
                </li>
                <li className='grid grid-cols-3 items-center mb-4 gap-2'>
                  <div className='col-span-1'></div>
                  <img src={Target} alt="target image" className='col-span-1 mx-auto'/>
                  <div className='col-span-1'>
                    <p className='col-span-1 text-2xl text-gray-600 font-poppins dark:text-white'>DEV TOOLS:</p>
                    <p className=''>GitHub, VS code, NPM, Vite, Stripe</p>                
                  </div>
                </li>
                <li className='grid grid-cols-3 items-center mb-4 gap-2'>
                 <div className='col-span-1'>
                    <p className='text-2xl text-gray-600 font-poppins dark:text-white text-right'>CLOUD:</p>
                    <p className='text-right'>AWS Amplify, AWS Lambda, AWS SES, Dynamo DB, Netlify</p>
                  </div>
                  <img src={Target} alt="target image" className='col-span-1 mx-auto'/>
                  <div className='col-span-1'></div>
                </li>
                <li className='grid grid-cols-3 items-center mb-4 gap-2'>
                  <div className='col-span-1'></div>
                  <img src={Target} alt="target image" className='col-span-1 mx-auto'/>
                  <div className='col-span-1'>
                    <p className='col-span-1 text-2xl text-gray-600 font-poppins dark:text-white'>ADMIN:</p>
                    <p className=''>Project Management Tools, Microsoft Office Toolkit</p>                
                  </div>
                </li>
             
            </ul>
         
        </div>
      </div>
    </section>
  );
}

export default Carousel;
