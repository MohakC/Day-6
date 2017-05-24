import React from 'react'
import DeleteButton from './DeleteButton'
import './Thing.css'

const Thing = (props) => {
  return (
    <li className="Thing">
      <input type="checkbox" value="on" />
      <div className="details">
        <div className="name">
          {props.thing.name}
          <DeleteButton deleteThings={props.deleteThings} thisid={props.thing.id} />
        </div>
      </div>
    </li>
  )
}

export default Thing