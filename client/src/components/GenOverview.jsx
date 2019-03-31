import React from 'react';
  
const GenOverview = (props) => {
  if (props.summary.length < 2){
    return <div>{props.summary}</div>
  } else if (props.summary.length > 1){
    return(
      <div>
        {props.summary}
      </div>
    )
  }
}

export default GenOverview