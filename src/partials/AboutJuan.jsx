import React, { useEffect } from 'react';

import JuanAbout from '../images/Juan-about.svg';
import About1 from '../images/About1.jpg';
import About2 from '../images/About20.jpg';
import About3 from '../images/About30.jpg';


// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Autoplay, Navigation]);

function Carousel() {

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

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
          <div className='md:pt-[6rem] md:pl-4 md:pr-8 grid'>
            <p className=''>I am an easy going Web Developer who enjoys working in team and sharing ideas and solutions with the people that sorround me. I'm always looking for ways to improve efficiency and add value to people, groups and organizations.</p>
            <p className='pt-2'>I have a formal qualification in Industrial Engineering, and work experience in Business Consultancy in Strategic Planning, HR and Digital Transformation projects.</p>
            <p className='pt-2'>Most recently, I have been focused on the usage of front-end and programing technologies to make entrepreneurs' lives easier, by automating repetitive processes such as making tax invoices and sending confirmation emails</p>

            {/* Images */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 pl-4 mt-4'>
              <img src={About1} alt="photo-working-out" className='object-fill h-[10rem] aspect-square mr-4 rounded border border-gray-400' />
              <img src={About2} alt="photo-travelling" className='object-fill h-[10rem] aspect-square mr-4 rounded border border-gray-400' />
              <img src={About3} alt="photo-eating-out" className='col-span-2 mx-auto object-scale h-[10rem] aspect-square rounded border border-gray-400' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
