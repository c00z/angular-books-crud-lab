angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController ($http) {
  var vm = this;
  vm.newBook = {};
  // vm.newAlbum = {
  //   name: 'Viva Hate',
  //   artistName: 'Morrissey'
  // };

$http({
  method: 'GET',
  url: 'https://super-crud.herokuapp.com/books'
}).then(function successCallback(response) {
  console.log("Hitting Get Success", response);
  vm.books = response.data.books;
}, function errorCallback(response) {
  console.log('There was an error getting the data', response);
});

vm.createBook = function () {
  $http({
    method: 'POST',
    url: 'https://super-crud.herokuapp.com/books',
    data: vm.newBook,
  }).then(function successCallback(response) {
    vm.books.push(response.data);
  }, function errorCallback(response) {
    console.log('There was an error posting the data', response);
  });
}


}
