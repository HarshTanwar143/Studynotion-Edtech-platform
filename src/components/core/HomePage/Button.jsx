import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,LinkTo,active}) => {
  return (
    <Link to={LinkTo}>
        <div className={`px-6 py-3 rounded-md font-bold text-center text-[16px] 
            ${active ? "bg-yellow-50 text-black" : " bg-richblue-800"}
            hover:scale-95 transition-all duration-200
        `}>
            {children}
        </div> 
    </Link>
  )
}

export default Button
