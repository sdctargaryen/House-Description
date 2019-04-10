import React, { useState } from 'react';
import genover from './genoverview.css';
  
const GenOverview = (props) => {
  if(!props.readMoreSum){
    if (props.summary.length > 1 && props.summary.length <= 3) {
      return (
        <div>
          <div className={genover.summary}>{props.summary[0]}</div>
          <div id='readMoreBody' className={genover.readLess}>
            <div>The space</div>
            <div>{props.summary.slice(1)}</div>
          </div>
          <div className={genover.readSummary}>
            <a id='link' className={genover.readMoreLink} onClick={props.clickMoreSum}>
              Read more about the space
              <img className ={genover.readMoreArrow} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/arrow+icon.png'></img>
            </a>
            <p></p>
            <a href="#">Contact host</a>
          </div>
        </div>)
    } else if (props.summary.length > 3) {
      return (
        <div>
          <div className={genover.summary}>{props.summary[0]}</div>
          <div id='readMoreBody' className={genover.readLess}>
            <div>The space</div>
            <div>{props.summary.slice(1)}</div>
            <div>Guest access</div>
            <div>{props.summary.slice(3)}</div>
            <div>Interaction with guests</div>
            <div>{props.summary.slice(4)}</div>
            <div>Other things to note</div>
            <div>License or registration number</div>
            <div>HRLA-0002829</div>
            <a href="#">Learn more about this number</a>
          </div>
          <div className={genover.readSummary}>
            <a id='link' className={genover.readMoreLink} onClick={props.clickMoreSum}>
              Read more about the space
              <img className ={genover.readMoreArrow} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/arrow+icon.png'></img>
            </a>
            <p></p>
            <a href="#">Contact host</a>
          </div>
        </div>)
    } else {
      return (
        <div>
          <div className={genover.summary}>{props.summary[0]}</div>
          <div className={genover.readSummary}>
            <a href="#">Contact host</a>
          </div>
        </div>)
    }
  } else {
    if (props.summary.length > 1 && props.summary.length <= 3) {
      return (
        <div>
          <div className={genover.summary}>{props.summary[0]}</div>
          <div id='readMoreBody' className={genover.readMore}>
            <div>The space</div>
            <div>{props.summary.slice(1)}</div>
          </div>
          <div className={genover.readSummary}>
            <a id='link' className={genover.readMoreLink} onClick={props.clickMoreSum}>
              Hide
              <img className ={genover.readLessArrow} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/arrow+icon.png'></img>
            </a>
            <p></p>
            <a href="#">Contact host</a>
          </div>
        </div>)
    } else if (props.summary.length > 3) {
      return (
        <div>
          <div className={genover.summary}>{props.summary[0]}</div>
          <div id='readMoreBody' className={genover.readMore}>
            <div>The space</div>
            <div>{props.summary.slice(1)}</div>
            <div>Guest access</div>
            <div>{props.summary.slice(3)}</div>
            <div>Interaction with guests</div>
            <div>{props.summary.slice(4)}</div>
            <div>Other things to note</div>
            <div>License or registration number</div>
            <div>HRLA-0002829</div>
            <a href="#">Learn more about this number</a>
          </div>
          <div className={genover.readSummary}>
            <a id='link' className={genover.readMoreLink} onClick={props.clickMoreSum}>
              Hide
              <img className ={genover.readLessArrow} src='https://s3-us-west-1.amazonaws.com/sharebnbicons/arrow+icon.png'></img>
            </a>
            <p></p>
            <a href="#">Contact host</a>
          </div>
        </div>)
    } else {
      return (
        <div>
          <div className={genover.summary}>{props.summary[0]}</div>
          <div className={genover.readSummary}>
            <a href="#">Contact host</a>
          </div>
        </div>)
    }
  }
}

export default GenOverview
