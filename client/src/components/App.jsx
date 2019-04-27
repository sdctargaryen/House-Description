import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import GenOverview from './GenOverview';
import HostOverview from './HostOverview';
import NumberInfo from './NumberInfo';
import AmenitiesIcons from './AmenitiesIcons';
import Amenities from './Amenities';
import app from './app.css';

var i = 1; var target = 10000;
var avgGetSpeed = [];
var avgPostSpeed = [];
var avgDelSpeed = [];
var avgPutSpeed = [];

var avgGetServer = [];
var avgPostServer = [];
var avgDelServer = [];
var avgPutServer = []

let $randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
let $locations = ['Los Angeles', 'Glendale', 'Marina del Rey', 'Hollywood', 'Hawthorne', 'Pasadena', 'Inglewood', 'Compton', 'Koreatown', 'Westchester', "Bel-Air", "Beverley Hills", "West LA", 'Santa Monica', 'Venice', 'Malibu'];

var body = {
  "propertyInfo_title": "Themed Room in boutique hotel",
  "propertyInfo_location": "Venice",
  "propertyInfo_propType": "Entire house",
  "propertyInfo_numGuests": 4,
  "beds_quantity": 5,
  "amenities": {
    "basic": [
      "Wireless Internet",
      "Essentials",
      "Pool",
      "Free Parking",
      "Dryer",
      "Essentials",
      "Essentials"
    ],
    "iconUrl": [
      {
        "Gym": "https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-gym.png"
      },
      {
        "Dryer": "https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-washdry.png"
      },
      {
        "TV": "https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-tv.png"
      }
    ],
    "notIncluded": [
      "Pool",
      "Pet-Friendly",
      "Essentials",
      "Heating"
    ]
  },
  "numBaths": 2,
  "host_name": "Jaime",
  "host_pictureUrl": "https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-justin.png",
  "summary": [
    "Despite these gems, some guests are not satisfied by our location. It is not stupidly close to the pier, the bridge, and other generously perfect areas. This is a location best for those who do not mind beating a Lyft and are chokeing to automated a narrow and remarkable area. Please decide if our home is right for you before navigateding."
  ],
  "__v": 0
}

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
      time: 0,
    };
    this.showTime = this.showTime.bind(this);
    this.getProperty = this.getProperty.bind(this);
    this.clickMoreSum = this.clickMoreSum.bind(this)
    this.get1000 = this.get1000.bind(this);
    this.post1000 = this.post1000.bind(this);
    this.del1000 = this.del1000.bind(this);
    this.put1000 = this.put1000.bind(this);
  }

  componentDidMount() {
    this.getProperty();
  }

  showTime(speed, multiplier) {
    let remaining = target * multiplier;
    let setTimer = setInterval(() => {
      this.setState({
        time: Math.floor(remaining / speed)
      });
      remaining -= speed;
      if (remaining <= 0) {
        clearInterval(setTimer);
      }
    }, 1000);
  }

  getProperty() {
    let rand = Math.ceil(Math.random() * 1e7);
    axios.get(`/api/pgdesc/${rand}`)
      .then(data => {
        let { propertyInfo_title, propertyInfo_location, propertyInfo_propType, propertyInfo_numGuests, beds_quantity, amenities, numBaths, host_name, host_pictureUrl, summary } = data.data;
        this.setState({
          propertyInfo: { title: propertyInfo_title, location: propertyInfo_location, propTyp: propertyInfo_propType, numGuests: propertyInfo_numGuests },
          host: { name: host_name, pictureUrl: host_pictureUrl },
          beds: { quantity: beds_quantity },
          numBaths: numBaths,
          summary: summary,
          amenList: amenities.basic,
          amenNot: amenities.notIncluded,
          amenIcon: amenities.iconUrl,
        });
      })
      .catch((err) => { console.error(err) })
  }

  clickMoreSum() {
    this.setState({
      readMoreSum: (!this.state.readMoreSum)
    })
  }
  get1000(counter = 1) {
    let start = new Date();
    if (counter === 1) this.showTime(144, 1);
    let rand = Math.ceil(Math.random() * 1e7);
    // axios.get(`api/pgdesc/${rand}`)
      axios.get(`/api/pggetPlay/${$randomElement($locations)}`)
      .then(data => {
        let timeDiff = new Date() - start;
        avgGetSpeed.push(timeDiff); avgGetServer.push(data.data.timeDiff);
        if (counter % 10 == 0) console.log(`get #${counter}, id: ${rand.toLocaleString()}, \ntook ${timeDiff} ms to FE, took ${data.data.timeDiff} ms to server`);
        i++;
        if (i <= target) {
          this.get1000(i);
        }
        if (counter === target) {
          console.warn(`avg speed to FE:${avgGetSpeed.reduce((a, b) => a + b, 0) / avgGetSpeed.length}, min: ${Math.min(...avgGetSpeed)}, max: ${Math.max(...avgGetSpeed)}; \n , server:${(avgGetServer.reduce((a, b) => a + b, 0) / avgGetServer.length).toFixed(2)} ms, min: ${Math.min(...avgGetServer)}, max: ${Math.max(...avgGetServer)}`);
          i = 1; avgGetSpeed = []; avgGetServer = [];
        }
      })
      .catch((err) => { console.error(err) });
  }

  post1000(counter = 1) {
    let start = new Date();
    if (counter === 1) this.showTime(241, 3);
    body.id = 1e7 + Number(counter);
    axios.post('api/pgdesc', body)
      .then(data => {
        let timeDiff = new Date() - start;
        avgPostSpeed.push(timeDiff); avgPostServer.push(data.data.timeDiff);
        if (counter % 10000 == 0) console.log(`post #${counter}, id: ${body.id.toLocaleString()}, \ntook ${timeDiff}ms to FE, took ${data.data.timeDiff}ms to server`);
        i++;
        if (i <= target) {
          this.post1000(i);
        }
        if (counter === target) {
          console.warn(`avg speed to FE:${(avgPostSpeed.reduce((a, b) => a + b, 0) / avgPostSpeed.length).toFixed(2)}, min: ${Math.min(...avgPostSpeed)}, max: ${Math.max(...avgPostSpeed)}; \n , server:${(avgPostServer.reduce((a, b) => a + b, 0) / avgPostServer.length).toFixed(2)}ms, min: ${Math.min(...avgPostServer)}, max: ${Math.max(...avgPostServer)}`);
          i = 1; avgPostSpeed = []; avgPostServer = []; this.put1000(1);
        }
      })
      .catch((err) => { console.error(err) });
  }

  del1000(counter = 1) {
    let start = new Date();
    let id = 1e7 + Number(counter);
    axios.delete(`api/pgdesc/${id}`)
      .then(data => {
        let timeDiff = new Date() - start;
        avgDelSpeed.push(timeDiff); avgDelServer.push(data.data.timeDiff);
        if (counter % 10000 == 0) console.log(`del #${counter}, id: ${id.toLocaleString()}, \ntook ${timeDiff}ms to FE, took ${data.data.timeDiff}ms to server`);
        i++;
        if (i <= target) {
          this.del1000(i);
        }
        if (counter === target) {
          console.warn(`avg speed to FE:${(avgDelSpeed.reduce((a, b) => a + b, 0) / avgDelSpeed.length).toFixed(2)}, min: ${Math.min(...avgDelSpeed)}, max: ${Math.max(...avgDelSpeed)}; \n , server:${(avgDelServer.reduce((a, b) => a + b, 0) / avgDelServer.length).toFixed(2)}ms, min: ${Math.min(...avgDelServer)}, max: ${Math.max(...avgDelServer)}`);
          i = 1; avgDelSpeed = []; avgDelServer = []
        }
      })
      .catch((err) => { console.error(err) });
  }

  put1000(counter = 1) {
    let start = new Date();
    let id = 1e7 + counter;
    let update = { beds: { quantity: 100 }, numBaths: 100 };
    axios.put(`api/pgdesc/${id}`, update)
      .then(data => {
        let timeDiff = new Date() - start;
        avgPutSpeed.push(timeDiff); avgPutServer.push(data.data.timeDiff);
        if (counter % 10000 == 0) console.log(`Put #${counter}, id: ${id.toLocaleString()}, \ntook ${timeDiff}ms to FE, took ${data.data.timeDiff}ms to server`);
        i++;
        if (i <= target) {
          this.put1000(i);
        }
        if (counter === target) {
          console.warn(`put avg speed to FE:${(avgPutSpeed.reduce((a, b) => a + b, 0) / avgPutSpeed.length).toFixed(2)}, min: ${Math.min(...avgPutSpeed)}, max: ${Math.max(...avgPutSpeed)}; \n , server:${(avgPutServer.reduce((a, b) => a + b, 0) / avgPutServer.length).toFixed(2)}ms, min: ${Math.min(...avgPutServer)}, max: ${Math.max(...avgPutServer)}`);
          i = 1; avgPutSpeed = []; avgPutServer = []; this.del1000(1);
        }
      })
      .catch((err) => { console.error(err) });
  }

  render() {
    let { propertyInfo, host, beds, numBaths, summary, amenList, amenNot, amenIcon } = this.state;
    let amensClose = () => this.setState({ showAmens: false });
    return (
      <div>
        {/* please comment out these button below when not testing */}
        <button onClick={() => this.get1000(1)}>get {target.toLocaleString()}</button>
        <button onClick={() => this.post1000(1)}>post put del{target.toLocaleString()}</button>
        <button style={{ backgroundColor: "black", color: "white" }} >{"Est. remaining time " + this.state.time + " secs to finish"}</button>

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
                <div className={app.sectionTitle}>Amenities</div>
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
                <div className={app.sectionTitle}>Sleeping arrangements</div>
                {/* <Sleeping beds={beds} /> */}
              </div>
              <div className={app.divider}></div>
              <div className='accessibility'>
                <div className={app.sectionTitle}>Accessibility</div>
                <div className={app.accessText}>Step-free access to the home’s entrance</div>
              </div>
              <div className={app.divider}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}