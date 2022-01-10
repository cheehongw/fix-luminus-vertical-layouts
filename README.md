# Introduction
LumiNUS is NUS's learning management system. However, the layout breaks when it is placed in a viewport greater than or equal to 768px by 1050px


> <img src="https://github.com/cheehongw/userscripts/blob/main/docs/fix-luminus-vertical-layout/broken2.png" width=20% height=20%> 

In this case, the offending element was this `nav-pills` element, and removing the `height: 72vh !important` attribute fixes it.
> <img src="https://github.com/cheehongw/userscripts/blob/main/docs/fix-luminus-vertical-layout/broken3.png" width=500px>



# Installation

1. Ensure user scripts are enabled in your browser.
    - Firefox - install Tampermonkey or Greasemonkey (GM v4+ is not supported!).
    - Chrome - install Tampermonkey.
    - Opera - install Tampermonkey or Violent Monkey.
    - Safari - install Tampermonkey.
