angular.module('video-player')
  // .controller('AppCtrl', function($scope) {
  //    $scope.data = window.exampleVideoData;
  // });
  .component('videoList', {
    bindings: {
      videos: '<'
    },
    
    templateUrl: 'src/templates/videoList.html',
    
    controller: function($scope) {
     
    }
  });
