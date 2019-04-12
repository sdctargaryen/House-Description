import React from 'react';
import amenitiesiconstyle from './amenitiesiconsstyle.css';

const AmenitiesIcons = (props) => {
  var names = [];
  var icons = [];
  props.amenitiesIcons.forEach((pair) => {
    for(var key in pair){
      names.push(key);
      icons.push(pair[key])
    }
  })
  if (props.amenitiesIcons.length === 2) {
    return(
      <table className={amenitiesiconstyle.table}>
        <tbody>
          <tr className={amenitiesiconstyle.tr}>
            <td><img className={amenitiesiconstyle.amenIcon} src={icons[0]}/></td>
            <td><div>{names[0]}</div></td>
          </tr>
        </tbody>
        <tbody>
          <tr className={amenitiesiconstyle.tr}>
            <td><img className={amenitiesiconstyle.amenIcon} src={icons[1]}/></td>
            <td><div>{names[1]}</div></td>
          </tr>
        </tbody>
      </table>
    )
  } else if (props.amenitiesIcons.length === 3) {
    return(
      <table className={amenitiesiconstyle.table}>
        <tbody>
          <tr className={amenitiesiconstyle.tr}>
            <td><img className={amenitiesiconstyle.amenIcon} src={icons[0]}/></td>
            <td><div>{names[0]}</div></td>
          </tr>
          <tr className={amenitiesiconstyle.tr}>
            <td><img className={amenitiesiconstyle.amenIcon} src={icons[2]}/></td>
            <td><div>{names[2]}</div></td>
          </tr>
        </tbody>
        <tbody>
          <tr className={amenitiesiconstyle.tr}>
            <td><img className={amenitiesiconstyle.amenIcon} src={icons[1]}/></td>
            <td><div>{names[1]}</div></td>
          </tr>
        </tbody>
      </table>
    )
  } else if (props.amenitiesIcons.length === 4) {
    return(
      <table className={amenitiesiconstyle.table}>
        <tbody>
          <tr className={amenitiesiconstyle.tr}>
            <td><img className={amenitiesiconstyle.amenIcon} src={icons[0]}/></td>
            <td><div>{names[0]}</div></td>
          </tr>
          <tr className={amenitiesiconstyle.tr}>
            <td><img className={amenitiesiconstyle.amenIcon} src={icons[2]}/></td>
            <td><div>{names[2]}</div></td>
          </tr>
        </tbody>
        <tbody>
          <tr className={amenitiesiconstyle.tr}>
            <td><img className={amenitiesiconstyle.amenIcon} src={icons[1]}/></td>
            <td><div>{names[1]}</div></td>
          </tr>
          <tr className={amenitiesiconstyle.tr}>
            <td><img className={amenitiesiconstyle.amenIcon} src={icons[3]}/></td>
            <td><div>{names[3]}</div></td>
          </tr>
        </tbody>
      </table>
    )
  } else {
    return(
      <table>
        <tbody>
          <tr>
            <td></td>
            <td><div></div></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default AmenitiesIcons