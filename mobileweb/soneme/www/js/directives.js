angular.module('starter.directives', [])
    .directive('gridCover', function() {

        return {
            restrict: 'E',
            scope: {
                song: '=info'
            },
            templateUrl: 'directives/gridcover.html'
        };
    })
    .directive('player', function() {

        return {
            restrict: 'E',
            scope: {
                queueSongs: '=info',
                nowPlaying: '=now',
                showQueue: '=state'
            },
            templateUrl: 'directives/player.html'
        };
    })
    .directive('queue', function() {

        return {
            restrict: 'E',
            scope: {
                queueSongs: '=info'
            },
            templateUrl: 'directives/queue.html'
        };
    });
