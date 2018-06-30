angular.module('video-player')//.service('youTube', youTube)
  
  .controller('myController', ['youTube', '$http', function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
      
    this.selectVideo = video => {
      this.currentVideo = video;
    };
      
    youTube();
    //this.search = q => youTube(q);
  }])

  .component('app', {   
    templateUrl: 'src/templates/app.html',
    controller: 'myController' 
  });
