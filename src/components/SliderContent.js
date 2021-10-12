import React from 'react'

function SliderContent({activeIndex,imageSlider}) {
    return (
      <section>
          {
              imageSlider.map((slide,index)=>
              <div key={index}></div>
              )
          }
      </section>
    );
}

export default SliderContent
