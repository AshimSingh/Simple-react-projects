import React from 'react'
import ReactDom from 'react-dom'
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiFillAlert } from "react-icons/ai";
import './index.css'
import Review from './review';
function App(){
    return(
       <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review/>
      </section>
    </main>
    )
}
ReactDom.render(<App></App>,document.getElementById('root'))