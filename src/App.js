import React, { Component } from 'react';
import Search from './Components/search.component';
import axios from 'axios';
import YouTubeList from './Components/youtubeList.component';
import SelectedVideo from './Components/selectedVideo.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: "",
      searchedListItems: [],
      playThisVideo: ""
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();

    let item = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAm-RjFwmAcV4ji4-vT-kSa9xI2pbjp_Rw',
      {
        params: {
          part: "snippet",
          maxResults: 5,
          q: this.state.searchField
        }
      });
    console.log(item);
    this.setState({ searchedListItems: item.data.items });
  }

  playVideo = (eachItem) => {
    console.log("eachItem", eachItem);
    this.setState({ playThisVideo: eachItem });
  }

  render() {
    console.log(this.state.searchField);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.onSubmit}>    
              <Search userInput={(e) => { this.setState({searchField : e.target.value}) }}/>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <SelectedVideo videoPlayed={this.state.playThisVideo} />
          </div>
          <div className="col-md-6">
            <YouTubeList searchedListItems={this.state.searchedListItems} playVideo={this.playVideo}/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
