import React from 'react';
import { Modal, Button } from "react-bootstrap";
import savestyle from './savestyle.css';

class Save extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cancel: false
    }
    this.clickCancel = this.clickCancel.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  clickCancel(){
    this.setState({
      cancel: true
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
    if (this.state.cancel === false){
      return(
        <Modal {...this.props}>
          <Modal.Body>
            <div className={savestyle.exit}><img src='https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png' onClick={this.closeModal}></img></div>
            <h4 className="gallery-modalTitle">Save to List</h4>
            <form>
              Name <input onChange={this.inputCheck}></input>
              <Button className={savestyle.cancelBtn} onClick={this.clickCancel}>Cancel</Button>
              <Button id='createBtnId' className={savestyle.createBtn} disabled>Create</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <p>Thing Here</p>
          </Modal.Footer>
        </Modal>
      )
    } else {
      return(
        <Modal {...this.props}>
        <Modal.Body>
          <div className={savestyle.exit}><img src='https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png' onClick={this.closeModal}></img></div>
          Some sort of form here??
          <form>

          </form>
        </Modal.Body>
      </Modal>
      )
    }
  }
}

export default Save