import React from 'react';
import hostStyle from './host.css';

const HostOverview = (props) => {
  let { propertyInfo, host, beds, numBaths } = props;
    return (
      <div className={hostStyle.topContainer}>
        <div className='titleContainer'>
          <div className={hostStyle.propertyName}>
            {propertyInfo.title}
          </div>
          <div className={hostStyle.cityName}>
            {propertyInfo.location}
          </div>
        </div>
        <div className='hostContainer'>
          <div className={hostStyle.hostImg}>
          {/* host image */}
            <img className={hostStyle.hostImg} src={host.pictureUrl}></img>
            {/* <img className={hostStyle.hostImg} src='https://a0.muscache.com/im/pictures/cc41b0d2-f443-4c45-9dba-7dd52b5742c6.jpg?aki_policy=profile_x_medium'></img> */}
          </div>
          <div className='hostName'>
            {host.name}
          </div>
        </div>
      </div>
    )
}

export default HostOverview