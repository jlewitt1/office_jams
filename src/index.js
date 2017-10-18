// Create a new component which produces some HTML
// Take this component's generated HTML and put it on the page (in the DOM)
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
import PlaylistHolder from './components/PlaylistHolder';
import Button from './components/Button';

const API_KEY = 'AIzaSyAgb7M84OCsJGmvsOwHwLho7vSMI5sLs9Y'; //use parent component to fetch data

class App extends Component { 
    constructor(props) { 
        super(props);
        
        this.state = { 
            videos:[],
            selectedVideo: null, 
            songs:[]
        };
        this.videoSearch('beyonce');
    }

    videoSearch(term) { 
        YTSearch({key:API_KEY, term: term}, (videos) =>  { 
            this.setState({
                videos: videos,
                selectedVideo: videos[0] //first video in list set to selected video
            });
        });
    }

    addToPlaylist() { 
       var selectedVideo = this.state.selectedVideo;
       var playList = this.state.songs;
       playList.push(selectedVideo);
    };


    render() { 
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

        return(
        <div> 
            <SearchBar onSearchTermChange={videoSearch}  />
            <VideoDetails video = {this.state.selectedVideo} />
            <VideoList 
                onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            <Button link = '#' buttonId = 'addToPlaylist' text = 'Add to Playlist +' 
            change = {this.addToPlaylist}  />
            <PlaylistHolder songs={this.state.songs}   />
        </div>
        );
    }
}

//passing instance of App class with JSX tags
ReactDOM.render(<App />, document.querySelector('.container'));

