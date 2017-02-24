// TODO: Render the `App` component to the DOM

//searchYouTube({key: 'AIzaSyCbs-YSZJ_Ya37LFtEhfW7eayDyrJFJIMc', query: 'dogs', maxResults: 5}, (data) => {data; });

ReactDOM.render(<App searchYouTube={_.debounce(window.searchYouTube, 500)}/>, document.getElementById('app'));

//test
