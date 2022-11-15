import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import RelatedImage03 from '../images/related-post-03.jpg';
import RelatedImage04 from '../images/related-post-04.jpg';
import RelatedImage05 from '../images/related-post-05.jpg';
import RelatedImage06 from '../images/related-post-06.jpg';

function ProjectsInfo() {
  const projectsPics = [
    {title: "2Hands", img: RelatedImage03},
    {title: "The ever cake", img: RelatedImage04},
  ]
  
  const [currentImg, setCurrentImg] = useState(1)

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-16">

          {/* First project */}
          <div className="grid grid-cols-2" data-aos-id-featposts>
            <div className='h-[20rem] bg-center bg-no-repeat bg-cover flex' style={{ backgroundImage: `url(${projectsPics[currentImg].img})`}}>
              <div 
                className='basis-[10%] bg-gray-900/50 grid items-center'
                onClick={() => {
                  currentImg > 0 && setCurrentImg(currentImg - 1);
                }}
              >
               <svg class="h-10 w-10 text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
              </div>
              <div className='basis-[80%]'>
                <p className='col-span-1 text-2xl text-white font-poppins text-center bg-smoke-100/20 w-2/3 mx-auto mt-4'>The Ever Cake</p>
              </div>
              <div 
                className='basis-[10%] bg-gray-900/50 grid items-center'
                onClick={() => {
                  currentImg < projectsPics.length - 1 && setCurrentImg(currentImg + 1);
                }}
              >
                <svg class="h-10 w-10 text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 6 15 12 9 18" /></svg>
              </div>
            </div>
            
            

          </div>
          {/* <img src={projectsPics[currentImg].img} alt="" /> */}

        </div>
      </div>
    </section>
  );
}

export default ProjectsInfo;
