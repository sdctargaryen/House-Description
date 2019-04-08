import React from 'react';
import navbarstyle from './navbar.css';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showing: false
    }
    this.clickOverview = this.clickOverview.bind(this)
  }
  
  clickOverview() {
    document.getElementById('overviewDiv').scrollIntoView()
  }

  clickReviews() {
    document.getElementById('reviews').scrollIntoView()
  }

  clickHost() {
    document.getElementById('hostInfo').scrollIntoView()
  }

  clickLocation() {
    document.getElementById('neighborhood').scrollIntoView()
  }

  clickPolicies() {
    document.getElementById('policies').scrollIntoView()
  }

  render(){
  
    return(
      <div id='waypointNavbar' className={navbarstyle.navBar}>
        <div className={navbarstyle.navOptionsGroup}>
          <span id='navOverview' className={navbarstyle.navOptions}><a onClick={() => this.clickOverview()}>Overview</a></span>·
          <span id='navReviews' className={navbarstyle.navOptions}><a onClick={() => this.clickReviews()}>Reviews</a></span>·
          <span id='navHost' className={navbarstyle.navOptions}><a onClick={() => this.clickHost()}>The Host</a></span>·
          <span id='navLocation' className={navbarstyle.navOptions}><a onClick={() => this.clickLocation()}>Location</a></span>·
          <span id='navPolicies' className={navbarstyle.navOptions}><a onClick={() => this.clickPolicies()}>Policies</a></span>
        </div>
        <div className='rightBtns'>
          <span className={navbarstyle.navOptions}><img className={navbarstyle.icons} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/share+icon.png'></img><a>Share</a></span>
          <span className={navbarstyle.navOptions}><img className={navbarstyle.icons} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/heart+icon.png'></img><a>Save</a></span>
        </div>
      </div>
    )
  }
}