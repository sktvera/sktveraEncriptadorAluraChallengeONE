import React, {useState} from 'react'
import HomeWriter from '../../Components/HomeWriter/HomeWriter'
import HomeReader from '../../Components/HomeReader/HomeReader'
import "./Assets/styles.css"

const Home =()=> {
  const [dataEncrypt, setDataEncrypt] = useState([]) /*ENCRYPTOR DATA */
  const [dataDecrypt, setDataDecrypt] = useState([]) /*DECRIPTER DATA */

  /*COMPONENT VALIDATION HomeReader OPEN TEXTAREA*/
  const [encryptOrDecrypt, setEncryptOrDecrypt] = useState(false) 
  const [openLabel, setOpenLabel] = useState(false)
/*---------------END-------------------------------*/

  return (
    <div className='contained-home'>
    <HomeWriter 
    setDataEncrypt={setDataEncrypt}
    setDataDecrypt={setDataDecrypt}
    setEncryptOrDecrypt={setEncryptOrDecrypt}
    setOpenLabel={setOpenLabel}
    />
    <div className='HomeReader-media'>
    <HomeReader 
    dataEncrypt={dataEncrypt}
    dataDecrypt={dataDecrypt}
    encryptOrDecrypt={encryptOrDecrypt}
    openLabel={openLabel}
    />
    </div>
   
    </div>
  )
}

export default Home