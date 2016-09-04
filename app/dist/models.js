/// <reference path="_all.ts" />
var LegendaryOctoWaddleApp;
(function (LegendaryOctoWaddleApp) {
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        return User;
    }());
    LegendaryOctoWaddleApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    }());
    LegendaryOctoWaddleApp.Note = Note;
})(LegendaryOctoWaddleApp || (LegendaryOctoWaddleApp = {}));
//# sourceMappingURL=models.js.map