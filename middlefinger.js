/*
 *         DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
 *                    Version 2, December 2004 
 *
 *  Copyright (C) 2014 Brad Metcalf <brad@localabstract.com> 
 *
 *  Everyone is permitted to copy and distribute verbatim or modified 
 *  copies of this license document, and changing it is allowed as long 
 *  as the name is changed. 
 *
 *    DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
 *   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 
 *
 *   0. You just DO WHAT THE FUCK YOU WANT TO.
 */

(function() {

    /*
     *   WHITELIST - Domains in this array do not get the middle finger  (You do not need to put in yours)
     */
    
    var whitelist = ["localhost", "localabstract.com"];
    
    /*
     *   FUNCTION - The function that gets called when detected as stolen
     */
    
    function flipBird() {
    
        alert('All your base are belong to us!');
    
    }
    
    /*
     *   STOP! - Only modify the code below if you know what you are doing!
     */

    var scripts = document.getElementsByTagName("script"); 
    
    for (var i = 0; i < scripts.length; i++) { 
        var scriptname = /middlefinger.js/i; 
        if (scriptname.test(scripts[i].getAttribute("src"))) {
            var scriptdomain = getDomain(scripts[i].getAttribute("src"));
            var requestdomain = getDomain(window.location.href);
            var allowed = [];
            for (var i = 0; i < whitelist.length; i++) {
                allowed.push(whitelist[i].toLowerCase());
            };
            if(requestdomain != scriptdomain && allowed.indexOf(requestdomain) === -1) {
                flipBird();
            }
        }
    }
    
    function getDomain(url) {
        if(url.search(/^https?\:\/\//) != -1) {
           var domain = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i, "");
        } else {
           var domain = url.match(/^([^\/?#]+)(?:[\/?#]|$)/i, "");
        }
        return domain[1].toLowerCase();
    }
    
})();
