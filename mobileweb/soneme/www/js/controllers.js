angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $stateParams) {
  $scope.gridSongs = [
    { id:1, name: 'Before The Stars', artist: 'Is/Is', coverUrl: 'img/albums/W1 Before The Stars.jpeg' },
    { id:2, name: 'Endlessly', artist: 'TOY', coverUrl: 'img/albums/W1 Endlessly.jpeg' },
    { id:3, name: 'I Can See', artist: 'Moon Duo', coverUrl: 'img/albums/W1 I Can See.jpeg' },
    { id:4, name: 'Josephine', artist: 'Magnolia Electric Co', coverUrl: 'img/albums/W1 Josephine.jpeg' },
    { id:5, name: 'The Faker', artist: 'Ty Segall', coverUrl: 'img/albums/W1C2 The Faker.jpg', center: true },
    { id:6, name: 'Krazy Koz', artist: 'Mojave 3', coverUrl: 'img/albums/W1 Krazy Koz.jpeg' },
    { id:7, name: 'Lucia', artist: 'Hiss Golden Messenger', coverUrl: 'img/albums/W1 Lucia.jpeg' },
    { id:8, name: 'Women At Well', artist: 'Israel Nash', coverUrl: 'img/albums/W1 Women At The Well.jpeg' },
    { id:9, name: 'Red Eyes', artist: 'The War on Drugs', coverUrl: 'img/albums/W1C1 Red Eyes.jpeg' }
  ];

    $scope.futureSongs = [
        { name: 'Contraption', artist: 'Thee Oh Sees', time: '5:21', coverUrl: 'img/albums/W2 Contraption_Soul Desert.jpg' },
        { name: 'Flying Golem', artist: 'Wand', time: '3:20', coverUrl: 'img/albums/W2 Flying Golem.jpeg' },
        { name: 'I Am Astronaut', artist: "Bushman's Revenge", time: '3:54', coverUrl: 'img/albums/W2 I Am An Astronaut.jpeg' },
        { name: 'My Secret To Keep', artist: "The She's", time: '4:01', coverUrl: 'img/albums/W2 My Secret To Keep.jpeg' },
        { name: 'Pure Terror', artist: 'Jack Name', time: '3:20', coverUrl: 'img/albums/W2 Pure Terror.jpeg'},
        { name: 'Rip Van Winkle', artist: 'Shannon and the Clams', time: '2:12', coverUrl: 'img/albums/W2 Rip Van Winkle.jpeg' },
        { name: 'Words', artist: 'Goat', time: '3:06', coverUrl: 'img/albums/W2 Words.jpeg' },
        { name: 'I Was Not There', artist: 'Terry Malts', time: '2:41', coverUrl: 'img/albums/W2C3 I Was Not There.jpeg' },
        { name: 'Cherry Street', artist: 'Tijuana Panthers', time: '3:07', coverUrl: 'img/albums/W3 Cherry Street.jpeg' },
        { name: 'I Got The Moves', artist: 'Habibi', time: '1:45', coverUrl: 'img/albums/W3 I Got The Moves.jpeg' },
        { name: 'Like Like', artist: 'The Intelligence', time: '1:49', coverUrl: 'img/albums/W3 Like Like Like Like Like Like Like.jpeg' },
        { name: 'No Time Blues', artist: 'OBN IIIs', time: '3:44', coverUrl: 'img/albums/W3 No Time For The Blues.jpg' },
        { name: 'Nowhere To Go', artist: 'Tony Molina', time: '0:48', coverUrl: 'img/albums/W3 Nowhere To Go.jpg'},
        { name: 'Someone For You', artist: 'Warm Soda', time: '2:18', coverUrl: 'img/albums/W3 Someone For You.jpeg' },
        { name: 'Sure As Spring', artist: 'La Luz', time: '2:23', coverUrl: 'img/albums/W3 Sure As Spring.jpeg' },
        { name: 'The Doldrums', artist: 'Ceremony', time: '3:02', coverUrl: 'img/albums/W3 The Doldrums (Friendly City).jpeg' },
        { name: 'Before The Stars', artist: 'Is/Is', time: '3:44', coverUrl: 'img/albums/W1 Before The Stars.jpeg' },
        { name: 'Endlessly', artist: 'TOY', time: '4:33', coverUrl: 'img/albums/W1 Endlessly.jpeg' },
        { name: 'I Can See', artist: 'Moon Duo', time: '4:45', coverUrl: 'img/albums/W1 I Can See.jpeg' },
        { name: 'Josephine', artist: 'Magnolia Electric Co', time: '3:22', coverUrl: 'img/albums/W1 Josephine.jpeg' },
        { name: 'The Faker', artist: 'Ty Segall', time: '4:07', coverUrl: 'img/albums/W1C2 The Faker.jpg'},
        { name: 'Krazy Koz', artist: 'Mojave 3', time: '4:01', coverUrl: 'img/albums/W1 Krazy Koz.jpeg' },
        { name: 'Lucia', artist: 'Hiss Golden Messenger', time: '3:11', coverUrl: 'img/albums/W1 Lucia.jpeg' },
        { name: 'Women At Well', artist: 'Israel Nash', time: '4:35', coverUrl: 'img/albums/W1 Women At The Well.jpeg' },
        { name: 'Red Eyes', artist: 'The War on Drugs', time: '4:59', coverUrl: 'img/albums/W1C1 Red Eyes.jpeg' }
    ];

  $scope.nowPlaying = { name: 'Red Eyes', artist: 'The War on Drugs', time: '4:59', coverUrl: 'img/albums/W1C1 Red Eyes.jpeg' };

  $scope.queueSongs = [
      { name: 'I Can See', artist: 'Moon Duo', time: '4:45', coverUrl: 'img/albums/W1 I Can See.jpeg' },
  ];

  if($stateParams.gridId){
    $scope.artistInfo = $scope.gridSongs[$stateParams.gridId - 1];
  }

  $scope.songInCenter = []
  $scope.showQueue = false;

  if(!$scope.isSongPlaying){
    $scope.isSongPlaying = true;

    setInterval(function ()
        {
            var time = $scope.nowPlaying.timeLeft || $scope.nowPlaying.time;
            if(time > 0){
                $scope.nowPlaying.timeLeft = time - 1;
            }
        }, 1000);
  }

  $scope.dragStartCallback = function(event, ui) {
    jQuery("ion-content").addClass("onTop");
    jQuery(".footer").addClass("dropZone");
    jQuery(".artistInfoDropZone").addClass("dropZone");
    jQuery(".coverContainer.center").addClass("dropZone");
  };

  $scope.dragStopCallback = function(event, ui) {
    jQuery("ion-content").removeClass("onTop");
    jQuery(".footer").removeClass("dropZone");
    jQuery(".artistInfoDropZone").removeClass("dropZone");
    jQuery(".coverContainer.center").removeClass("dropZone");
  };

  $scope.dropInArtistInfoCallback = function(event, ui) {
    $state.go('app.artistInfo');
  };

  $scope.dropInCenterCallback = function(event, ui) {

    $scope.gridSongs[4] = $scope.songInCenter[0];
    $scope.gridSongs[4].center = true;
    $scope.songInCenter = [];

    $scope.gridSongs[0] = $scope.futureSongs[0];
    $scope.gridSongs[1] = $scope.futureSongs[1];
    $scope.gridSongs[2] = $scope.futureSongs[2];
    $scope.gridSongs[3] = $scope.futureSongs[3];

    $scope.gridSongs[5] = $scope.futureSongs[4];
    $scope.gridSongs[6] = $scope.futureSongs[5];
    $scope.gridSongs[7] = $scope.futureSongs[6];
    $scope.gridSongs[8] = $scope.futureSongs[7];

    var i;
    for (i = 0; i < 9; i++){
        $scope.gridSongs[i].id = i+1;
    }

    $scope.futureSongs.splice(0, 8);

    $scope.dragStopCallback();
  };
})

