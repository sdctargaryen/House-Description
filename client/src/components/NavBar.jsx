import React from 'react';
import navbarstyle from './navbar.css';
import Save from './Save';
import Share from './Share';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // showing: false
      showShave: false,
      showSave: false
    }
  }
  
  clickOverview() {
    document.getElementById('overviewDiv').scrollIntoView(
      {behavior: 'smooth'}
    )
  }

  clickReviews() {
    document.getElementById('reviews').scrollIntoView(
      {behavior: 'smooth'}
    )
  }

  clickHost() {
    document.getElementById('hostInfo').scrollIntoView(
      {behavior: 'smooth'}
    )
  }

  clickLocation() {
    document.getElementById('neighborhood').scrollIntoView(
      {behavior: 'smooth'}
    )
  }

  clickPolicies() {
    document.getElementById('policies').scrollIntoView(
      {behavior: 'smooth'}
    )
  }

  render(){
    let shareClose = () => this.setState({ showShare: false });
    let saveClose = () => this.setState({ showSave: false });
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
          <span className={navbarstyle.navOptions} onClick={() => this.setState({ showShare: true })}><img className={navbarstyle.icons} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/share+icon.png'></img><a>Share</a></span>
          <Share
            show={this.state.showShare}
            onHide={shareClose}
            property={this.props.property}
            location={this.props.location}
          />
          <span className={navbarstyle.navOptions} onClick={() => this.setState({ showSave: true })}><img className={navbarstyle.icons} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/heart+icon.png'></img><a>Save</a></span>
          <Save
            show={this.state.showSave}
            onHide={saveClose}
            property={this.props.property}
            location={this.props.location}
          />
        </div>
      </div>
    )
  }
}