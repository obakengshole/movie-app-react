import React from "react";

const SearchBox = props => {
    return (
        // take up 4/12 of the screen
        <div className="col col-sm-4">
            <input 
                className="form-control"
                placeholder="Type to search..."
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                ></input>
        </div>
    )
}

export default SearchBox