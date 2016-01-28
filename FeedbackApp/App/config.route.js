/// <reference path="d:\rahul\poc\sharepointhosted\feedbackapp\feedbackapp\scripts\angular.js" />
/// <reference path="d:\rahul\poc\sharepointhosted\feedbackapp\feedbackapp\scripts\angular-route.js" />


(function () {
    'use strict';

    var feedbackApp = angular.module('FeedbackApp');

    //get all the routes
    feedbackApp.constant('routes', getRoutes());

    //Config routes and their resolver

    feedbackApp.config(['$routeProvider', 'routes', routeConfigurator]);

    function routeConfigurator($routeProvider, routes) {
        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });//redirect to home of the app
    }

    //Build the routes
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: '../app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 0,
                        content: 'dashboard',
                        quickLaunchEnabled: false
                    }
                }
            },
            {
                url: '/Feedbacks',
                config: {
                    templateUrl: '../app/FeedbackList/FeedbackList.html',
                    title: 'Feedbacks',
                    settings: {
                        nav: 1,
                        content: 'Feedback List',
                        quickLaunchEnabled: true
                    }

                }
            }
        ];
    }


}());