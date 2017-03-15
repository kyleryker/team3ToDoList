angular.module('toDoList',['ui.router'])
    .config(function($urlRouterProvider, $stateProvider){
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: './views/home.html'
            })
            .state('app',{
                url: '/app',
                templateUrl: './views/app.html',
                controller: 'appController'
            })
        $urlRouterProvider.otherwise('/');
    })
