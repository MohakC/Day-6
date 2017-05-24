import React from 'react'
import './Thing.css'

const Thing = (props) => {
  return (
    <li className="Thing">
      <input type="checkbox" value="on" />
      <div className="details">
        <div className="name">
          {props.thing.name}
        </div>
        <span className="actions">
          <button className="remove" onClick={props.deleteThings} id={props.thing.id}>
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </div>
    </li>
  )
}

export default Thing