import React from 'react'

import './custominput.styles.scss';
function CustomInput({ placeholder, name, onChange}) {
  return (
    <>
      <input name={ name } placeHolder = { placeholder} />  
    </>
  )
}

export default CustomInput