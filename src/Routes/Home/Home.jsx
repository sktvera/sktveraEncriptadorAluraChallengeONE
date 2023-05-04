import React, {useState} from 'react'
import HomeWriter from '../../Components/HomeWriter/HomeWriter'
import HomeReader from '../../Components/HomeReader/HomeReader'
import "./Assets/styles.css"

const Home =()=> {
  const [dataEncrypt, setDataEncrypt] = useState([])



  return (
    <div className='contained-home'>
    <HomeWriter setDataEncrypt={setDataEncrypt}/>
    <div className='HomeReader-media'>
    <HomeReader dataEncrypt={dataEncrypt}/>
    </div>
   
    </div>
  )
}

export default Home