import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
    return (
        <div>
            We are passionate about revolutionzing the way we learn, Our innovation platform
            <HighlightText text={'combines technology'} />
            <span className=' text-brown-500'>
                {" "}
                expertise
            </span>
            , and community to create an
            <span className=' text-brown-500'>
                {" "}
                unparalleled educational experiences.
            </span>
        </div>
    )
}

export default Quote
