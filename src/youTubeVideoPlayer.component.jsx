import React from 'react';

const YoutubePlayer = ({ video_id }) => {
    console.log("id",video_id);
    if (!video_id) { return null; }
    
    return (
        <div className="col-md-8">
            {/* <iframe src={`https://www.youtube.com/embed/${video_id}`}></iframe> */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2V1shb3Mi4s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
};

export default YoutubePlayer;
