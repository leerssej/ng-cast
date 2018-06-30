angular.module('video-player')//.service('youTube', youTube)
  .controller('myController', ['youTube', function(youTube) {
    // this.videos = window.exampleVideoData;
    // this.currentVideo = window.exampleVideoData[0];
    this.videos = [];
    this.currentVideo = {};
      
    this.selectVideo = video => {
      this.currentVideo = video;
    };
      
    this.searchResults = q => youTube.searchYouTube(q, (data) => {
      this.videos = data;
      this.currentVideo = data[0];
    });

    this.searchResults();
  }])

  .component('app', {   
    templateUrl: 'src/templates/app.html',
    controller: 'myController' 
  });
