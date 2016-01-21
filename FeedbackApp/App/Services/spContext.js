/// <reference path="../util/jquery-extensions.js" />
/// <reference path="d:\rahul\poc\sharepointhosted\feedbackapp\feedbackapp\scripts\angular.js" />

(function () {
    'use strict';
    var feedbackApp = angular.module('FeedbackApp');
    
    var serviceId = 'spContext';
    feedbackApp.service(serviceId, ['$cookieStore', spContext]);
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
            //if value doesn't exists in query string...
            if(decodeURIComponent($.getQueryStringValue("SPHostUrl") === "undefined"))
            {
                //load app context from the cookie
                loadSpAppContext();
                // fire off automatic refresh of security digest
                //refreshSecurityValidation();
            }
            else {
                // otherwise, creae the app context
                createSpAppContext();
            }

        }
        //init the sharepoint app context by loading the app's cookie content
        function loadSpAppContext()
        {
            service.hostWeb.appWebUrl = $cookieStore.get('SPAppWebUrl');
            service.hostWeb.url = $cookieStore.get('SPHostUrl');
            service.hostWeb.title = $cookieStore.get('SPHostTitle');
            service.hostWeb.logoUrl = $cookieStore.get('SPHostLogoUrl');
        }

        // create sharepoint app context by moving params on querystring to an app cookie
        function createSpAppContext() {
            var appWebUrl = decodeURIComponent($.getQueryStringValue("SPAppWebUrl"));
            $cookieStore.put('SPAppWebUrl', appWebUrl);

            var url = decodeURIComponent($.getQueryStringValue("SPHostUrl"));
            $cookieStore.put('SPHostUrl', url);

            var title = decodeURIComponent($.getQueryStringValue("SPHostTitle"));
            $cookieStore.put('SPHostTitle', title);

            var logoUrl = decodeURIComponent($.getQueryStringValue("SPHostLogoUrl"));
            $cookieStore.put('SPHostLogoUrl', logoUrl);
        }
    }
    //feedbackApp.factory(serviceId, spContext);
}());