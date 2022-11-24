import React, { useEffect } from 'react';

import Select from '../images/select.png';

function Contact() {

  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20 mx-auto px-4 sm:px-6">
        <div className='font-poppins max-w-3xl mx-auto'>
          <h1 className='h1 lg:text-3xl mb-4'>Get in touch</h1>
          <div className='grid grid-cols-12 mt-6'>
            <div className='col-span-5'>
              <img src={Select} alt="Juan's photo" />
            </div>
            <div className='col-span-7 grid grid-cols-5'>
              <div className='col-span-3 mx-auto'>
                <p className='text-xl text-gray-600 font-poppins dark:text-white'>Email:</p>
                <p className='text-lg text-gray-600 dark:text-gray-400'>sernadominguezj@gmail.com</p>
              </div>
              <div className='col-span-2 mx-auto'>
                <p className='text-xl text-gray-600 font-poppins dark:text-white'>Mobile:</p>
                <p className='text-lg text-gray-600 dark:text-gray-400'>0414029043</p>
              </div>
              

              
              
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
