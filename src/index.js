// TODO: Render the `App` component to the DOM

//searchYouTube({key: 'AIzaSyCbs-YSZJ_Ya37LFtEhfW7eayDyrJFJIMc', query: 'dogs', maxResults: 5}, (data) => {data; });
window.autoplay = 1;
ReactDOM.render(<App searchYouTube={window.searchYouTube}/>, document.getElementById('app'));

//test
