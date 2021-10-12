import React from 'react'

function Dots({activeIndex,onClick,imageSlider}) {
    return (
        <div>{
            imageSlider.map((slide,index)=><span key={index} onClick={onClick}></span>)}
            
        </div>
    )
}

export default Dots
