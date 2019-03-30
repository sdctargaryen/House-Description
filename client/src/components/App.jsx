import React from 'react';
import axios from 'axios';
import GenOverview from './GenOverview';
import HostOverview from './HostOverview';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      property: {},
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
        this.setState({ property: data.data[0] })
      })
      .catch((err) => {console.error(err)})
  }

  render(){
    let { propertyInfo, host, beds, numBaths, summary } = this.state.property;
    // console.log(this.state.property)
    return(
      <div className='outermostDiv'>
        <div className='bufferDiv'>
        <div></div>
        <div className='wrappingDiv'>
          <div className='immediateContainerDiv'>
            <div className='titleCityHost'>
              hello from react
              <HostOverview propertyInfo={propertyInfo} host={host} beds={beds} numBaths={numBaths} />
            </div>
            <div className='notsummary'>
              {/* <GenOverview summary={summary[1]} /> */}
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