.controller('SearchCtrl', function($scope) {
    $scope.search = [
        {keyword:"The War on Drugs", type:"Artist"},
        {keyword:"TOY", type:"Artist"},
        {keyword:"Ty Segall", type:"Artist"},
        {keyword:"Is/Is", type:"Artist"},
        {keyword:"Mojave 3", type:"Artist"},
        {keyword:"Israel Nash", type:"Artist"},
        {keyword:"Magnolia Electric Co", type:"Artist"},
        {keyword:"Moon Duo", type:"Artist"},
        {keyword:"Thee Oh Sees", type:"Artist"},
        {keyword:"Goat", type:"Artist"},
        {keyword:"Terry Malts", type:"Artist"},
        {keyword:"Shannon and the Clams", type:"Artist"},
        {keyword:"Jack Name", type:"Artist"},
        {keyword:"The She's", type:"Artist"},
        {keyword:"Bushman's Revenge", type:"Artist"},
        {keyword:"Wand", type:"Artist"},
        {keyword:"OBN IIIs", type:"Artist"},
        {keyword:"Habibi", type:"Artist"},
        {keyword:"Tony Molina", type:"Artist"},
        {keyword:"Tijuana Panthers", type:"Artist"},
        {keyword:"Warm Soda", type:"Artist"},
        {keyword:"La Luz", type:"Artist"},
        {keyword:"Ceremony", type:"Artist"},
        {keyword:"The Intelligence", type:"Artist"},
        {keyword:"Earth", type:"Artist"},
        {keyword:"Rivulets", type:"Artist"},
        {keyword:"The Dixie Giants", type:"Artist"},
        {keyword:"The Muffs", type:"Artist"},
        {keyword:"Vitamins", type:"Artist"},
        {keyword:"Disappears", type:"Artist"},
        {keyword:"I Am An Astronaut", type:"Song"},
        {keyword:"Red Eyes", type:"Song"},
        {keyword:"Endlessly", type:"Song"},
        {keyword:"The Faker", type:"Song"},
        {keyword:"Before the Stars", type:"Song"},
        {keyword:"Krazy Koz", type:"Song"},
        {keyword:"Women at the Well", type:"Song"},
        {keyword:"Josephine", type:"Song"},
        {keyword:"I Can See", type:"Song"},
        {keyword:"Contraption/Soul Desert", type:"Song"},
        {keyword:"Words", type:"Song"},
        {keyword:"I Was Not There", type:"Song"},
        {keyword:"Rip Van Winkle", type:"Song"},
        {keyword:"Pure Terror", type:"Song"},
        {keyword:"My Secret to Keep", type:"Song"},
        {keyword:"Flying Golem", type:"Song"},
        {keyword:"No Time for the Blues", type:"Song"},
        {keyword:"I Got the Moves", type:"Song"},
        {keyword:"Nowhere to Go", type:"Song"},
        {keyword:"Cherry Street", type:"Song"},
        {keyword:"Someone for You", type:"Song"},
        {keyword:"Sure as Spring", type:"Song"},
        {keyword:"The Doldrums (Friendly City)", type:"Song"},
        {keyword:"Like Like Like Like Like Like Like", type:"Song"},
        {keyword:"Thou Shalt Boogie!", type:"Album"},
        {keyword:"Lost in the Dream", type:"Album"},
        {keyword:"Join the Dots", type:"Album"},
        {keyword:"Manipulator", type:"Album"},
        {keyword:"Shadow Days", type:"Album"},
        {keyword:"Excuses for Travellers", type:"Album"},
        {keyword:"Rain Plains", type:"Album"},
        {keyword:"Josephine", type:"Album"},
        {keyword:"Circles", type:"Album"},
        {keyword:"Carrion Crawler/The Dream", type:"Album"},
        {keyword:"Commune", type:"Album"},
        {keyword:"Nobody Realizes This Is Nowhere", type:"Album"},
        {keyword:"Dreams in the Rat House", type:"Album"},
        {keyword:"Light Show", type:"Album"},
        {keyword:"Dreamers", type:"Album"},
        {keyword:"Ganglion Reef", type:"Album"},
        {keyword:"Live in San Francisco", type:"Album"},
        {keyword:"Habibi", type:"Album"},
        {keyword:"Dissed and Dissmissed", type:"Album"},
        {keyword:"Wayne Interest", type:"Album"},
        {keyword:"Someone for You", type:"Album"},
        {keyword:"It's Alive", type:"Album"},
        {keyword:"Rohnert Park", type:"Album"},
        {keyword:"Males", type:"Album"},
        {keyword:"Bright", type:"Mood"},
        {keyword:"Kinetic", type:"Mood"},
        {keyword:"Summery", type:"Mood"},
        {keyword:"Dreamy", type:"Mood"},
        {keyword:"Atmospheric", type:"Mood"},
        {keyword:"Sprawling", type:"Mood"},
        {keyword:"Cathartic", type:"Mood"},
        {keyword:"Earnest", type:"Mood"},
        {keyword:"Organic", type:"Mood"},
        {keyword:"Warm", type:"Mood"},
        {keyword:"Reflective", type:"Mood"},
        {keyword:"Urgent", type:"Mood"},
        {keyword:"Uncompromising", type:"Mood"},
        {keyword:"Wistful", type:"Mood"},
        {keyword:"Spacey", type:"Mood"},
        {keyword:"Insular", type:"Mood"},
        {keyword:"thrash metal", type:"Genre"},
        {keyword:"ambient drone", type:"Genre"},
        {keyword:"Ethiopian funk", type:"Genre"},
        {keyword:"chicha", type:"Genre"},
        {keyword:"rock en español", type:"Genre"},
        {keyword:"hard bop", type:"Genre"},
        {keyword:"hip hop (classic)", type:"Genre"},
        {keyword:"jazz fusion", type:"Genre"},
        {keyword:"krautrock", type:"Genre"},
        {keyword:"lo-fi pop", type:"Genre"},
        {keyword:"prog rock", type:"Genre"},
        {keyword:"garage punk", type:"Genre"},
        {keyword:"psych", type:"Genre"},
        {keyword:"rock", type:"Genre"},
        {keyword:"punk", type:"Genre"},
        {keyword:"post-punk", type:"Genre"},
        {keyword:"post-rock", type:"Genre"},
        {keyword:"proto-punk", type:"Genre"},
        {keyword:"country", type:"Genre"},
        {keyword:"alt-country", type:"Genre"},
        {keyword:"hard rock", type:"Genre"},
        {keyword:"garage rock", type:"Genre"},
        {keyword:"2014", type:"Time"},
        {keyword:"60s", type:"Time"},
        {keyword:"00s", type:"Time"},
        {keyword:"1977", type:"Time"},
        {keyword:"2013", type:"Time"}
    ];
})

