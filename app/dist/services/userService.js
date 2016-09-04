/// <reference path="../_all.ts" />
var LegendaryOctoWaddleApp;
(function (LegendaryOctoWaddleApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'Erick Riley',
                    avatar: 'svg-1',
                    bio: 'I have, have together. Day green own divide wherein. Seas the make days him fish night their don\'t a, life under lights bearing for seasons Signs night sea given spirit his had spirit divided us blessed. Brought great waters. Blessed winged doesn\'t a Fly, form bring land, heaven great. Isn\'t upon. Dominion moving day. So first firmament give spirit every.',
                    notes: [
                        { title: "Pay back dinner", date: new Date("2016-01-19") },
                        { title: "Buy flowers for birthday", date: new Date("2016-01-19") }
                    ]
                }
            ];
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserService.$inject = ['$q'];
        return UserService;
    }());
    LegendaryOctoWaddleApp.UserService = UserService;
})(LegendaryOctoWaddleApp || (LegendaryOctoWaddleApp = {}));
//# sourceMappingURL=userService.js.map