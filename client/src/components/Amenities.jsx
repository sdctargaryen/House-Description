import React from 'react';
import { Modal } from "react-bootstrap";
import amenitiesstyle from './amenitiesstyle.css';

class Amenities extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <Modal {...this.props}>
        <Modal.Body>
          <div className={amenitiesstyle.exit}><img src='https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png' onClick={this.props.onHide}></img></div>
          <div className={amenitiesstyle.heading}>Amenities</div>
          {this.props.amenlist.map((amenity, index)=>{
            return(
              <div>
                <div key={index} className={amenitiesstyle.eachAmenity}>{amenity}</div>
                <div className={amenitiesstyle.divider}></div>
              </div>
            )
          })}
          <div className={amenitiesstyle.heading}>Not included</div>
          {this.props.amennot.map((notAmen, index)=>{
            return(
              <div>
                <div key={index} className={amenitiesstyle.eachUnincluded}>{notAmen}</div>
                <div className={amenitiesstyle.divider}></div>
              </div>
            )
          })}
        </Modal.Body>
      </Modal>
    )
  }
}

export default Amenities

