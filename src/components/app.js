angular.module('video-player')//.service('youTube', youTube)
  .controller('myController', ['youTube', function(youTube) {
    // this.videos = window.exampleVideoData;
    // this.currentVideo = window.exampleVideoData[0];
    this.videos = [];
    this.currentVideo = {};
      
    this.selectVideo = video => {
      this.currentVideo = video;
    };
      
    this.searchResults = q => youTube.search(q, (data) => {
      this.videos = data;
      this.currentVideo = data[0];
    });

    this.searchResults();

    // separate the nested function
    // the first will pull down the data

    // first function to pull down query and make params object
    // call the service with callback and params object

    // second function sets controller state with the new videos


  }])

  .component('app', {   
    templateUrl: 'src/templates/app.html',
    controller: 'myController' 
  });

/// freezes unnested function activity //////////////////
// this.videos = [];
// this.currentVideo = {};
  
// this.selectVideo = video => {
//   this.currentVideo = video;
// };
  
// this.searchResults = q => {
//   let queryObj = {
//     query: q
//   };
//   youTube.searchYouTube(params, this.results(data));
// };

// this.results = data => {
//   console.log(data);
//   this.videos = data;
//   this.currentVideo = data[0];

// };

// this.searchResults();
/////////////////////////////////////////////////////////