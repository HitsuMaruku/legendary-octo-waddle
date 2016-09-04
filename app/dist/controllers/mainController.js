/// <reference path="../_all.ts" />
var LegendaryOctoWaddleApp;
(function (LegendaryOctoWaddleApp) {
    var MainController = (function () {
        function MainController(userService) {
            this.userService = userService;
            this.users = [];
            this.message = "Hello from our controller";
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                self.users = users;
                console.log(self.users);
            });
        }
        MainController.$inject = ['userService'];
        return MainController;
    }());
    LegendaryOctoWaddleApp.MainController = MainController;
})(LegendaryOctoWaddleApp || (LegendaryOctoWaddleApp = {}));
//# sourceMappingURL=mainController.js.map