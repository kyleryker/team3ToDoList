angular.module('toDoList').controller('appController', function ($scope, $timeout) {
    $scope.test = 'dude';

    $timeout(function () {
        $scope.test = 'what\'s up';
        $timeout(function () {
            $scope.test = 'bro';
            $timeout(function () {
                $scope.test = 'how you doing?';
                $timeout(function () {
                    $scope.test = 'really????';
                    $timeout(function () {
                        $scope.test = 'NO WAY DUDE!!!!';
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
});


