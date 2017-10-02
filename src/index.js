// Create a new component which produces some HTML
// Take this component's generated HTML and put it on the page (in the DOM)
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAgb7M84OCsJGmvsOwHwLho7vSMI5sLs9Y'; //use parent component to fetch data

class App extends Component { 
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
    render() { 
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

        return(
        <div> 
            <SearchBar onSearchTermChange={videoSearch}  />
            <VideoDetail video = {this.state.selectedVideo} />
            <VideoList 
                onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
        </div>
        );
    }
}

//passing instance of App class with JSX tags
ReactDOM.render(<App />, document.querySelector('.container'));

