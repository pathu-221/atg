import React from 'react'


import './backdrop.styles.scss';

function Backdrop({ children }) {

    console.log(children)
  return (
    <div className='backdrop'>
        { children }
    </div>
  )
}

export default Backdrop;