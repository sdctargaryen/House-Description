import React from 'react';
import navbarstyle from './navbar.css';
import axios from 'axios';
import Save from './Save';
import Share from './Share';
import EmbedModal from './EmbedModal';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showShave: false,
      showSave: false,
      showEmbed: false,
      currentScrollHeight: 0
    }
    this.openEmbedModal = this.openEmbedModal.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      this.setState({currentScrollHeight: window.scrollY});
    })
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

  openEmbedModal(){
    this.setState({
      showEmbed: true
    })
  }

  render(){
    let shareClose = () => this.setState({ showShare: false });
    let saveClose = () => this.setState({ showSave: false });
    let embedClose = () => this.setState({ showEmbed: false });

    let isShowing = Math.min(Math.floor(380 / this.state.currentScrollHeight), 1);
    var visible = !!isShowing ? 'translateY(-50px)' : 'translateY(0px)';

    // var reviewPosition = document.getElementById('reviews').getBoundingClientRect();
    // var hostPosition = document.getElementById('host').getBoundingClientRect();
    // var hoodPosition = document.getElementById('neighborhood').getBoundingClientRect();
    // var policyPosition = document.getElementById('policy').getBoundingClientRect();
    // if (window.scrollY === reviewPosition){
    //   console.log("hello reviews")
    // }

    let pad = document.getElementById('mainFlexbox').getBoundingClientRect().left;

    return(
      <div className={navbarstyle.navBar} style={{transform: `${visible}`, transition: 'transform 300ms ease-in'}}>
        <div className={navbarstyle.innerNavCont} style={{marginLeft: `${pad}`}}>
          <div className={navbarstyle.navOptionsGroup}>
            <span id='navOverview' className={navbarstyle.navOptions}><a onClick={() => this.clickOverview()}>Overview</a></span>·
            <span id='navReviews' className={navbarstyle.navOptions}><a onClick={() => this.clickReviews()}>Reviews</a></span>·
            <span id='navHost' className={navbarstyle.navOptions}><a onClick={() => this.clickHost()}>The Host</a></span>·
            <span id='navLocation' className={navbarstyle.navOptions}><a onClick={() => this.clickLocation()}>Location</a></span>·
            <span id='navPolicies' className={navbarstyle.navOptions}><a onClick={() => this.clickPolicies()}>Policies</a></span>
          </div>
          <div className={navbarstyle.rightBtns}>
            <span className={navbarstyle.navOptions} onClick={() => this.setState({ showShare: true })}><img className={navbarstyle.icons} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/share+icon.png'></img><a>Share</a></span>
            <Share
              show={this.state.showShare}
              onHide={shareClose}
              property={this.props.property}
              location={this.props.location}
              showEmbedFunc={this.openEmbedModal}
            />
            <span className={navbarstyle.navOptions} onClick={() => this.setState({ showSave: true })}><img className={navbarstyle.icons} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/heart+icon.png'></img><a>Save</a></span>
            <Save
              show={this.state.showSave}
              onHide={saveClose}
              property={this.props.property}
              location={this.props.location}
            />
            <EmbedModal
              show={this.state.showEmbed}
              onHide={embedClose}
              property={this.props.property}
              location={this.props.location}
            />
          </div>
        </div>
      </div>
    )
  }
}