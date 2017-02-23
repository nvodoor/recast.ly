var App = (props) => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer/>
    </div>
    <div className="col-md-5">
      {console.log("props", props)};
      {console.log("window", window.exampleVideoData)};
      <VideoList videos={props.videos}/>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;