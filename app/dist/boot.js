/// <reference path="_all.ts" />
var LegendaryOctoWaddleApp;
(function (LegendaryOctoWaddleApp) {
    angular.module('legendaryOctoWaddleApp', ['ngMaterial'])
        .service('userService', LegendaryOctoWaddleApp.UserService)
        .controller('mainController', LegendaryOctoWaddleApp.MainController);
})(LegendaryOctoWaddleApp || (LegendaryOctoWaddleApp = {}));
//# sourceMappingURL=boot.js.map