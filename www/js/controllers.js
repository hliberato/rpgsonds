angular.module('ionicApp', ['ionic','ngAudio'])

.controller('MyCtrl', function($scope, ngAudio) {

  $scope.items = [{
    id: 1,
    name: 'Criança rindo',
    image: 'ax3.png',
    volume: '0',
    audio: ngAudio.load('sonds/Kid_Laugh.mp3')
  }, {
    id: 2,
    name: 'Chuvona e trovões',
    image: 'protected11.png',
    volume: '0',
    audio: ngAudio.load('sonds/elaborate_thunder.mp3')
  }, {
    id: 3,
    name: 'Tiroteio muito loco',
    image: 'weapon34.png',
    volume: '0',
    audio: ngAudio.load('sonds/Sounds_of_War.mp3')
  }, {
    id: 4,
    name: 'Sino e passarinhos',
    image: 'swords3.png',
    volume: '0',
    audio: ngAudio.load('sonds/Sunday_Church.mp3')
  }];

});