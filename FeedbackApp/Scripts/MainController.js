﻿/// <reference path="angular.js" />

(function () {

    var feedbackApp = angular.module("FeedbackApp");
    

    var MainController = function ($scope, SharePointJSOMService)
    {
        $scope.UserName = 'Amogh';
        var onUserSuccess = function (data) {
            $scope.UserName = data;
        }
        var onUserFail = function (reason) {
            $scope.ErrorMessage = reason;
        }
        //Calling Angular Service which returns promise object
        //Then calling SuccessCallBack and FailureCallack functions
        SharePointJSOMService.getCurrentUser().then(onUserSuccess, onUserFail);

        
        
    }
    feedbackApp.controller('MainController', MainController);
}());