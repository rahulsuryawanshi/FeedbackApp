/// <reference path="d:\rahul\poc\sharepointhosted\feedbackapp\feedbackapp\scripts\angular.js" />

(function () {
    'use strict';
    //define controller
    var controllerId = "dashboard";
    function dashboard()
    {
        var vm = this;

        init();
        function init()
        {

        }
    }
    var feedbackApp = angular.module('FeedbackApp');
    feedbackApp.controller(controllerId, dashboard);

}());