import { useState } from "react";

const InfoCurrentSection = (project) => {
    const [currentSection, setCurrentSection] = useState(0)

    const handleNext = () => {
        setCurrentSection(currentSection + 1);
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Left column */}
            <div>
            <div 
                className='h-[20rem] bg-center bg-no-repeat bg-cover flex mt-2'
                style={{ backgroundImage: `url(${project.project.info[currentSection].image})`}}
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
                    currentSection < project.project.info.length - 1 && handleNext();
                }}
                >
                <svg className="h-10 w-10 text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 6 15 12 9 18" /></svg>
                </div>
            </div>
            </div>

            {/* Right column */}
            <div className='flex flex-col'>
            <p className='text-2xl text-gray-600 font-poppins dark:text-white'>{project.project.info[currentSection].title}</p>
            <p className='text-xl text-gray-600 dark:text-gray-400 mt-4'>{project.project.info[currentSection].description}</p>
            </div>

        </div>
    );
}
 
export default InfoCurrentSection;