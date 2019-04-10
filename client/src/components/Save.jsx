import React from 'react';
import { Modal, Button } from "react-bootstrap";
import savestyle from './savestyle.css';

class Save extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cancel: false,
      propertyIndex: Math.floor(Math.random() * 4),
      reviews: Math.floor(Math.random() * 500) + 30
    }
    this.clickCancel = this.clickCancel.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  clickCancel(){
    this.setState({
      cancel: !this.state.cancel
    })
  }

  closeModal(){
    this.props.onHide();
    this.setState({
      cancel: false
    })
  };

  inputCheck(e){
    if (e.target.value !== '') {
      document.getElementById('createBtnId').disabled = false;
    } else {
      document.getElementById('createBtnId').disabled = true;
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
    if (this.state.cancel === false){
      return(
        <Modal {...this.props}>
          <Modal.Body>
            <div className={savestyle.exit}><img src='https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png' onClick={this.closeModal}></img></div>
            <h4 className="save-modalTitle">Save to List</h4>
            <form className={savestyle.saveForm}>
              Name
              <input className={savestyle.saveInput} onChange={this.inputCheck} placeholder='Name your list'></input>
              <div className={savestyle.btnContain}>
                <Button className={savestyle.cancelBtn} onClick={this.clickCancel}>Cancel</Button>
                <Button id='createBtnId' className={savestyle.createBtn} disabled>Create</Button>
              </div>
            </form>
            <div className={savestyle.placeholder}></div>
            <div className={savestyle.smallCard}>
              <div>
                <img className={savestyle.propImg} src={propertyImg[this.state.propertyIndex]}></img>
              </div>
              <div className={savestyle.propertyInfo}>
                <div className={savestyle.propertyName}>{this.props.property}</div>
                <div className={savestyle.locationText}>{this.props.location}, CA, United States</div>
                <div className={savestyle.rating}>
                  <div className={savestyle.starContainer}>
                    <img className={savestyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                    <img className={savestyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                    <img className={savestyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                    <img className={savestyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                    <img className={savestyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                  </div>
                  <div className={savestyle.ratingText} >{this.state.reviews} reviews</div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )
    } else {
      return(
        <Modal {...this.props}>
        <Modal.Body >
          <div className={savestyle.exit}><img src='https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png' onClick={this.closeModal}></img></div>
          <h4 className="save-modalTitle">Save to List</h4>
            <div className={savestyle.createLinkContainer}>
              <a className={savestyle.createLink} onClick={this.clickCancel}>Create New List</a>
            </div>
            <div className={savestyle.placeholderCancel}></div>
            <div className={savestyle.smallCard}>
              <div>
                <img className={savestyle.propImg} src={propertyImg[this.state.propertyIndex]}></img>
              </div>
              <div className={savestyle.propertyInfo}>
                <div className={savestyle.propertyName}>{this.props.property}</div>
                <div className={savestyle.locationText}>{this.props.location}, CA, United States</div>
                <div className={savestyle.rating}>
                  <div className={savestyle.starContainer}>
                    <img className={savestyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                    <img className={savestyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                    <img className={savestyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                    <img className={savestyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                    <img className={savestyle.stars} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png'></img>
                  </div>
                  <div className={savestyle.ratingText} >{this.state.reviews} reviews</div>
                </div>
              </div>
            </div>
          </Modal.Body>
      </Modal>
      )
    }
  }
}

export default Save