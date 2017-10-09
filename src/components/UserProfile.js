import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Button from './Button';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class UserProfile extends Component { 
    constructor(props) { 
        super(props);
        
        this.state = { 
            videos:[],
            selectedVideo: null, 
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) { 
        YTSearch({key:API_KEY, term: term}, (videos) =>  { 
            this.setState({
                videos: videos,
                selectedVideo: videos[0] //first video in list set to selected video
            });
        });
    }

    addToPlaylist = () => {

    };

    render() { 
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

        return(
        <div className="container">
        {/* // <div>
        //     <Header userName= />
        // </div> */}
        <div> 
            <SearchBar onSearchTermChange={videoSearch}  />
            <VideoDetails video = {this.state.selectedVideo} />
            <VideoList 
                onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            <Button link="#" buttonId="addToPlaylist" change={this.addToPlaylist} text="Add To Playlist" />
        </div>
        </div>
        );
    }
}

export default UserProfile;