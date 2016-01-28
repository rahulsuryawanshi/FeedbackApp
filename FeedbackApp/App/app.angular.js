/// <reference path="angular.js" />
(function () {
    //Registering angular app
    var feedbackApp = angular.module('FeedbackApp', [
        'ngRoute',
        'ngCookies'
    ]);

    // startup code
    feedbackApp.run(['$route', 'angular.config', function ($route, angularConfig) {

    }]);
}());
