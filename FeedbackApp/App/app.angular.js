/// <reference path="angular.js" />
(function () {
    //Registering angular app
    var feedbackApp = angular.module('FeedbackApp', [
        'ngRoute',
        'ngCookies',
        'ngSanitize',   // fixes HTML issues in data binding
    ]);

    // startup code
    feedbackApp.run(['$route', 'angular.config', function ($route, angularConfig) {

    }]);
}());
