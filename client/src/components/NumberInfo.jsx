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
      <div className={numberinfo.icon}> 
      <img className={numberinfo.houseIcon} src='https://s3-us-west-1.amazonaws.com/airbnb-icons-png/font_icons/house.png'></img>
      </div>
      <div>
        <div className='propType'>
          {props.propertyType}
        </div>
        <div className='theNumbers'>
          <span className={numberinfo.detail}>{guests} </span>
          <span className={numberinfo.detail}>{roomCount} </span>
          <span className={numberinfo.detail}>{bedCount} </span>
          <span className={numberinfo.detail}>{bathCount}</span>
        </div>
      </div>
    </div>
  )
}
// requires a grey bottom border
export default NumberInfo