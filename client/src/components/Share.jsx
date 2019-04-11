import React from 'react';
import { Modal } from "react-bootstrap";
import sharestyle from './sharestyle.css';

class Share extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      link: false,
      showEmbed: false
    }
    this.copyLink = this.copyLink.bind(this)
  }

  copyLink(){
    this.setState({
      link: true
    })
    setInterval(() => {this.setState({
      link: false
    })}, 2500)
  }

  render(){
    return(
      <Modal {...this.props}>
        <Modal.Body>
          <div className={sharestyle.exit}><img src='https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png' onClick={this.props.onHide}></img></div>
          <h3>Share</h3>
          <div className={sharestyle.shareDesc}>
            Check out this awesome listing on Airbnb: {this.props.property} - 
            Property for rent in {this.props.location}
          </div>
          <div>
            <div className={sharestyle.shareMethod}>
              <div className={sharestyle.iconDiv}><img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/facebook+icon.png" className={sharestyle.shareFBIcon} /></div>
              <div className={sharestyle.shareLink}>Facebook</div>
            </div>
            <div className={sharestyle.shareMethod}>
              <div className={sharestyle.iconDiv}><img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/twitter+icon.png" className={sharestyle.shareTIcon} /></div>
              <div className={sharestyle.shareLink}>Twitter</div>
            </div>
            <div className={sharestyle.shareMethod}>
              <div className={sharestyle.iconDiv}><img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/email+icon.png" className={sharestyle.shareIcon} /></div>
              <div className={sharestyle.shareLink}>Email</div>
            </div>
            <div className={sharestyle.shareMethod}>
              <div className={sharestyle.iconDiv}><img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/messenger+icon.png" className={sharestyle.shareIcon} /></div>
              <div className={sharestyle.shareLink}>Messenger</div>
            </div>
            <div className={sharestyle.shareMethod}>
              <div className={sharestyle.iconDiv}><img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/copy+icon.png" className={sharestyle.shareIcon} /></div>
              <div className={sharestyle.shareLink} onClick={this.copyLink}>{this.state.link ? 'Link Copied' : 'Copy Link'}</div>
            </div>
            <div className={sharestyle.shareMethod}>
              <div className={sharestyle.iconDiv}><img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/new+embed.png" className={sharestyle.shareIcon} /></div>
              <div className={sharestyle.shareLink} onClick={() => {this.props.showEmbedFunc(); this.props.onHide()}}>Embed</div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Share