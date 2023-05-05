import React, {useState,useEffect } from 'react'
import UserSearch from '../SVGAlura/UserSearch/UserSearch' /* USER ICON */
import MessageSeacrhReader from '../../Components/MessageSeacrhReader/MessageSeacrhReader'
import CircularProgress from '@mui/joy/CircularProgress';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard'; /* COPY TEXT */

import "./Assets/styles.css"

const HomeReader =({dataEncrypt, dataDecrypt, encryptOrDecrypt, openLabel})=> {


 /*  SAVING PROPS AND VALIDATIONS */
const valueDecrypt = dataDecrypt.length === 0 ?'tenterst' : dataDecrypt.TextareaResult;
const valueEncrypt = dataEncrypt.length === 0 ?'test' : dataEncrypt.TextareaResult;
const [responseEncrypt, setResponseEncrypt] = useState([])
const [responseDecrypt, setResponseDecrypt] = useState([])

/* --------------------ENCRYPTION --------------------------*/
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
  /*-------------------- DECRIPTER-------------------------- */
  useEffect(()=> {
    const handleLoadDataDecrypt = async ()=>{
    const decrypt = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
      let newV = valueDecrypt.toLowerCase()
  for(let i = 0; i < decrypt.length; i++ ){
    if(newV.includes(decrypt[i][1])){
      newV = newV.replaceAll( decrypt[i][1], decrypt[i][0])
    }
  }
  setResponseDecrypt(newV)
  }
  handleLoadDataDecrypt()
  });

  /* VALIDATIONS OPEN TEXTAREA OR POP-UP ALERT */
  const validateEncryptOpen = openLabel=== true && responseEncrypt !== 'tenterst' ? true : false
  const validateDecryptOpen = openLabel=== true && responseDecrypt !== 'test' ? true : false
  const validateTextareaOpen = validateEncryptOpen || validateDecryptOpen ? true : false
  const openOrClose = validateTextareaOpen === false ? true : false

  if(openOrClose){
    return (
      <div className='contained-HomeReader'>
          <div/>
          <div className='contained-UserSearch-grids'><UserSearch/></div>
          {dataEncrypt.length !== 0 || dataDecrypt.length !== 0  ? 
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
{/* CONDITIONAL SAMPLE BOARD */}
{encryptOrDecrypt === false? 
       <>
{/*-------- SAMPLE BOARD ----------*/}
        <Textarea 
        value={responseEncrypt}
        disabled
        color="neutral" minRows={2} />
{/*-----------------  COPY TEXT---------------- */}
       <div className='button-copy'>
          <CopyToClipboard text={responseEncrypt}>
              <Button className='res' variant="outlined">Copiar</Button>
          </CopyToClipboard>
        </div>

       </>
:
          <>
{/*-------- SAMPLE BOARD ----------*/}
          <Textarea 
        value={responseDecrypt}
        disabled
        color="neutral" minRows={2} />
{/*-----------------  COPY TEXT---------------- */}
       <div className='button-copy'>
          <CopyToClipboard text={responseDecrypt}>
              <Button className='res' variant="outlined">Copiar</Button>
          </CopyToClipboard>
        </div>

          </>
}
       </div>  
    )
  }
  
}

export default HomeReader


