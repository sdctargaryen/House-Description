import React from 'react';
import navbarstyle from './navbar.css';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showing: false
    }
  }
  
  clickOverview() {

  }

  clickReviews() {

  }

  clickHost() {

  }

  clickLocation() {

  }

  clickPolicies() {
    
  }

  render(){
  
    return(
      <div id='waypointNavbar' className={navbarstyle.navBar}>
        <div>
          <span id='navOverview' className={navbarstyle.navOptions}><a href="#">Overview</a></span>·
          <span id='navReviews' className={navbarstyle.navOptions}><a href="#">Reviews</a></span>·
          <span id='navHost' className={navbarstyle.navOptions}><a href="#">The Host</a></span>·
          <span id='navLocation' className={navbarstyle.navOptions}><a href="#">Location</a></span>·
          <span id='navPolicies' className={navbarstyle.navOptions}><a href="#">Policies</a></span>
        </div>
        <div className='rightBtns'>
          <span className={navbarstyle.navOptions}>Share</span>
          <span className={navbarstyle.navOptions}>Save</span>
        </div>
      </div>
    )
  }
}