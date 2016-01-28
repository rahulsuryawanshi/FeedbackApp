/// <reference path="d:\rahul\poc\sharepointhosted\feedbackapp\feedbackapp\scripts\angular.js" />

(function () {
    'use strict';

    var controllerId = 'header';
    //init controller
    function headerController($rootScope, $routeParams, $route) {
        var vm = this;
        //homepage of the app
        vm.appHomeUrl = '/index.html';
        //app name
        vm.appTitle = 'Feedback App';//Todo:Read from config
        //url of the icon to use for the app
        vm.appIconUrl = '';
        //vm.currentPageTitle = "DashboardPage";

        //init controller
        init();

        function init(){
        }
        // wire handler to successful route changes to
        //  - update the page title (for bookmarking)
        $rootScope.$on('$routeChangeSucess', function (event, next, current) {
            if (!$route.current || !$route.current.title) {
                vm.currentPageTitle = '';
            }
            else if ($route.current.settings.nav > 0) {
                if ($routeParams.id == 'new') {
                    vm.currentPageTitle = 'Create New Item';

                } else {
                    vm.currentPageTitle = $route.current.settings.content;
                }
            }
            else{
                vm.currentPageTitle = '';
            }

        });
    }

    var feedbackApp = angular.module('FeedbackApp');
    feedbackApp.controller(controllerId, headerController);
}());