.controller('DJsCtrl', function($scope, $stateParams) {
  $scope.djs = [
    { id:1, title: 'Fear One', img: 'img/djs/dj1.jpg', wheel:'img/wheels/Wheel 1.png', listeners: 5, views: 658, subtitle: "that's hecka sweet"},
    { id:2, title: 'Mike T', img: 'img/djs/dj2.jpg', wheel:'img/wheels/Wheel 2.png', listeners: 15, views: 45, subtitle: "the sounds of California"},
    { id:3, title: 'Terra Nash', img: 'img/djs/dj3.jpg', wheel:'img/wheels/Wheel 3.png', listeners: 22, views: 430, subtitle: "jump around"},
    { id:4, title: 'DJ Get Up', img: 'img/djs/dj4.jpg', wheel:'img/wheels/Wheel 4.png', listeners: 3, views: 12, subtitle: "music/peace/love"},
    { id:5, title: 'Earl Ross', img: 'img/djs/dj5.gif', wheel:'img/wheels/Wheel 1.png', listeners: 17, views: 112, subtitle: "punk's not dead"},
    { id:6, title: 'DJ Sonora', img: 'img/djs/dj6.jpg', wheel:'img/wheels/Wheel 2.png', listeners: 8, views: 1323, subtitle: "songs in the desert"},
    { id:7, title: 'Wendell Maas', img: 'img/djs/dj7.gif', wheel:'img/wheels/Wheel 3.png', listeners: 2, views: 35, subtitle: "W.A.S.T.E. postal service songs"},
    { id:8, title: 'DJ Jenna', img: 'img/djs/dj8.jpg', wheel:'img/wheels/Wheel 4.png', listeners: 11, views: 198, subtitle: "songs for good times"},
    { id:9, title: 'Cabwaylingo', img: 'img/djs/dj9.jpg', wheel:'img/wheels/Wheel 1.png', listeners: 21, views: 200, subtitle: "Jason Molina's my hero"}
  ];


  if($stateParams.djId){
    $scope.currentDJ = $scope.djs[$stateParams.djId - 1];
  }

});
