import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
        <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
        );
    });

    // note: the className in this case is bootstrap, which is already added in the index.html file
    return (
        <ul className='col-md-4 list-group'>
        {videoItems}
        </ul>
    );
}

export default VideoList;