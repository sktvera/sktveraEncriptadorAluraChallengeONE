import React from 'react'
import HomeWriter from '../../Components/HomeWriter/HomeWriter'
import HomeReader from '../../Components/HomeReader/HomeReader'
import "./Assets/styles.css"

const Home =()=> {
  return (
    <div className='contained-home'>
    <HomeWriter/>
    <HomeReader/>
    </div>
  )
}

export default Home