import React from 'react';
import { Waypoint } from 'react-waypoint';
import NavBar from './NavBar';
import ReactDOM from 'react-dom';
import App from './App.jsx';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   ReactDOM.render(<App />, document.getElementById('description'))
  // }

  render(){
    return(
      <div className='parentDivvvvvvvv'>
        <NavBar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Waypoint
          onEnter={() => document.getElementById('waypointNavbar').style.display='flex'}
          onLeave={() => document.getElementById('waypointNavbar').style.display='none'}
          bottomOffset='98%'
        >
          <div>
            <div id='nav'></div>
            <div id='reservation'>2 Col FlexBox Here</div>
            <br></br>
            <div id='staticFooter'></div>
            {/* <div id='description'>Testing Description!</div> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>end</div>
            <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          </div>
        </Waypoint>
      </div>
    )
  }
}