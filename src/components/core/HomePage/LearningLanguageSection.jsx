import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png'
import CTAbutton from '../HomePage/Button'

const LearningLanguageSection = () => {
    return (
        <div className=' mt-[130px]'>
            <div className=' flex flex-col gap-5 items-center mb-10'>

                <div className=' text-4xl font-semibold text-center'>
                    Your Swiss  Knife for
                    <HighlightText text={"learning any language"} />
                </div>

                <div className=' text-center text-richblue-600 mx-auto font-medium text-base w-[70%]'>
                    Using spin making learning multiple languages easy. with 20+ laguages realistic voice-over, progress tracking, custom schedule and more.
                </div>

                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-center'>
                    <img src={know_your_progress} className=' object-contain -mr-32' alt='know_your_progress' />

                    <img src={compare_with_others} className=' object-contain' alt='compare_with_others' />

                    <img src={plan_your_lessons} className=' object-contain -ml-30 lg:-ml-36  ' alt='plan_your_lessons' />
                </div>

                <div className=' w-fit'>
                    <CTAbutton active={true} LinkTo={'/signup'}>
                        <div>
                            Learn More
                        </div>
                    </CTAbutton>                
                </div>



            </div>
        </div>
    )
}

export default LearningLanguageSection
