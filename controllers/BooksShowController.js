angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
BooksShowController.$inject=['$http','$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  console.log(vm, "this is vm")
  var bookId = $routeParams.id;
  console.log(bookId)
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+ bookId
  }).then(function successCallback(response) {
    console.log("Hitting Get Success on BooksShowController", response.data);
    vm.book = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);

  });

  vm.deleteBook = function (book){
    var bookId = $routeParams.id;
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/'+ bookId
    }).then(function deleteSucess(deletedBook){
      console.log(deletedBook, "this is the deleted book");
      $location.path('/');
    }), function deleteError (response){
      console.log("ERROR!", response);
    }
  }
}
