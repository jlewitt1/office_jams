import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => { 
   const videoItems = props.videos.map((video)=> { 
        return (
        <VideoListItem  //give each item a key so can update the element without needing to re-render the whole list
            onVideoSelect = {props.onVideoSelect}    
            key = {video.etag}
            video = {video} /> 
        );
    });
    return (
        <ul className = "col-md-4 list-group" >
            {videoItems}
        </ul>
    );
}; 

export default VideoList;