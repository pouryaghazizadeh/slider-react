import React from 'react'
import {MdOutlineArrowBackIosNew,MdOutlineArrowForwardIos} from "react-icons/md"
function Arrows({prevSlide,nextSlide}) {
    return (
        <div>
            <span onClick={prevSlide}><MdOutlineArrowBackIosNew/></span>
            <span onClick={nextSlide}><MdOutlineArrowForwardIos/></span>

            
        </div>
    )
}

export default Arrows
