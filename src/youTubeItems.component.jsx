import React from 'react';

const YouTubeItems = ({ listItems, playVideo_prop_item }) => {
    return (
        <div className="col-md-6 offset-md-8">
            <div className="card" onClick={ () => playVideo_prop_item(listItems)}>
                <img className="card-img-top" src={listItems.snippet.thumbnails.high.url} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{listItems.snippet.channelTitle}</h4>
                    <p className="card-text">{listItems.snippet.description}</p>
                </div>
            </div>
        </div>
    );
};

export default YouTubeItems;