MiddleFinger.JS
=========

MiddleFinger.JS lets you execute remote JavaScript on websites that rip your code or hotlink your JS files while not affecting your own website.

MiddleFinger.js is for the following:

  - Giving a notice to JS hot linkers you don't apperciate what they are doing
  - Giving a notice a web layout ripper ripped your code
  - Giving me a reason to use the WTFPL license

MiddleFinger.js is NOT for the following:

  - Defacing the sites that ripped / hotlinked your code
  - Attacking the site's users through a means of Cross Site Scripting
  - Other illegal stuff

Those reasons are all considered illegal even though they decided to be a douche and steal your code and bandwidth. Usage of this code is considered legal because the code is on your server and they willingly linked your script(s). Like an idiot.

Is this failproof? No, but it is a decent effort. You can make it better? Contribute!

Installation
--------------

All you need to do is stick the code below in your your JavaScript files. Remember to replace the URL (```mf.src```) with the location to your middlefinger.js file. The URL's domain will be the domain it uses to validate against the requesting server. So you need to be sure you use a full URL. Or your users are going to freak out.

```javascript
(function() {
    var mf = document.createElement('script'); mf.type = 'text/javascript'; mf.async = true;
    mf.src = 'https://rawgit.com/baconface/middlefinger.js/master/middlefinger.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mf, s);
})();
```
Additionally you could enclose them in script tags and use this in HTML rendered documents. But most anyone with basic JS knowledge can figure it out and remove it.

Customization
--------------

Open up middlefinger.js in a text/code editor to customize the behavior. The code that executes when the domain doesn't validate is the function below. Simply remove the alert and put in the JavaScript you wish to execute.
```javascript
function flipBird() {
    alert('All your base are belong to us!');
}
```

You can also exclude multiple domains from being affected by adding them to the whitelist array. You can also remove the current ones if you wish.
```javascript
var whitelist = ["localhost", "localabstract.com"];
```

Random Notes
--------------
* If you are testing this on localhost you might be wondering why the script isn't working. Remove "localhost" from the whitelist you dingus.
* This script uses ```indexOf``` which isn't supported by IE 8 and below. But who cares. I actually feel bad for anyone using such a dated browser. They likely have an XP machine loaded with 10 tons of spyware and still pay for internet porn. If you care then implement this prototype. - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

License
--------------

 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 
 Version 2, December 2004 

 Copyright (C) 2014 Brad Metcalf <brad@localabstract.com> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO.
