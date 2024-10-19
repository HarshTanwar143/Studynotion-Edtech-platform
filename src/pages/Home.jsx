import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAbutton from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import Footer from '../components/common/Footer'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
  return (
    <div>


      {/* SECTION - 1 */}
      <div className='relative mx-auto flex flex-col w-11/12  text-center text-white justify-between items-center'>
      
        <Link to={"/signup"}>

          <div className=' group mt-16 p-1 rounded-full mx-auto bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95  w-fit'>

            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900'>
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>

          </div>

        </Link>

        <div className=' text-center text-4xl font-semibold mt-7'>
          Empower Your Future with 
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className=' w-[90%] text-center mt-4 text-lg font-bold text-richblack-300'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex gap-6 mt-8'>

          <CTAbutton active={true} LinkTo={"/signup"}>
            Learn More
          </CTAbutton>

          <CTAbutton active={false} LinkTo={"/login"}>
            Book a Demo
          </CTAbutton>
        
        </div>

        <div className=' my-12 mx-3 shadow-[10px_-5px_50px_-5px] shadow-blue-200 '>
          <video className=' shadow-[20px_20px_rgba(255,255,255)]' muted loop autoPlay disablePictureInPicture>
            <source src={Banner} type='video/mp4'></source>
          </video>
        </div>

        { /* Code section - 1 */}
        <div>
          <CodeBlocks 
            position={"  lg:flex-row"}

            heading={
              <div className=' text-4xl font-semibold'>
                Unlock your <HighlightText text={"coding potential"} /> with out online courses.
              </div>
            }

            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }

            ctabtn1={
              {
                active:true,
                LinkTo:"/signup",
                btnText:"Try it yourself"
              }
            }

            ctabtn2={
              {
                active:false,
                LinkTo:"/login",
                btnText:"learn more"
              }
            }
            
            codeblock={`<!DOCTYPE html>\n<html>\n<head><>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}

            codeColor={"text-yellow-25"}

            backgroundGradient={'linear-gradient(123.77deg, #8a2be2 -6.46%, orange 59.04%, #f8f8ff 124.53%)'}
          />
        </div>

        { /* Code section - 2 */}
        <div className=' mb-20'>
          <CodeBlocks 
            position={"lg:flex-row-reverse"}

            heading={
              <div className=' text-4xl font-semibold'>
                Unlock your <HighlightText text={"coding potential"} /> with out online courses.
              </div>
            }

            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }

            ctabtn1={
              {
                active:true,
                LinkTo:"/signup",
                btnText:"Try it yourself"
              }
            }

            ctabtn2={
              {
                active:false,
                LinkTo:"/login",
                btnText:"learn more"
              }
            }
            
            codeblock={`<!DOCTYPE html>\n<html>\n<head><>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}

            codeColor={"text-richblack-5"}

            backgroundGradient={'linear-gradient(118.19deg, #1fa2ff -3.62%, #12d8fa 50.44%, #a6ffcb 104.51%)'}

          />
        </div>

        
        <ExploreMore />
      </div>



      {/* SECTION - 2 */}
      <div className=' bg-pure-greys-5 text-richblue-700 mt-16 lg:mt-[20rem]'>
            <div className='homepage_bg h-[310px]'>
            
              <div className=' w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>

                <div className=' h-[150px]'></div>

                <div className=' flex gap-7 text-white'>
                  <CTAbutton active={true} LinkTo={'/signup'}>
                    <div className='flex items-center gap-3'>
                      Explore Full Catalog
                      <FaArrowRight />
                    </div>
                  </CTAbutton>

                  <CTAbutton active={false} LinkTo={'/login'}>
                    <div>
                      Learn More
                    </div>
                  </CTAbutton>
                </div>

              </div>
            
            </div>

            <div className=' w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-7'>

              <div className=' flex gap-5 mb-10 mt-[95px] flex-col lg:flex-row'>

                <div className=' text-4xl font-semibold w-full lg:w-[50%]'>
                  Get the skills you need for a 
                  <HighlightText text={'job that is in demand.'} />
                </div>

                <div className='flex flex-col gap-10 w-full lg:w-[40%] items-start'>

                  <p className=' text-[16px]'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>

                    <CTAbutton active={true} LinkTo={'/login'} >
                      Learn More
                    </CTAbutton>
                  

                </div>
              </div>
            
              <TimelineSection />
  
              <LearningLanguageSection />
              
            </div>

      </div>



      {/* SECTION - 3 */}
      <div className=' max-w-maxContent mx-auto flex flex-col w-11/12 justify-between items-center bg-richblack-900 gap-8 text-white'>
      
            <InstructorSection />

            <h2 className=' text-center text-4xl font-semibold mt-10'>Review From Other Learners</h2>
            <ReviewSlider />
      </div>


      {/* FOOTER */}
      <Footer />


    </div>
  )
}

export default Home
