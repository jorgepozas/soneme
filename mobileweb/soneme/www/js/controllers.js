angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {
  $scope.gridSongs = [
    { name: 'Before The Stars', artist: 'Is/Is', coverUrl: 'img/albums/W1 Before The Stars.jpeg' },
    { name: 'Endlessly', artist: 'TOY', coverUrl: 'img/albums/W1 Endlessly.jpeg' },
    { name: 'I Can See', artist: 'Moon Duo', coverUrl: 'img/albums/W1 I Can See.jpeg' },
    { name: 'Josephine', artist: 'Magnolia Electric Co', coverUrl: 'img/albums/W1 Josephine.jpeg' },
    { name: 'Krazy Koz', artist: 'Mojave 3', coverUrl: 'img/albums/W1 Krazy Koz.jpeg' },
    { name: 'Lucia', artist: 'Hiss Golden Messenger', coverUrl: 'img/albums/W1 Lucia.jpeg' },
    { name: 'Women At The Well', artist: 'Israel Nash', coverUrl: 'img/albums/W1 Women At The Well.jpeg' },
    { name: 'Red Eyes', artist: 'The War on Drugs', coverUrl: 'img/albums/W1C1 Red Eyes.jpeg' },
    { name: 'The Faker', artist: 'Ty Segall', coverUrl: 'img/albums/W1C2 The Faker.jpg' }
  ];

  $scope.nowPlaying = { name: 'Red Eyes', artist: 'Artist', coverUrl: 'img/albums/W1C1 Red Eyes.jpeg' };

  $scope.queueSongs = [
      { name: 'I Can See', artist: 'Artist', coverUrl: 'img/albums/W1 I Can See.jpeg' },
  ];

  $scope.artistInfo = [];

  $scope.dragStartCallback = function(event, ui) {
    jQuery("ion-content").addClass("onTop");
    jQuery(".footer").addClass("dropZone");
    jQuery(".artistInfoDropZone").addClass("dropZone");
  };

  $scope.dragStopCallback = function(event, ui) {
    jQuery("ion-content").removeClass("onTop");
    jQuery(".footer").removeClass("dropZone");
    jQuery(".artistInfoDropZone").removeClass("dropZone");
  };

  $scope.dropInArtistInfoCallback = function(event, ui) {
      $state.go('app.artistInfo');
  };

})

.controller('DJsCtrl', function($scope, $stateParams) {
  $scope.djs = [
    { id:1, title: 'Fear One', img: 'img/djs/dj1.jpg' },
    { id:2, title: 'Mike T', img: 'img/djs/dj2.jpg' },
    { id:3, title: 'Terra Nash', img: 'img/djs/dj3.jpg' },
    { id:4, title: 'DJ Get Up', img: 'img/djs/dj4.jpg' },
    { id:5, title: 'Earl Ross', img: 'img/djs/dj5.gif' },
    { id:6, title: 'DJ Sonora', img: 'img/djs/dj6.jpg' },
    { id:7, title: 'Wendell Maas', img: 'img/djs/dj7.gif' },
    { id:8, title: 'DJ Jenna', img: 'img/djs/dj8.jpg' },
    { id:9, title: 'Cabwaylingo', img: 'img/djs/dj9.jpg' }
  ];


  if($stateParams.djId){
    $scope.currentDJ = $scope.djs[$stateParams.djId - 1];
  }

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
