import React from "react";
import {useState} from "react"
import data from "./data";
const Review=()=>{
    const [index,setIndex]=useState(0)
    const {name,job,image,text}=data[index]
    // const setPrevious=()=>{
        
    // }
    const setNext=()=>{
        
        setIndex((index)=>{
            if(index<data.length-1){
                const newIndex =index+1
                return newIndex
            }
            else{
                const newIndex=0
                return newIndex
            }
        })
    }
    const setPrev=()=>{
        if(index>0){
            const newIndex =index-1
            setIndex(newIndex)
        }
        else{
            const newIndex = data.length-1
            setIndex(newIndex)
        }
    }
    const setRandom=()=>{
        const newIndex = Math.random(0)*data.length
        setIndex(newIndex.toFixed())
    }
    return(
        <>
            <section className="review">
                <div className="img-container">
                    <img src={image} alt="" className="person-img"></img>
                    <span className="quote-icon">
                        <i class="fa-solid fa-quote-left"></i>
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={()=>setPrev()}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button className='next-btn' onClick={()=>setNext()}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <button className='random-btn' onClick={()=>setRandom()} >
        surprise me
      </button>
            </section>
        </>
    )
}
export default Review