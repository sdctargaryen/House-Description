import React from 'react';
import { Modal } from "react-bootstrap";
import sharestyle from './savestyle.css';

class Share extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    return(
      <Modal {...this.props}>
        <Modal.Body>
          <div className={sharestyle.exit}><img src='https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png' onClick={this.props.onHide}></img></div>
          <h3>Share</h3>
          <div>Check out this awesome listing on Airbnb: </div>
          <img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/facebook+icon.png" />
          <div>Facebook</div>
          <img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/twitter+icon.png" />
          <div>Twitter</div>
          <img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/email+icon.png" />
          <div>Email</div>
          <img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/messenger+icon.png" />
          <div>Messenger</div>
          <img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/copy+icon.png" />
          <div>Link Copied / Copy Link</div>
          <img src="https://s3-us-west-1.amazonaws.com/sharebnbicons/new+embed.png" />
          <div>Embed</div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Share