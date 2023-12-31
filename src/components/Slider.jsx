import React from 'react';
import ImageSlider from "./ImageSlider";
import SliderContent from "./SliderContent";
import Arrows from "./Arrows";
import Dots from "./Dots";
import './Slider.css';
import { useEffect, useState } from "react";

const len=ImageSlider.length-1;
function Slider(props)
{   
    const [activeIndex,setActiveIndex]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>
        {
            setActiveIndex(activeIndex==len ? 0:activeIndex+1);
        },5000);
        return()=>clearInterval(interval);

    },[activeIndex]);
    return(

        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} ImageSlider={ImageSlider} />
            <Arrows 
            prevSlide={()=>
                setActiveIndex(activeIndex<1 ? len:activeIndex-1)
            }
            nextSlide={()=>
                setActiveIndex(activeIndex==len ? 0:activeIndex+1)
            }
            />
            <Dots 
            activeIndex={activeIndex} 
            ImageSlider={ImageSlider}
            onclick={activeIndex=>setActiveIndex(activeIndex)}
            />
        </div>
    );
}
export default Slider;