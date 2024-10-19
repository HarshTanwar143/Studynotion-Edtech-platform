import React from 'react'

const CourseCard = ({cardData,currentCard,setCurrentCard}) => {


    return (
        <div>
            <div className={` w-[340px] h-[300px] cursor-pointer ${currentCard === cardData.heading ? " bg-white course-shadow" : "bg-richblack-800 hover:shadow-2xl hover:shadow-brown-100"} flex flex-col justify-between py-8 px-6 transition-all duration-500 rounded-md relative` } 
            onClick={()=>setCurrentCard(cardData.heading)} >

                <div className=' text-left '>
                    <div className={` mb-3 font-bold text-[20px] ${currentCard === cardData.heading ? " text-richblack-800" : "text-richblack-50"} `}>
                        {cardData.heading}
                    </div>

                    <p className={` ${currentCard === cardData.heading ? "text-richblack-500" : "text-richblack-300"} font-normal text-base`}>
                        {cardData.description}
                    </p>
                </div>

                <div className={` flex justify-between pt-3 ${currentCard === cardData.heading ? " text-blue-500" : "text-richblack-100"}  text-base font-semibold `}>
                    {/* dashed line */}
                    <div className=' absolute left-0 right-0 bottom-[23%] border-dashed  border-t-[2px]'></div>

                    <div className='flex text-[16px] items-center gap-2'>
                        <svg  vg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>

                        {cardData.level}
                    </div>

                    <div className='flex text-[16px] items-center gap-2'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.25 12h-0.25v-3.25c0-0.965-0.785-1.75-1.75-1.75h-4.25v-2h0.25c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.413-0.338-0.75-0.75-0.75h-2.5c-0.412 0-0.75 0.337-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h0.25v2h-4.25c-0.965 0-1.75 0.785-1.75 1.75v3.25h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.413 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.337-0.75-0.75-0.75h-0.25v-3h4v3h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75h-0.25v-3h4v3h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75zM3 15h-2v-2h2v2zM9 15h-2v-2h2v2zM7 4v-2h2v2h-2zM15 15h-2v-2h2v2z"></path></svg>

                        {cardData.lessionNumber} Lessons
                    </div>
                </div>

            </div>
        </div>
    )
    
}

export default CourseCard
