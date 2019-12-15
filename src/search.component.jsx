import React from 'react';

const Search = (props) => {
    let { placeholder, searchEvent } = props;
    let style = {
        width: "100%"
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 p-0">
                    <div className="form-group">
                        <input type="text" className="form-control mt-3" style={style} placeholder={placeholder} onChange={searchEvent}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;