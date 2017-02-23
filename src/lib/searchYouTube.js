var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {key: options.key, q: options.query, maxResults: options.max, part: 'snippet', order: 'date', videoEmbeddable:'true'},
    contentType: 'application/json',
    success: function(data) {
      console.log(callback);
      callback(data.items);
      // data.items.forEach(function(value) {
      //   callback(value);
      // });
      
    }
  });
};

window.searchYouTube = searchYouTube;
