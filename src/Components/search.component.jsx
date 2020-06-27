import React from 'react';

const Search = ({ userInput }) => {
    return (
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Search for a video" onChange={userInput}/>
        </div>
    );
}

export default Search;
