import React from 'react';
import numberinfo from './numberinfo.css';
  
const NumberInfo = (props) => {
  let guests = '';
  let bedCount = '';
  let roomCount = '';
  let bathCount = '';
  if (props.beds > 1){
    bedCount = `${props.beds} beds`;
    roomCount = `${props.beds} rooms`
  } else {
    bedCount = `${props.beds} bed`;
    roomCount = `${props.beds} room`
  };
  if (props.numGuests > 1) {
    guests = `${props.numGuests} guests`
  } else {
    guests = `${props.numGuests} guest`
  };
  if (props.numBaths > 1) {
    bathCount = `${props.numBaths} baths`
  } else {
    bathCount = `${props.numBaths} bath`
  };

   return(
    <div className={numberinfo.numberContainer}>
      {/* 24 x 44 */}
      <div className={numberinfo.icon}> {/* house icon by font */} </div>
      <div>
        <div className='propType'>
          {props.propertyType}
        </div>
        <div className='theNumbers'>
          <span>{guests} </span>
          <span>{roomCount} </span>
          <span>{bedCount} </span>
          <span>{bathCount}</span>
        </div>
      </div>
    </div>
  )
}
// requires a grey bottom border
export default NumberInfo