import React from 'react';

export default function ColorChanger(props) {
  return (
    <select disabled={props.allowEdit === 'false'} onChange={props.updateColor} className="dropDownContainer">
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}