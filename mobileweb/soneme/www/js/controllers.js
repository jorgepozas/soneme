angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $scope.gridSongs = [
    { name: 'Before The Stars', artist: 'Artist', coverUrl: 'img/albums/W1 Before The Stars.jpeg' },
    { name: 'Endlessly', artist: 'Artist', coverUrl: 'img/albums/W1 Endlessly.jpeg' },
    { name: 'I Can See', artist: 'Artist', coverUrl: 'img/albums/W1 I Can See.jpeg' },
    { name: 'Josephine', artist: 'Artist', coverUrl: 'img/albums/W1 Josephine.jpeg' },
    { name: 'Krazy Koz', artist: 'Artist', coverUrl: 'img/albums/W1 Krazy Koz.jpeg' },
    { name: 'Lucia', artist: 'Artist', coverUrl: 'img/albums/W1 Lucia.jpeg' },
    { name: 'Women At Well', artist: 'Artist', coverUrl: 'img/albums/W1 Women At The Well.jpeg' },
    { name: 'Red Eyes', artist: 'Artist', coverUrl: 'img/albums/W1C1 Red Eyes.jpeg' },
    { name: 'The Faker', artist: 'Artist', coverUrl: 'img/albums/W1C2 The Faker.jpg' }
  ];

  $scope.queueSongs = [
    { name: 'Red Eyes', artist: 'Artist', coverUrl: 'img/albums/W1C1 Red Eyes.jpeg' }
  ];

  $scope.dragStartCallback = function(event, ui) {
    jQuery("ion-content").addClass("onTop");
    jQuery(".footer").addClass("bordered");
  };

  $scope.dragStopCallback = function(event, ui) {
    jQuery("ion-content").removeClass("onTop");
    jQuery(".footer").removeClass("bordered");
  };

})

.controller('DJsCtrl', function($scope) {
  $scope.djs = [
    { id:1, title: 'Fear One', id: 1, img: 'img/albums/W2 Words.jpeg' },
    { id:2, title: 'DJ Pozas', id: 2, img: 'img/albums/W1 Endlessly.jpeg' },
    { id:3, title: 'DJ Away', id: 3, img: 'img/albums/W1 Endlessly.jpeg' },
    { id:4, title: 'Tara L', id: 4, img: 'img/albums/W1 Endlessly.jpeg' },
    { id:5, title: 'Crazy Player', id: 5, img: 'img/albums/W1 Endlessly.jpeg' },
    { id:6, title: 'Master Lucius', id: 6, img: 'img/albums/W1 Endlessly.jpeg' }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
