// Defines the main app module. This one does the top level app wiring.

define(function (require) {
    'use strict';

    var $ = require('jquery');

    // Dependencies that do not have an export of their own, just attach
    // to other objects, like jQuery. These are just used in the example
    // bootstrap modal, not directly in the UI for the network and appCache
    // displays.
    require('bootstrap/modal');
    require('bootstrap/transition');

    // Wait for the DOM to be ready before showing the network and appCache
    // state.
    $(function () {
        // Enable the UI bindings for the network and appCache displays
        require('./uiNetwork')();
        require('./uiAppCache')();
        require('./uiWebAppInstall')();

        var activateScreen = function(path){
            console.log("hash:"+window.location.hash);
            switch(window.location.hash){
                case '#projects':
                case '#about':
                case '#news':
                    $('.screen').hide();
                    $(window.location.hash).show();
                    $('ul.nav>li').removeClass();
                    $("[href="+window.location.hash+"]").parent().addClass('active')
                    break;
                default:
                    $('#news').show()
                    $('ul.nav>li').removeClass();
                    $("[href=#news]").parent().addClass('active')
                    break;
            }
        }

        window.addEventListener("hashchange", function(e) {
            activateScreen(location.pathname);
        }, false);
        activateScreen();
    });
});
