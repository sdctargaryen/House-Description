import React from 'react';
import axios from 'axios';
import GenOverview from './GenOverview';
import HostOverview from './HostOverview';
import NumberInfo from './NumberInfo';
import app from './app.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      propertyInfo: {},
      host: {},
      beds: {},
      numBaths: 0,
      summary: [],
      readMore: false
    }
    this.getProperty = this.getProperty.bind(this)
  }

  componentDidMount(){
    this.getProperty()
  }
  
  getProperty(){
    axios
      .get('/api')
      .then((data) => {
        // console.log(data.data[0])
        this.setState({ 
          propertyInfo: data.data[0].propertyInfo,
          host: data.data[0].host,
          beds: data.data[0].beds,
          numBaths: data.data[0].numBaths,
          summary: data.data[0].summary
        })
      })
      .catch((err) => {console.error(err)})
  }

  render(){
    let { propertyInfo, host, beds, numBaths, summary } = this.state;
    // console.log(this.state.property)
    return(
      <div className={app.outermostDiv}>
        <div className='bufferDiv'>
        <div className='wrappingDiv'>
          <div className='immediateContainerDiv'>
            <div className='titleCityHost'>
              <HostOverview propertyInfo={propertyInfo} host={host} />
            </div>
            <div>
              <NumberInfo 
                beds={beds.quantity} 
                numBaths={numBaths} 
                propertyType={propertyInfo.propType}
                numGuests={propertyInfo.numGuests} />
            </div>
            <div className={app.divider}></div>
            <div className='notsummary'>
              <GenOverview summary={summary} />
            </div>
            <div className='description'>
              {/* {summary.slice(1).forEach((paragraph, i)  => {
                < />
              })} */}
            </div>
            <div className='amenities'>
            
            
            </div>
            <div className='sleepingArrangements'>

            </div>
            <div className='accessibility'>

            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}