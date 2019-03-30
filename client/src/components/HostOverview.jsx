import React from 'react';
  
const HostOverview = (props) => {
  let { propertyInfo, host, beds, numBaths } = props;
   return(
    <div>
      <div>
        <div className='name'>
          {propertyInfo.title}
        </div>
        <div className='host'>
          <div>
            {/* host image */}
            <div>
              {/* <img src={host.pictureUrl}></img>*/}
            </div>
            <div className='hostName'>
              {host.name}
            </div>

          </div>
          
        </div>
      </div>

      {numBaths}
    </div>
  )
}

export default HostOverview