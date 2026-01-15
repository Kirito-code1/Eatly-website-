import React from 'react'
import '../css/blocks/advert_page.css'

export default function AdvertPage() {
 return (
  <div className='container'>
   <section className='achievements'>
    <div className='arc_right'></div>

    <div data-aos = 'fade-up'>
      <div className='achievements__item'>
     <h2>10K+</h2>
     <p>
      Satisfied Customers
      <br />
      All Great Over The World
     </p>
    </div>
    </div>

    <div className='line'></div>

    <div data-aos = 'fade-up'>
      <div className='achievements__item'>
     <h2>4M</h2>
     <p>
      Healthy Dishes Sold
      <br />
      Including Milk Shakes Smooth
     </p>
    </div>
    </div>

    <div className='line'></div>

    <div data-aos = 'fade-up'>
      <div className='achievements__item'>
     <h2>99.99%</h2>
     <p>
      Reliable Customer Support
      <br />
      We Provide Great Experiences
     </p>
    </div>
    </div>
   </section>

   <section className='app'>
    <div data-aos = 'fade-right'>
      <div className='app__image'>
       <img
           src='/images/Mobile Screen.svg'
           alt="phone"
       />
    </div>
    </div>

    <div data-aos = 'fade-left'>
      <div className='app__content'>
     <h2 className='app__title'>
      Premium <span>Quality</span>
      <br />
      For Your Health
     </h2>

     <ul className='app__list'>
      <li className='app__list-item'>
       Premium quality food is made with ingredients that are packed with
       essential vitamins, minerals.
      </li>

      <li className='app__list-item'>
       These foods promote overall wellness by supporting healthy
       digestion and boosting immunity.
      </li>
     </ul>
       <img
           src='/images/Vector 14.svg'
           alt=""
           className='vector14'
       />
       />

       <button className='app__btn'>
        Download <img src='/images/arrow-right.svg' alt="" />
       </button>
    </div>
    </div>
   </section>
  </div>
 )
}
