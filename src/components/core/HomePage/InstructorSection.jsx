import React from 'react'
import HighlightText from './HighlightText'
import CTAbutton from '../HomePage/Button'
import { FaArrowRight } from 'react-icons/fa'
import Instructor from '../../../assets/Images/Instructor.png'

const InstructorSection = () => {
    return (
        <div className=' mt-16'>

            <div className=' flex flex-col items-center gap-20 lg:flex-row '>
                <div className='lg:w-[50%]'>
                    <img src={Instructor} alt='Instructor' className=' rounded-xl shadow-blue-500 shadow-2xl' />
                </div>

                <div className=' flex lg:w-[50%] lg:items-start flex-col justify-center items-center gap-10'>
                    <div className=' text-4xl font-semibold w-[50%]'>
                        Become an
                        <HighlightText text={"Instructor"} />
                    </div>

                    <p className=' font-medium text-[16px] w-[80%] text-richblack-300'>
                        Instructors from around the world, teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                    </p>
                
                    <div className=' w-fit'>
                        <CTAbutton active={true} LinkTo={'/signup'}>
                            <div className=' flex gap-2 items-center'>
                                Start Learning Today
                                <FaArrowRight />
                            </div>
                        </CTAbutton>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InstructorSection
