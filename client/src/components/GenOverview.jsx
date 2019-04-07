import React, { useState } from 'react';
import genover from './genoverview.css';
import { CSSTransition } from 'react-transition-group';
  
const GenOverview = (props) => {
  console.log(props)
  const [readMoreLink, setReadMoreLink] = useState(true);
  const [showMore, setShowMore] = useState(false);
  // if (props.readMoreSum === false && props.summary.length > 1) {
  //   return (
  //   <div>
  //     <div className={genover.summary}>{props.summary[0]}</div>
  //     <div className={genover.readSummary}>
  //       <a href="#" onClick={props.clickMoreSum}>Read more about the space {/* down arrow image 10x10 */}</a>
  //     </div>
  //     <div className={genover.readSummary}>
  //       <a href="#">Contact host</a>
  //     </div>
  //   </div>)
  // } else {
  //   if (props.readMoreSum === true && props.summary.length <= 3) {
  //     return (
  //     <div>
  //       <div className={genover.summary}>{props.summary[0]}</div>
  //       <div>The space</div>
  //       <div>{props.summary.slice(1)}</div>
  //       <div className={genover.readSummary}>
  //         <a href="#" onClick={props.clickMoreSum}>Hide {/* down arrow image 10x10 */}</a>
  //       </div>
  //       <div className={genover.readSummary}>
  //         <a href="#">Contact host</a>
  //       </div>
  //     </div>)
  //   } else if (props.summary.length > 3) {
  //     return (
  //       <div>
  //         <div className={genover.summary}>{props.summary[0]}</div>
  //         <div>The space</div>
  //         <div>{props.summary.slice(1)}</div>
  //         <div>Guest access</div>
  //         <div>{props.summary.slice(3)}</div>
  //         <div>Interaction with guests</div>
  //         <div>{props.summary.slice(4)}</div>
  //         <div>Other things to note</div>
  //         <div>License or registration number</div>
  //         <div>HRLA-0002829</div>
  //         <a href="#">Learn more about this number</a>
  //         <div className={genover.readSummary}>
  //           <a href="#" onClick={props.clickMoreSum}>Hide {/* down arrow image 10x10 */}</a>
  //         </div>
  //         <div className={genover.readSummary}>
  //           <a href="#">Contact host</a>
  //         </div>
  //       </div>)
  //   } else {
  //     return (
  //       <div>
  //         <div className={genover.summary}>{props.summary[0]}</div>
  //         <div className={genover.readSummary}>
  //           <a href="#">Contact host</a>
  //         </div>
  //       </div>)
  //     }
  //   }

  ///


  // if (props.summary.length > 1 && props.summary.length <= 3) {
  //   return (
  //     <div>
  //       <div className={genover.summary}>{props.summary[0]}</div>
  //       <div id='readMoreBody' className={genover.readMore}>
  //         <div>The space</div>
  //         <div>{props.summary.slice(1)}</div>
  //       </div>
  //       <div className={genover.readSummary}>
  //         <a id='link' className={genover.readMoreLink} onClick={props.clickMoreSum}>Read more about the space {/* down arrow image 10x10 */}</a>
  //         <p></p>
  //         <a href="#">Contact host</a>
  //       </div>
  //     </div>)
  // } else if (props.summary.length > 3) {
  //   return (
  //     <div>
  //       <div className={genover.summary}>{props.summary[0]}</div>
  //       <div id='readMoreBody' className={genover.readMore}>
  //         <div>The space</div>
  //         <div>{props.summary.slice(1)}</div>
  //         <div>Guest access</div>
  //         <div>{props.summary.slice(3)}</div>
  //         <div>Interaction with guests</div>
  //         <div>{props.summary.slice(4)}</div>
  //         <div>Other things to note</div>
  //         <div>License or registration number</div>
  //         <div>HRLA-0002829</div>
  //         <a href="#">Learn more about this number</a>
  //       </div>
  //       <div className={genover.readSummary}>
  //         <a id='link' className={genover.readMoreLink} onClick={props.clickMoreSum}>Read more about the space {/* down arrow image 10x10 */}</a>
  //         <p></p>
  //         <a href="#">Contact host</a>
  //       </div>
  //     </div>)
  // } else {
  //   return (
  //     <div>
  //       <div className={genover.summary}>{props.summary[0]}</div>
  //       <div className={genover.readSummary}>
  //         <a href="#">Contact host</a>
  //       </div>
  //     </div>)
  // }


  //

  if (props.summary.length > 1 && props.summary.length <= 3) {
    return (
      <div>
        <div className={genover.summary}>{props.summary[0]}</div>
        {readMoreLink && (
          <a id='link' className={genover.readMoreLink} onClick={() => setShowMore(true)}>Read more about the space {/* down arrow image 10x10 */}</a>
        )}
        <CSSTransition
          in={showMore}
          // appear={false}
          timeout={{
            enter: 1300,
            exit: 1300
          }}
          classNames='fade'
          unmountOnExit
          onEnter={() => setReadMoreLink(false)}
          onExited={() => setReadMoreLink(true)}
        >
          <div className={genover.readMore}>
            <div>The space</div>
            <div>{props.summary.slice(1)}</div>
            <p></p>
            <a id='link' className={genover.readMoreLink} onClick={() => setShowMore(false)}>Hide {/* up arrow image 10x10 */}</a>
          </div>
        </CSSTransition>
        <div className={genover.readSummary}>
          {/* <a id='link' className={genover.readMoreLink} onClick={props.clickMoreSum}>Read more about the space down arrow image 10x10</a> */}
          <p></p>
          <a href="#">Contact host</a>
        </div>
      </div>)
  } else if (props.summary.length > 3) {
    return (
      <div>
        <div className={genover.summary}>{props.summary[0]}</div>
        {readMoreLink && (
          <a id='link' className={genover.readMoreLink} onClick={() => setShowMore(true)}>Read more about the space {/* down arrow image 10x10 */}</a>
        )}
        <CSSTransition
          in={showMore}
          // appear={false}
          timeout={{
            enter: 1300,
            exit: 1300
          }}
          classNames='fade'
          unmountOnExit
          onEnter={() => setReadMoreLink(false)}
          onExited={() => setReadMoreLink(true)}
        >
          <div className={genover.readMore}>
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
            <p></p>
            <a id='link' className={genover.readMoreLink} onClick={() => setShowMore(false)}>Hide {/* up arrow image 10x10 */}</a>
          </div>
        </CSSTransition>
        <div className={genover.readSummary}>
          {/* <a id='link' className={genover.readMoreLink} onClick={props.clickMoreSum}>Read more about the space down arrow image 10x10</a> */}
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

export default GenOverview
