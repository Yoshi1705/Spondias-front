import React from 'react'
import './info.css';
function Info(props) {
  return (
    <div>
        <div className='header'>
            <h3>{props.name}</h3>
            
        </div>
        <div className="underline mx-auto"></div>

        <div className='des'>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Info