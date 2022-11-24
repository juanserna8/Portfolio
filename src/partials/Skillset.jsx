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
          <div className='grid grid-cols-6 gap-6 lg:gap-12 mt-8'>
            <div className='col-span-3 md:col-span-2 mx-auto'>
              <svg className="h-12 w-12 text-white mx-auto"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <p className='text-2xl text-gray-600 text-center font-poppins dark:text-white mt-2'>Coding</p>
              <ul>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>React JS</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Redux Toolkit</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Node JS</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Typescript</p>
                </li>
              </ul>
            </div>

            <div className='col-span-3 md:col-span-2 mx-auto'>
              <svg className='bg-white h-12 w-12 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"/></svg>
              <p className='text-2xl text-gray-600 text-center font-poppins dark:text-white mt-2'>CSS</p>
              <ul>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Tailwind CSS</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Bootstrap</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Framer motion</p>
                </li>
              </ul>
            </div>

            <div className='col-span-3 md:col-span-2 mx-auto'>
              <svg className="h-12 w-12 text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="4" width="18" height="12" rx="1" />  <line x1="7" y1="20" x2="17" y2="20" />  <line x1="9" y1="16" x2="9" y2="20" />  <line x1="15" y1="16" x2="15" y2="20" /></svg>
              <p className='text-2xl text-gray-600 text-center font-poppins dark:text-white mt-2'>Dev Tools</p>
              <ul>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Github</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>VS Code</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>NPM</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Vite</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Stripe integration</p>
                </li>
              </ul>
            </div>

            <div className='col-span-3 md:col-span-2 mx-auto'>
              <svg className="h-12 w-12 text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />  <polyline points="9 15 12 12 15 15" />  <line x1="12" y1="12" x2="12" y2="21" /></svg>
              <p className='text-2xl text-gray-600 text-center font-poppins dark:text-white mt-2'>Cloud</p>
              <ul>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>AWS Amplify</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>AWS Lambda</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>AWS SES</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Dynamo DB</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Netlify</p>
                </li>
              </ul>
            </div>

            <div className='col-span-3 md:col-span-2 mx-auto'>
            <svg className="h-12 w-12 text-white mx-auto"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>

              <p className='text-2xl text-gray-600 text-center font-poppins dark:text-white mt-2'>Team work</p>
              <ul>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Trello</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Gantt Charts</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Conflict resolution</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Organizational and planning skills</p>
                </li>
              </ul>
            </div>

            <div className='col-span-3 md:col-span-2 mx-auto'>
              <svg className="h-12 w-12 text-white mx-auto"  viewBox="0 0 24 24"  width="24"  height="24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <path d="M8 14s1.5 2 4 2 4-2 4-2" />  <line x1="9" y1="9" x2="9.01" y2="9" />  <line x1="15" y1="9" x2="15.01" y2="9" /></svg>
              <p className='text-2xl text-gray-600 text-center font-poppins dark:text-white mt-2'>Sense of humor</p>
              <ul>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Start everyday with positivism</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Don't take it personal</p>
                </li>
                <li>
                  <p className='text-xl text-gray-600 dark:text-gray-400 text-center'>Smile, smile, smile</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
