/// <reference path="d:\rahul\poc\sharepointhosted\feedbackapp\feedbackapp\scripts\angular.js" />

(function () {
    'use strict';

    //define service
    var serviceId = 'angular.config';
    function configAngular($http) {
        //init factory

        init();
        return {};
        function init() {
            //set common http headers
            $http.defaults.headers.common.Accept = 'application/json;odata=verbose;'
        }
    }
    var feedbackApp = angular.module('FeedbackApp');
    feedbackApp.factory(serviceId, configAngular);
}());