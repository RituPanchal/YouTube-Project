import React from 'react';

const YouTubeListItems = ({ searchedListItems, playVideo}) => {
    return (
        searchedListItems.map(eachItem => (
            <div className="col-md-12" key={eachItem.id.videoId}>
                <div className="card" onClick={()=> playVideo(eachItem)}>
                    <img className="card-img-top" src={eachItem.snippet.thumbnails.high.url} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{eachItem.snippet.title}</h4>
                        <p className="card-text">{eachItem.snippet.description}</p>
                    </div>
                </div>
            </div>
        ))
        
    )
}

export default YouTubeListItems;