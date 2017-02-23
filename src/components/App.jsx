class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.videos || window.exampleVideoData,
      currentvideo: null
    };

  }

  onVideoClick(video) {
    this.setState({currentvideo: video});
  }

  render() {

    return (
    <div>
      <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentvideo || this.state.videos[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList Clicker={this.onVideoClick.bind(this)} videos={this.state.videos}/>
        </div>
    </div>);
  }  
  componentDidMount() {
    this.props.searchYouTube({key: 'AIzaSyCbs-YSZJ_Ya37LFtEhfW7eayDyrJFJIMc', query: 'cute puppies', maxResults: 5}, 
    (data) => { this.setState({videos: data, currentvideo: this.state.videos[0]}); });
  }


}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
