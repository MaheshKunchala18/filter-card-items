import React, { useState } from 'react'
import './Card.css'

const Card = (props) => {
    let val = props.val;
    const [body, setBody] = useState(false);
    const [icon, setIcon] = useState('v');

    const handleTrigger = () => {
        if(!body) {
            setIcon('^');
            setBody(true);
        } else {
            setIcon('v');
            setBody(false);
        }
    }

    const handleEdit = () => {
        
    }

    const handleDelete = () => {
        
    }


  return (
    <div className='card'>
      <div className='flex'>
        <img src={val.picture} alt="person" />
        <h3> {val.first} {val.last} </h3>
        <button onClick={handleTrigger} className={(body) ? 'open trigger' : 'close trigger'}> {icon} </button>
      </div>

      <div className={(body) ? 'card-body-show' : 'card-body-hide'}>
        <div className='flex'>
            <p> Age </p>
            <p> Gender </p>
            <p> Country </p>
        </div>
        <div className='flex'>
            <p style={{marginLeft: '5%'}}> {(val) ? 2024 - Number(val.dob.slice(0, 4)) : ''} </p>
            <p> {val.gender} </p>
            <p> {val.country} </p>
        </div>
        <h4> Description </h4>
        <p className='desc'> {val.description} </p>

        <button onClick={handleEdit}> Edit </button>
        <button onClick={handleDelete}> Delete </button>
      </div>

    </div>
  )
}

export default Card
