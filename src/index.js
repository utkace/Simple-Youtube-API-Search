import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBFOgNv9Ly0yhea5WNE_Cmcc1g6JAUQcGc';

// Create a new Component. This component shoud produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    this.videoSearch('Ed Sheeran');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos, //videos: videos == videos
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return ( //position of this parenthesis is important
        <div>
            <SearchBar onSearchTermChange = {videoSearch}/>
            <VideoDetail video = {this.state.selectedVideo} />
            <VideoList
              onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
              videos = {this.state.videos} />
        </div>
    );
    //videos is props here
  }
} //function() == {() =>} es6 syntax

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
//<App /> is an instance of the App Class
//<App /> == <App></App>
//App is rendered in a div of .container class
//
