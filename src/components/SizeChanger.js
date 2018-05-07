import React from 'react';

export default function SizeChanger(props) {
  return (
    <select disabled={props.allowEdit === 'false'} onChange={props.updateSize} className="dropDownContainer">
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}