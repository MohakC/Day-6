import React from 'react'
import './PromoteButton.css'

const PromoteButton = (props) => {
    return (
    <span className="actions">
          <button className="promote" onClick={props.promoteIt} id={props.thisid}>
            <i className="fa fa-star"></i>
          </button>
        </span>
    )      
}

export default PromoteButton
