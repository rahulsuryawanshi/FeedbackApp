/// <reference path="angular.js" />
(function () {
    

    var SharePointJSOMService = function ($q) {
        var context = SP.ClientContext.get_current();

        var getCurrentUser = function () {
            var deferred = $q.defer();
            var currentUser = context.get_web().get_currentUser();
            context.load(currentUser);
            //context.executeQueryAsync(onGetUsernameSuccess, onGetUsernameFail);
            context.executeQueryAsync(Function.createDelegate(this, function () {
                deferred.resolve(currentUser.get_title());
            }),
            Function.createDelegate(this, function (sender, args) {
                deferred.reject(args.get_message());
            }));
            return deferred.promise;

        };

        return
        {
            getCurrentUser: getCurrentUser
        };
    };
    //Getting reference to angular App module
    var feedbackApp = angular.module("FeedbackApp");
    //Registering service with angular module
    feedbackApp.factory('SharePointJSOMService', SharePointJSOMService);
}());