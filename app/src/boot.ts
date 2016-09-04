/// <reference path="_all.ts" />

module LegendaryOctoWaddleApp {
    angular.module('legendaryOctoWaddleApp', ['ngMaterial'])
        .service('userService', UserService)
        .controller('mainController', MainController);
}