angular.module('video-player')//.service('youTube', youTube)
  
  .controller('myController', ['youTube', function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
      
    this.selectVideo = video => {
      this.currentVideo = video;
    };
      
    //youTube();
    this.search = q => youTube.searchYouTube(q, (data) => {
      // console.log(this.videos);
      this.videos = data;
      this.currentVideo = data[0];
    });
  }])

  .component('app', {   
    templateUrl: 'src/templates/app.html',
    controller: 'myController' 
  });
