import React, {useState } from 'react'

import Textarea from '@mui/joy/Textarea';
import IconAlura from '../SVGAlura/IconAlura/IconAlura'
import IconAlert from '../SVGAlura/IconAlert/IconAlert'

import Button from '@mui/material/Button';


import "./Assets/styles.css"

const HomeWriter =({setDataEncrypt})=> {



  const [dataTextarea, setTextarea] = useState({})

 

const handleTextareaResult = (event)=>{


  const value= event.target.value

  setTextarea({
    ...dataTextarea,
    [event.target.name]:value
  })
}

const habldeSaveData = async (encrypt)=>{

   setDataEncrypt(dataTextarea)
}





  return (
   <>
      <form
      onSubmit={(event) => {
      event.preventDefault();
      }}
      >
          <div className='contained-HomeWriter'>
            <div className='IconAlura'>
                  <IconAlura/>
            </div>
            <div className='TextareaWriter'>
                  <Textarea
                    placeholder='Ingrese el texto aqui'
                    name='TextareaResult'
                    onChange={handleTextareaResult}
                   />
            </div>
            <div className='ButtonsAndLabel'>
              <div className='ButtonsAndLabel-child'>
              <div className='label-item'>
                <div><IconAlert/></div>
                <div className='label-element'><p>Solo letras minúsculas y sin acentos</p></div>
              </div>
              <div className='ButtonsGrids'>
                <Button  
                onClick={habldeSaveData}  
                className='req' 
                variant="contained"
                >
                  <p>Encriptar</p>
                </Button>
                <Button className='res'  variant="outlined"><p>Desencriptar</p></Button>
              </div>
              </div>
            </div>
          </div>
      </form>
   </>
  )
}

export default HomeWriter