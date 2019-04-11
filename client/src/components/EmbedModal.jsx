import React from 'react';
import { Modal, Button } from "react-bootstrap";
import embedstyle from './embedstyle.css';

export default class EmbedModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      copied: false,
      showCheck: false,
      imageCount: 0,
      reviews: Math.floor(Math.random() * 500) + 30
    }
    this.copiedState = this.copiedState.bind(this)
    this.showOptions = this.showOptions.bind(this)
    this.prevPhoto = this.prevPhoto.bind(this)
    this.nextPhoto = this.nextPhoto.bind(this)
  }
  
  copiedState(){
    this.setState({
      copied: true
    })
  }

  showOptions(){
    this.setState({
      showCheck: !this.state.showCheck
    })
    if (this.state.showCheck){
      document.getElementById('customCheck').style.display = 'flex';
      // document.getElementById('readArrow').style.;
    } else {
      document.getElementById('customCheck').style.display = 'none';
      // document.getElementById('readArrow').style.;
    }
  }

  prevPhoto(){
    if (this.state.imageCount === 0){
      this.setState({
        imageCount: 9
      })
    } else {
      this.setState({
        imageCount: this.state.imageCount -= 1
      })
    }
  }

  nextPhoto(){
    if (this.state.imageCount === 9){
      this.setState({
        imageCount: 0
      })
    } else {
      this.setState({
        imageCount: this.state.imageCount += 1
      })
    }
  }

  render(){
    var propertyImg = [
      'https://s3-us-west-1.amazonaws.com/sharebnbpics/gallery+photos+copy/home-12/home-12-1.jpg', 
      'https://s3-us-west-1.amazonaws.com/sharebnbpics/gallery+photos+copy/home-12/home-12-2.jpg', 
      'https://s3-us-west-1.amazonaws.com/sharebnbpics/gallery+photos+copy/home-12/home-12-3.jpg', 
      'https://s3-us-west-1.amazonaws.com/sharebnbpics/gallery+photos+copy/home-12/home-12-4.jpg', 
      'https://s3-us-west-1.amazonaws.com/sharebnbpics/gallery+photos+copy/home-12/home-12-5.jpg',
      'https://s3-us-west-1.amazonaws.com/sharebnbpics/gallery+photos+copy/home30/home30-1.jpg',
      'https://s3-us-west-1.amazonaws.com/sharebnbpics/gallery+photos+copy/home30/home30-2.jpg',
      'https://s3-us-west-1.amazonaws.com/sharebnbpics/gallery+photos+copy/home30/home30-3.jpg',
      'https://s3-us-west-1.amazonaws.com/sharebnbpics/gallery+photos+copy/home30/home30-4.jpg',
      'https://s3-us-west-1.amazonaws.com/sharebnbpics/gallery+photos+copy/home30/home30-5.jpg'];
    return(
      <Modal {...this.props} size="xl">
        <Modal.Body className={embedstyle.embedBody}>
          <div className={embedstyle.colContainer}>
            <div className={embedstyle.leftCol}>
              <div className={embedstyle.exit}>
                <img src='https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png' onClick={this.props.onHide}></img>
              </div>
              <div><h1 className={embedstyle.embedTitle}>Embed this home</h1></div>
              <div className={embedstyle.embedSubtitle}>Copy and paste the following HTML into your website code:</div>
              <textarea className={embedstyle.textareaStyle}
                rows="3"
                defaultValue='<div class="airbnb-embed-frame" data-id="16497826" data-view="home" style="width:450px;height:300px;margin:auto"><a href="https://www.airbnb.com/rooms/16497826?s=51">View On Airbnb</a><a href="https://www.airbnb.com/rooms/16497826?s=51" rel="nofollow">Studio Mins to Culver City Downtown, Sony &amp; Venice</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>'>
              </textarea>
              <Button className={embedstyle.copyBtn}>{this.state.copied ? 'Copied!' : 'Copy HTML'}</Button>
              <div>
                <div className={embedstyle.customize}>
                  <div onClick={this.showOptions}>Customize your code</div>
                  <div>
                    <img id='readArrow' className={embedstyle.readMoreArrow} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/arrow+icon.png'></img>
                  </div>
                </div>
                <div id='customCheck' className={embedstyle.customCheck}>
                  <div className={embedstyle.checkOption}>
                    <div className={embedstyle.checkbox}></div>
                    <div className={embedstyle.checkText}>Hide the price</div>
                  </div>
                  <div className={embedstyle.checkOption}>
                    <div><div className={embedstyle.checkbox}></div></div>
                    <div className={embedstyle.checkText}>Hide the reviews</div>
                  </div>
                  <div className={embedstyle.checkOption}>
                    <div className={embedstyle.checkbox}></div>
                    <div className={embedstyle.checkText}>Create "no follow" links</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={embedstyle.rightCol}>
            {/* right-side carousel */}
              <div className={embedstyle.propertyCard}>
                <div className={embedstyle.carouselCont}>
                  <div className={embedstyle.preview}>
                    <span className={embedstyle.previewText}>PREVIEW</span>
                  </div>
                  {/* onclick dec */}
                  <div onClick={this.prevPhoto}>
                    <div className={embedstyle.leftArrow}><img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/left+arrow.png"></img></div>
                  </div>
                  {/* onclick inc */}
                  <div onClick={this.nextPhoto}>
                    <div className={embedstyle.rightArrow}><img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/left+arrow.png"></img></div>
                  </div>
                  <img className={embedstyle.propImg} src={propertyImg[this.state.imageCount]}></img>
                  <div className={embedstyle.heartCont}>
                    <img className={embedstyle.heart} src="https://s3-us-west-1.amazonaws.com/sharebnbicons/opaque+heart.png"></img>
                  </div>
                </div>
                <div className={embedstyle.propertyInfo}>
                  <div className={embedstyle.propertyName}>{this.props.property}</div>
                  <div className={embedstyle.locationText}>{this.props.location}, CA, United States</div>
                  <div className={embedstyle.rating}>
                    <div className={embedstyle.starContainer}>
                      <img className={embedstyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                      <img className={embedstyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                      <img className={embedstyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                      <img className={embedstyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                      <img className={embedstyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                    </div>
                    <div className={embedstyle.ratingText} >{this.state.reviews} reviews</div>
                  </div>
                </div>
                <div className={embedstyle.cardFooter}>
                  <div>
                    <a id='footerText' className={embedstyle.footerText}>View On Airbnb</a>
                  </div>
                  <div>
                    <img className={embedstyle.footerLogo} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/sharebnb+icon.png'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}