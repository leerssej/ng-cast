angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(q, cb) {
      var params = {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        q: q,     
        embeddable: true
      };

      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: params
      }).then(function(data) {
        cb(data.data.items);
      }, function(error) {
        console.log(error);
      });
    };
  });
