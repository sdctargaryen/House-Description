import React from 'react';
import axios from 'axios';
import { Waypoint } from 'react-waypoint';
import NavBar from './NavBar';
import GenOverview from './GenOverview';
import HostOverview from './HostOverview';
import NumberInfo from './NumberInfo';
import AmenitiesIcons from './AmenitiesIcons';
import Sleeping from './Sleeping';
import app from './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // overview
      propertyInfo: {},
      host: {},
      numBaths: 0,
      summary: [],
      // amenities
      amenList: [],
      // amenNot: [],
      amenIcon: [],
      // beds
      beds: {},
      // read states
      // readMoreSum: false,
      showAmens: false,
      // readMoreAccess: false
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
          summary: data.data[0].summary,
          amenList: data.data[0].amenities.basic,
          amenNot: data.data[0].amenities.notIncluded,
          amenIcon: data.data[0].amenities.iconUrl,
        }, () => {console.log(this.state.amenIcon)})
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
    let { propertyInfo, host, beds, numBaths, summary, amenList, amenIcon } = this.state;
    // console.log('in renderrrrrrr', amenIcon)
    return (
      <div>
        <Waypoint
          onEnter={() => document.getElementById('waypointNavbar').style.display='flex'}
          onLeave={() => document.getElementById('waypointNavbar').style.display='none'}
          bottomOffset='98%'
        >
        <div>
          <NavBar />
          <div id='overviewDiv' className={app.outermostDiv}>
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
              <div className={app.divider}></div>
              <div className='amenities'>
                <div>Amenities</div>
                <div className={app.amenIconContainer}>
                  <AmenitiesIcons amenitiesIcons={amenIcon} />
                  {/* <Amenities /> */}
                  {/* <Amenities
                    show={this.state.showAmens}
                    onHide={amensClose}
                    //   embedClick() {
                    //   this.setState({
                    //     showShare: false,
                    //     showEmbed: true
                    //   });
                    // }
                    embedClick={this.embedClick}
                  /> */}
                  <a className={app.moreAmensLink}>Show all {amenList.length} amenities</a>
                </div>
              </div>
              <div className={app.divider}></div>
              <div className='sleepingArrangements'>
                <div>Sleeping arrangements</div>
                <Sleeping />
              </div>
              <div className={app.divider}></div>
              <div className='accessibility'>
                <div>Accessibility</div>

              </div>
              <div className={app.divider}></div>
            </div>
            </Waypoint>
          </div>
        </div>
        </Waypoint>
      </div>
    )
  }
}