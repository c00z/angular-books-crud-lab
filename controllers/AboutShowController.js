angular.module('libraryApp')
  .controller('AboutShowController', AboutShowController);

AboutShowController.$inject = [];

function AboutShowController () {
    var vm = this;
    vm.name = "Zach Cusimano"; //{{aboutShowCtrl.name}}

}
