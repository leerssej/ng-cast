angular.module('video-player')
  // .controller('AppCtrl', function($scope) {
  //    $scope.data = window.exampleVideoData;
  // });
  .component('videoList', {
    templateUrl: 'src/templates/videoList.html',
    
    controller: function() {
      this.data = window.exampleVideoData;
    }
  });
