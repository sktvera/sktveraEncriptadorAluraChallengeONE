import React, {useState } from 'react'
import Textarea from '@mui/joy/Textarea';
import IconAlura from '../SVGAlura/IconAlura/IconAlura'
import IconAlert from '../SVGAlura/IconAlert/IconAlert'
import Button from '@mui/material/Button';

import "./Assets/styles.css"

const HomeWriter =({setDataEncrypt, setDataDecrypt, setEncryptOrDecrypt, setOpenLabel})=> {

  /* SAVING TEXTAREA INFORMATION */
  const [dataTextarea, setTextarea] = useState({})
  const handleTextareaResult = (event)=>{
  const value= event.target.value
  setTextarea({
    ...dataTextarea,
    [event.target.name]:value
  })
}
/* DATA AND VALIDATIONS OF THE ENCRYPTER */
const habldeSaveData = ()=>{
   setDataEncrypt(dataTextarea)
   setEncryptOrDecrypt(false)
   setOpenLabel(true)
}
/* DATA AND VALIDATIONS OF THE DECRIPTER */
const habldeSaveD = ()=>{
  setEncryptOrDecrypt(true)
  setDataDecrypt(dataTextarea)
  setOpenLabel(true)
}

  return (
   <>
      <form
      onSubmit={(event) => {
      event.preventDefault();
      }}
      >
          <div className='contained-HomeWriter'>
{/*---------  ALURA ICON --------------*/}
            <div className='IconAlura'>
                  <IconAlura/>
            </div>
{/*------------  ENCRYPTION OR DECRYPTION-------------- */}
            <div className='TextareaWriter'>
                  <Textarea
                    placeholder='Ingrese el texto aqui'
                    name='TextareaResult'
                    onChange={handleTextareaResult}
                   />
            </div>

 {/*-----------  BUTTONS ---------------*/}
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

                        <Button 
                        className='res'
                        onClick={habldeSaveD}
                        variant="outlined">
                          <p>Desencriptar</p>
                        </Button>

                    </div>
                </div>
            </div>
          </div>
      </form>
   </>
  )
}

export default HomeWriter