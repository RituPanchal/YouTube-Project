import React from 'react';
import YouTubeListItems from './youtubeListItems.component';

const YouTubeList = ({searchedListItems, playVideo}) => {
    return (
        <div className="col-md-12">   
            <YouTubeListItems searchedListItems={searchedListItems} playVideo={playVideo}/>
        </div>
    );
}

export default YouTubeList;