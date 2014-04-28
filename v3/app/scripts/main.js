require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        instafeed: '../bower_components/instafeed.js/instafeed'

    }
});

require([
        'app',
        'jquery'
    ], function (app, $) {
        'use strict';
        var DEBUG = true;
        // Prevent console call to throw errors on old browser
        // Mute console when DEBUG is set to false
        // TODO: turn DEBUG to false on grunt:build
        if (DEBUG === false || !window.console) {
            window.console = {
                assert                    : function() {},
                clear                     : function() {},
                count                     : function() {},
                debug                     : function() {},
                dir                       : function() {},
                dirxml                    : function() {},
                error                     : function() {},
                exception                 : function() {},
                group                     : function() {},
                groupCollapsed            : function() {},
                groupEnd                  : function() {},
                info                      : function() {},
                log                       : function() {},
                markTimeLine              : function() {},
                msIsIndependentlyComposed : function() {},
                profile                   : function() {},
                profileEnd                : function() {},
                table                     : function() {},
                time                      : function() {},
                timeEnd                   : function() {},
                timeStamp                 : function() {},
                trace                     : function() {},
                warn                      : function() {}
            };
        }

        // use app here
        console.log(app);
        console.log('Running jQuery %s', $().jquery);
    }
);
