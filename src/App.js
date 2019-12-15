import React, { Component } from 'react';
import Search from './search.component';
import YouTubeList from './youTubeList.component';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import YoutubePlayer from './youTubeVideoPlayer.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchEvent: " ",
      YouTubeList: [],
      video_id : ""
    }
  };
  
  searchSomething = async (e) => {
    e.preventDefault();
    let item = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyD9vUbvaS6iBXVlYpSi70dWEs-W8k7hlbk`,
      {
        params: {
          part: "snippet",
          maxResults: 10,
          q: this.state.searchEvent,
          pageToken: "AIzaSyD9vUbvaS6iBXVlYpSi70dWEs-W8k7hlbk"
        } //params
      } //second parameter
    ); //item
    console.log(item);
    this.setState({ YouTubeList: item.data.items });
  } //searchSomething

  playVideo = (listItems) => {
     console.log("list", listItems);
    this.setState({ video_id : listItems.id.videoId });
  };


  render() {
    console.log(this.state.searchEvent);

    return (
      <div className="container">
          <form onSubmit = {this.searchSomething}>
            <Search placeholder = "Search"
              searchEvent = {e => this.setState({ searchEvent: e.target.value })}
            />
        </form>

        <div className="row">
          <YouTubeList list={this.state.YouTubeList} playVideo_prop_list={this.playVideo}/>
        </div>

        <div className="row">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2V1shb3Mi4s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          {/* <YoutubePlayer video_id={this.state.video_id}/> */}
        </div>
      </div>

    );//return
    
  }; //render
} //class App

export default App;
