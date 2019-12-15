import React from 'react';
import YouTubeItems from './youTubeItems.component';

const YouTubelist = ({list, playVideo_prop_list}) => {
    return (
        <div className="container">
            <div className="row">
                {
                    list.map(item => (
                        < YouTubeItems listItems={item} key={item.id.videoId} playVideo_prop_item={playVideo_prop_list}/>
                    ))
                }
            </div>
        </div>
    );
};

export default YouTubelist; 