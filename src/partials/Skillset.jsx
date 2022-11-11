import React, { useEffect } from 'react';

import JuanAbout from '../images/Juan-about.svg';
import About1 from '../images/About10.jpg';
import About2 from '../images/About2.jpg';
import About3 from '../images/About30.jpg';


// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Autoplay, Navigation]);

function Carousel() {

  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20 mx-auto px-4 sm:px-6">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 font-poppins'>
          {/* First column */}
          <div className='col-span-1 flex flex-col justify-center mx-auto'>
            <h1 className='h1 lg:text-3xl mb-4 text-center'>About me</h1>
            <img src={JuanAbout} alt="Juan's pic" className='mt-4' />
          </div>
          {/* Second column */}
          <div className='md:pl-4 md:pr-8 grid text-justify'>
            <h1 className='h1 lg:text-3xl mb-4 text-center'>Skillset</h1>

            {/* Images */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 lg:pl-4 mt-4'>
              <img src={About1} alt="photo-working-out" className='object-fill h-[10rem] aspect-square mx-auto rounded border border-gray-400' />
              <img src={About2} alt="photo-travelling" className='object-fill h-[10rem] aspect-square mx-auto rounded border border-gray-400' />
              <img src={About3} alt="photo-eating-out" className='col-span-2 sm:col-span-1 mx-auto object-scale h-[10rem] aspect-square rounded border border-gray-400' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
