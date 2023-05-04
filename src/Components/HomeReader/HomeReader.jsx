import React from 'react'
import UserSearch from '../SVGAlura/UserSearch/UserSearch'
import MessageSeacrhReader from '../../Components/MessageSeacrhReader/MessageSeacrhReader'
import CircularProgress from '@mui/joy/CircularProgress';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';


import "./Assets/styles.css"

const HomeReader =()=> {

  if(true){
    return (
      <div className='contained-HomeReader'>
          <div/>
          <div className='contained-UserSearch-grids'><UserSearch/></div>
          {false ? 
          <MessageSeacrhReader/> 
          :
          <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
            <CircularProgress/>
          </div>
          }
          <div/>
      </div>
    )
  }else{
    return(
      <div className='contained-HomeReader-response'>
        
        <Textarea color="neutral" minRows={2} />
       <div className='button-copy'>
       <Button className='res' variant="outlined">Copiar</Button>
       </div>
       
      </div>
    )
  }
  
}

export default HomeReader


