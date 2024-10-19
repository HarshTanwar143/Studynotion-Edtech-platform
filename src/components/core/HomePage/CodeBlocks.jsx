import React from 'react'
import CTAbutton from './Button'
import HighlightText from './HighlightText'
import { FaArrowRight } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'



const CodeBlocks = ({position,heading,subheading,ctabtn1,ctabtn2,codeblock, backgroundGradient, codeColor}) => {
    return (
        <div className={`flex flex-col ${position} gap-10 my-20 justify-between`}>

            {/* block - 1*/}
            <div className=' w-[100%] lg:w-[50%] flex flex-col gap-8 text-left'>
                {heading}

                <div className=' text-richblack-300 font-bold'>
                    {subheading}
                </div>

                <div className=' mt-7 flex gap-7'>
                    <CTAbutton active={ctabtn1.active} LinkTo={ctabtn1.LinkTo} >
                        <div className=' flex items-center gap-2'>
                            {ctabtn1.btnText}
                            <FaArrowRight />
                        </div>
                    </CTAbutton>

                    <CTAbutton active={ctabtn2.active} LinkTo={ctabtn2.LinkTo} >
                        {ctabtn2.btnText}
                    </CTAbutton>
                </div>
            </div>

            {/* block - 2*/}
            <div className=' relative flex w-[100%] h-fit text-10[px] py-4 bg-[#060F1E] rounded lg:w-[500px]'>
                {/* BG gradient for block - 1 */}                   
                <div className={`absolute codeblock`} style={{background:backgroundGradient}} ></div>

                <div className=' flex flex-col w-[10%] text-center font-inter font-bold text-richblack-400'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>

                <div className={`flex flex-col w-[90%] font-bold gap-2 font-mono pr-2 ${codeColor} text-left`}>
                    <TypeAnimation 
                        sequence={[codeblock,2000,""]}
                        repeat={Infinity}
                        cursor={true}
                        style={
                            {
                                whiteSpace: "pre-line",
                                display:"block"
                            }
                        }
                        omitDeletionAnimation={true}
                    />
                </div>
            </div>

        </div>
    )
}

export default CodeBlocks
