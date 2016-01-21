/// <reference path="d:\rahul\poc\sharepointhosted\feedbackapp\feedbackapp\scripts\angular.js" />

(function () {
    'use strict';
    var feedbackApp = angular.module('FeedbackApp');
    var serviceId = 'spContext';
    function spContext($cookieStore) {
        var service = this;
        var spWeb = {
            appWebUrl: '',
            url: '',
            title: '',
            logoUrl:''
        };
        service.hostWeb = spWeb;

        //init the service
        init();
        // init... akin to class constructor
        function init() {

        }
    }
}());