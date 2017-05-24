import React from 'react'
import './AddButton.css'

const AddButton = (props) => {
    return (
        <button className="add-thing submit">
            <i className="fa fa-plus-square"></i> 
              &nbsp;
            Add a Thing
        </button>
        
    )
}

export default AddButton