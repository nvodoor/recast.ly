class App extends React.Component {
  constructor(props) {
    super(props);
    this.text = '';
    this.state = {
      videos: props.videos || window.exampleVideoData,
      currentvideo: null,
      inputText: ''
    };

  }

  onVideoClick(video) {
    this.setState({currentvideo: video});
  }

  storeInputText(text) {
    this.componentDidMount(text);
  }

  render() {

    return (
    <div>
      <Nav inputTextEvent={this.storeInputText.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentvideo || this.state.videos[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList Clicker={this.onVideoClick.bind(this)} videos={this.state.videos}/>
        </div>
    </div>);
  }  
  componentDidMount(query = 'cute puppies') {

    this.props.searchYouTube({key: 'AIzaSyCbs-YSZJ_Ya37LFtEhfW7eayDyrJFJIMc', query: query, maxResults: 5}, 
    (data) => { this.setState({videos: data, currentvideo: this.state.videos[0], inputText: query}); });
  }


}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
