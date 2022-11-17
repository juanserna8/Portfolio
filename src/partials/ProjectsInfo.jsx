import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import projectsDetails from '../assets/projectsDetails.json';

import RelatedImage03 from '../images/related-post-03.jpg';
import RelatedImage04 from '../images/related-post-04.jpg';
import RelatedImage05 from '../images/related-post-05.jpg';
import RelatedImage06 from '../images/related-post-06.jpg';

function ProjectsInfo() {
  const projectsPics = [
    {title: "2Hands", img: RelatedImage03},
    {title: "The ever cake", img: RelatedImage04},
  ]
  
  const [currentProject, setCurrentProject] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-16">
        
          {/* First project */}
          <div className="grid grid-cols-2 gap-4" data-aos-id-featposts>
            {/* Section's Image */}
            <div className='h-[20rem] bg-center bg-no-repeat bg-cover flex' style={{ backgroundImage: `url(${projectsDetails[0].info[currentSection].image})`}}>
              <div 
                className='basis-[10%] bg-gray-900/50 grid items-center'
                onClick={() => {
                  currentSection > 0 && setCurrentSection(currentSection - 1);
                }}
              >
               <svg className="h-10 w-10 text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
              </div>
              <div className='basis-[80%]'>
                <p className='col-span-1 text-2xl text-white font-poppins text-center bg-smoke-100/20 w-2/3 mx-auto mt-4'>The Ever Cake</p>
              </div>
              <div 
                className='basis-[10%] bg-gray-900/50 grid items-center'
                onClick={() => {
                  currentSection < projectsDetails[0].info.length - 1 && setCurrentSection(currentSection + 1);
                }}
              >
                <svg className="h-10 w-10 text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 6 15 12 9 18" /></svg>
              </div>
            </div>
            
            {/* Section's description */}
            <div className='flex flex-col'>
              <p className='text-3xl text-gray-600 font-poppins dark:text-white'>{projectsDetails[0].info[currentSection].title}</p>
              <p className='text-xl text-gray-600 dark:text-gray-400'>{projectsDetails[0].info[currentSection].description}</p>
            </div>

          </div>

          <ul>{projectsDetails.map((project, index) => {
            return(
              <li key={index} className='grid mt-4'>
                <p className='text-2xl text-gray-600 font-poppins dark:text-white'>{project.name}</p>
                <div className='grid grid-cols-2 gap-4'>
                  {/* Left column */}
                  <div>
                    <div 
                      className='h-[20rem] bg-center bg-no-repeat bg-cover flex mt-2'
                      style={{ backgroundImage: `url(${projectsDetails[index].info[currentSection].image})`}}
                    >
                      <div 
                        className='basis-[10%] bg-gray-900/50 grid items-center'
                        onClick={() => {
                          currentSection > 0 && setCurrentSection(currentSection - 1) 
                        }}
                      >
                        <svg className="h-10 w-10 text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
                      </div>
                      <div className='basis-[80%]'></div>
                      <div 
                        className='basis-[10%] bg-gray-900/50 grid items-center'
                        onClick={() => {
                          currentSection < projectsDetails[index].info.length - 1 && setCurrentSection(currentSection + 1);
                          console.log(projectsDetails[index].info[currentSection+1].image)
                        }}
                      >
                      <svg className="h-10 w-10 text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 6 15 12 9 18" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className='flex flex-col'>
                    <p className='text-2xl text-gray-600 font-poppins dark:text-white'>{projectsDetails[index].info[currentSection].title}</p>
                    <p className='text-xl text-gray-600 dark:text-gray-400'>{projectsDetails[index].info[currentSection].description}</p>
                  </div>

                </div>
              </li>
            )
          })}
          </ul>
          
          {/* <img src={projectsPics[currentImg].img} alt="" /> */}

        </div>
      </div>
    </section>
  );
}

export default ProjectsInfo;
