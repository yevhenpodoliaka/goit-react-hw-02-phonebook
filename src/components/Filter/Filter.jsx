import React from "react"
const Filter = ({ value, onChahgeFilter }) => {

    return (
      
        <label>Find contacts by name
            <input type="text" value={value} onChange={onChahgeFilter} />
        </label>
    
    );
}

export default Filter