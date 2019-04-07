import React from 'react';
import axios from 'axios';
import { Waypoint } from 'react-waypoint';
import NavBar from './NavBar';
import GenOverview from './GenOverview';
import HostOverview from './HostOverview';
import NumberInfo from './NumberInfo';
import app from './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyInfo: {},
      host: {},
      beds: {},
      numBaths: 0,
      summary: [],
      readMoreSum: false,
      readMoreAmen: false,
      readMoreAccess: false
    };
    this.getProperty = this.getProperty.bind(this);
    // this.clickMoreSum = this.clickMoreSum.bind(this)
  }

  componentDidMount() {
    this.getProperty()
  }

  getProperty() {
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
      .catch((err) => { console.error(err) })
  }

  // clickMoreSum() {
  //   if (this.state.readMoreSum === false) {
  //     document.getElementById('readMoreBody').style.display = 'flex';
  //     document.getElementById('link').innerHTML = 'Hide'
  //   } else {
  //     document.getElementById('readMoreBody').style.display = 'none'
  //     document.getElementById('link').innerHTML = 'Read more about the space'

  //   }
  //   this.setState({
  //     readMoreSum: (!this.state.readMoreSum)
  //   })

  // }

  render() {
    let { propertyInfo, host, beds, numBaths, summary } = this.state;
    // console.log(this.state.property)
    return (
      <div>
        <Waypoint
          onEnter={() => document.getElementById('waypointNavbar').style.display='flex'}
          onLeave={() => document.getElementById('waypointNavbar').style.display='none'}
          bottomOffset='98%'
        >
        <div>
          <NavBar />
          <div className={app.outermostDiv}>
            <Waypoint
              // onEnter={() => document.getElementById('navOverview').style.display='flex'}
              onEnter={() => Object.assign(document.getElementById('navOverview').style,
                {color:"black",fontWeight:"bold"})}
              onLeave={() => document.getElementById('navOverview').style.display='none'}
            >
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
                <GenOverview
                  summary={summary}
                  // readMoreSum={this.state.readMoreSum}
                  // clickMoreSum={this.clickMoreSum} 
                  />

              </div>
              <div className='description'>
                {summary.slice(1).forEach((paragraph, i) => {
                  return <GenOverview key={i} summary={paragraph} />
                })}
              </div>
              <div className='amenities'>


              </div>
              <div className='sleepingArrangements'>


              </div>
              <div className='accessibility'>


              </div>
            </div>
            </Waypoint>
          </div>
        </div>
        </Waypoint>
      </div>
    )
  }
}