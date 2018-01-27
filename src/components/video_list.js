import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key = {video.etag}
        video = {video} />
    );
  });

  return (
    <ul className = "col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;

/*--- NOTES ---*/
//1. props in functional based components have to be passed as arguments in
//the function.

//2. In fiunction based components props are accesed by
//props.arrayname.arraycomponent eg: props.videos.length

//3. In class based components props are readily available and can be accessed
//by this.props.arrayname.arraycomponent eg: this.props.videos.length
