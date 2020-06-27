import React from 'react';

const SelectedVideo = ({ videoPlayed }) => {
    if (!videoPlayed) { return null;}
    return (    
        <div className="col-md-12">
            <div class="card mr-1">
                <iframe className="embed embed-responsive" width="500" height="315" src={`https://www.youtube.com/embed/${videoPlayed.id.videoId}`}></iframe>
                <div class="card-body">
                    <h4 class="card-title">{videoPlayed.snippet.title}</h4>
                    <p class="card-text">{videoPlayed.snippet.description}</p>
                </div>
            </div>
            
        </div>
    )
}

export default SelectedVideo;