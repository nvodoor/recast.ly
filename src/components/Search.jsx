var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={(event) => props.inputTextEvent(event.target.value)} className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={() => autoplay ? autoplay = 0 : autoplay = 1}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
//<input ref={(input) => props.inputTextEvent(input)} onKeyUp={function() { props.searchEvent(); } } className="form-control" type="text" />
//onKeyUp={function() {props.searchEvent()}}