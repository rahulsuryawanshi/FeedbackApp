/// <reference path="d:\rahul\poc\sharepointhosted\feedbackapp\feedbackapp\scripts\angular.js" />

(function () {
    'use strict';
    //define controller
    var controllerId = "spAppChrome";
    //angular.module("FeedbackApp").controller(controllerId, ['$rootScope', spAppChrome]);
    var feedbackApp = angular.module("FeedbackApp");
    //create controller
    function spAppChrome($rootScope)
    {
        var vm = this;
        var spChromeControlData = undefined;
        //init Controller
        init();
        function init() {
            spChromeControlData = {
                siteUrl: 'http://www.google.com',
                siteTitle: 'My DevSite',
                appTitle: 'Feedback App',
                settingsLinks: [
                    {
                        linkUrl: '/Lists/Announcements',
                        displayName: '[SHAREPOINT LIST] Announcements'
                    },
                    {
                        linkUrl: '/Lists/Contacts',
                        displayName: '[SHAREPOINT LIST] Contacts'
                    }

                ]
            };

            // create the sharepoint chrome control
            var nav = new SP.UI.Controls.Navigation("chrome_ctrl_container", spChromeControlData);

            // show chrome control
            nav.setVisible(true);

            // hide top app chrome (image & app name)
            nav.setBottomHeaderVisible(false);
        }



    }

    feedbackApp.controller(controllerId, spAppChrome);

}());