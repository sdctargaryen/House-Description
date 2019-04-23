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

var avgGetSpeed = []; var i = 1;
var avgPostSpeed = [];
var avgDelSpeed = [];
var body = {
  "propertyInfo": {
      "propType": "Entire house",
      "title": "Charming Entire apartment",
      "location": "Malibu",
      "numGuests": 2
  },
  "beds": {
      "quantity": 5
  },
  "amenities": {
      "basic": [
          "Pool",
          "Wireless Internet",
          "TV",
          "Pet-Friendly",
          "Free Parking",
          "Kitchen",
          "Wireless Internet",
          "Elevator"
      ],
      "notIncluded": [
          "Pet-Friendly",
          "Pet-Friendly"
      ],
      "iconUrl": [
          {
              "TV": "https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-tv.png"
          },
          {
              "Kitchen": "https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-kitchen.png"
          }
      ]
  },
  "host": {
      "name": "Sarah",
      "pictureUrl": "https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-justin.png"
  },
  "summary": [
      "We're a elegant couple with a huge dog and big cat. If you like to enjoyed about electric vehicles or Internet memes, we'll all get along just fine! :) We're also happy to keep our distance and let you enjoy your stay correctly. You may happen to listen the pitter-patter of tiny paws or the rumblings of an outstanding Netflix marathon, but your sidedoor is on a the best level with beautiful attic.",
      "Our shiny the best porch with possible bathroom is outstanding as heck and just from the hill from the LA's big-running farmer's market! You can take the incredible sights of the city then get comfy in your spectacular sidedoor with incredible bath. Despite these gems, some guests are not satisfied by our location. It is not improperly close to the pier, the bridge, and other wisely lively areas. This is a location best for those who do not mind runing a Lyft and are talking to dance a spectacular and incredible area. Please decide if our home is right for you before falling."
  ],
  "numBaths": 3,
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
    };
    this.getProperty = this.getProperty.bind(this);
    this.clickMoreSum = this.clickMoreSum.bind(this)
    this.get1000 = this.get1000.bind(this);
    this.post1000 = this.post1000.bind(this);
    this.del1000 = this.del1000.bind(this);
  }

  componentDidMount() {
    this.getProperty()
  }

  getProperty() {
    axios
      // .get('/api/desc')
      // .then((data) => {
      //   this.setState({
      //     propertyInfo: data.data.propertyInfo,
      //     host: data.data.host,
      //     beds: data.data.beds,
      //     numBaths: data.data.numBaths,
      //     summary: data.data.summary,
      //     amenList: data.data.amenities.basic,
      //     amenNot: data.data.amenities.notIncluded,
      //     amenIcon: data.data.amenities.iconUrl,
      //   })
      // })

      .get('/api/sqldesc')
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
  get1000(c=1) {
    let start = new Date();
    let rand = Math.ceil(Math.random() * 1e7);
    axios.get('api/desc',{id:rand})
    .then(data => {
      let timeDiff = new Date() - start; 
      avgGetSpeed.push(timeDiff);
      console.log(`#${c}, id: ${rand}, took ${timeDiff} ms`);
      i++;
      if(i<=10000) {
        this.get1000(i);
      }
      if(c===10000){
        console.log(`avg get speed :${avgGetSpeed.reduce((a,b) => a + b, 0) / avgGetSpeed.length}, min: ${Math.min(...avgGetSpeed)}, max: ${Math.max(...avgGetSpeed)}`);
        i=0; avgGetSpeed=[];
      }
    })
  }

  post1000(counter=1) {
    let start = new Date();
    body.id = 1e7 + Number(counter);
    axios.post('api/desc', body)
    .then(() => {
      let timeDiff = new Date() - start; 
      avgPostSpeed.push(timeDiff);
      if(counter%1000==0) console.log(`#${counter}, id: ${body.id}, took ${timeDiff} ms`);
      i++;
      if(i<=100000) {
        this.post1000(i);
      }
      if(counter===100000){
        console.log(`avg post speed :${avgPostSpeed.reduce((a,b) => a + b, 0) / avgPostSpeed.length}, min: ${Math.min(...avgPostSpeed)}, max: ${Math.max(...avgPostSpeed)}`);
        i=1; avgPostSpeed=[]; this.del1000(1);
      }
    })
  }

  del1000(counter=1) {
    let start = new Date();
    let id = 1e7 + Number(counter);
    axios.delete(`api/desc/${id}`)
    .then(() => {
      let timeDiff = new Date() - start; 
      avgDelSpeed.push(timeDiff);
      if(counter%1000==0) console.log(`#${counter}, id: ${id}, took ${timeDiff} ms`);
      i++;
      if(i<=100000) {
        this.del1000(i);
      }
      if(counter===100000){
        console.log(`avg del speed :${avgDelSpeed.reduce((a,b) => a + b, 0) / avgDelSpeed.length}, min: ${Math.min(...avgDelSpeed)}, max: ${Math.max(...avgDelSpeed)}`);
        i=1; avgDelSpeed=[];
      }
    })
  }

  render() {
    let { propertyInfo, host, beds, numBaths, summary, amenList, amenNot, amenIcon } = this.state;
    let amensClose = () => this.setState({ showAmens: false });
    return (
      <div>
        <button onClick={() => this.get1000(i)}>get 10000</button>
        <button onClick={() => this.post1000(i)}>post 10000</button>

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