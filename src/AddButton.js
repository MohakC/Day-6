import React from 'react'
import './AddButton.css'

const AddButton = (props) => {
    return (
        <button className="add-thing" onClick={props.add}>Add Thing</button>
    )
}

export default AddButton