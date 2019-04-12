import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import GenOverview from './GenOverview';
import HostOverview from './HostOverview';
import NumberInfo from './NumberInfo';
import AmenitiesIcons from './AmenitiesIcons';
import Amenities from './Amenities';
// import Sleeping from './Sleeping';
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
      amenNot: [],
      amenIcon: [],
      // beds
      beds: {},
      // read states
      readMoreSum: false,
      showAmens: false,
    };
    this.getProperty = this.getProperty.bind(this);
    this.clickMoreSum = this.clickMoreSum.bind(this)
  }

  componentDidMount() {
    this.getProperty()
  }

  getProperty() {
    axios
      .get('/api/desc')
      .then((data) => {
        this.setState({
          propertyInfo: data.data[0].propertyInfo,
          host: data.data[0].host,
          beds: data.data[0].beds,
          numBaths: data.data[0].numBaths,
          summary: data.data[0].summary,
          amenList: data.data[0].amenities.basic,
          amenNot: data.data[0].amenities.notIncluded,
          amenIcon: data.data[0].amenities.iconUrl,
        })
      })
      .catch((err) => { console.error(err) })
  }

  clickMoreSum() {
    this.setState({
      readMoreSum: (!this.state.readMoreSum)
    })
  }

  render() {
    let { propertyInfo, host, beds, numBaths, summary, amenList, amenNot, amenIcon } = this.state;
    let amensClose = () => this.setState({ showAmens: false });
    return (
      <div>
        <div>
          <NavBar property={propertyInfo.title} location={propertyInfo.location} />
          <div id='overviewDiv' className={app.outermostDiv}>
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
                  readMoreSum={this.state.readMoreSum}
                  clickMoreSum={this.clickMoreSum} 
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
                  <Amenities
                    show={this.state.showAmens}
                    onHide={amensClose}
                    amenlist={amenList}
                    amennot={amenNot}
                  />
                  <a className={app.moreAmensLink} onClick={() => this.setState({ showAmens: true })}>Show all {amenList.length} amenities</a>
                </div>
              </div>
              <div className={app.divider}></div>
              <div className='sleepingArrangements'>
                <div>Sleeping arrangements</div>
                {/* <Sleeping beds={beds} /> */}
              </div>
              <div className={app.divider}></div>
              <div className='accessibility'>
                <div>Accessibility</div>

              </div>
              <div className={app.divider}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}