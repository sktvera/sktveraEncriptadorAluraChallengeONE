import Textarea from '@mui/joy/Textarea';
import IconAlura from '../SVGAlura/IconAlura/IconAlura'
import IconAlert from '../SVGAlura/IconAlert/IconAlert'

import Button from '@mui/material/Button';


import "./Assets/styles.css"

const HomeWriter =()=> {
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
                  <Textarea placeholder='Ingrese el texto aqui'  />
            </div>
            <div className='ButtonsAndLabel'>
              <div className='ButtonsAndLabel-child'>
              <div className='label-item'>
                <div><IconAlert/></div>
                <div className='label-element'><p>Solo letras minúsculas y sin acentos</p></div>
              </div>
              <div className='ButtonsGrids'>
                <Button className='req' variant="contained"><p>Encriptar</p></Button>
                <Button className='res' variant="outlined"><p>Desencriptar</p></Button>
              </div>
              </div>
            </div>
          </div>
      </form>
   </>
  )
}

export default HomeWriter