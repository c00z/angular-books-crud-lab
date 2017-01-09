//creating brand new app, telling angular to load in ngRoute
angular.module('libraryApp', ['ngRoute'])
       .config(config);


////////////
// ROUTES //
////////////

//injecting two different providers
config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {  //when on this url go to the below url and use these controllers
      templateUrl: 'templates/books/index.html',  // this "partial" html file
      controller: 'BooksIndexController',         // uses this controller
      controllerAs: 'booksIndexCtrl'              // with this name
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      controller: 'AboutShowController',
      controllerAs: 'aboutShowCtrl'
    })
    .when('/books/:id', {
      templateUrl: 'templates/books/show.html',
      controller: 'BooksShowController',
      controllerAs: 'booksShowCtrl'
    })
    .otherwise({  //if unrecoginized URL, set back to index
      redirectTo: '/'
    });

  $locationProvider //deals w/ urls, telling location provider it should be using HTML5 mode.
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
