import React, {useState,useEffect } from 'react'
import UserSearch from '../SVGAlura/UserSearch/UserSearch'
import MessageSeacrhReader from '../../Components/MessageSeacrhReader/MessageSeacrhReader'
import CircularProgress from '@mui/joy/CircularProgress';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';


import "./Assets/styles.css"

const HomeReader =({dataEncrypt})=> {

const valueEncrypt = dataEncrypt.length === 0 ?'test' : dataEncrypt.TextareaResult;
  

    

const [responseEncrypt, setResponseEncrypt] = useState([])

  useEffect(()=> {

    const handleLoadDataEncrypt = async ()=>{
      const encrypt = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
       let newValue = valueEncrypt.toLowerCase()
   

  for(let i = 0; i < encrypt.length; i++ ){
    if(newValue.includes(encrypt[i][0])){
      newValue = newValue.replaceAll(encrypt[i][0], encrypt[i][1])
    }
  }
  setResponseEncrypt(newValue)

  
    }

    handleLoadDataEncrypt()
    
                  });
                
                  console.log(responseEncrypt)



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
            <p>{responseEncrypt}</p>
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


