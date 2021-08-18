// ==UserScript==
// @name         Fix Luminus Vertical Viewpage
// @namespace    https://github.com/cheehongw/userscripts
// @version      0.1
// @description  Luminus layout breaks when it is 768px x 1050px. This fixes that.
// @author       Chee Hong
// @match        https://luminus.nus.edu.sg/*
// @grant        GM_addStyle
// ==/UserScript==

let pattern = new RegExp("https:\/\/luminus.nus.edu.sg\/modules\/.\*");

let lastUrl = location.href;

(new MutationObserver(function() {
    const url = location.href;
    if (url != lastUrl && pattern.test(url)) {
        console.log('test');
        GM_addStyle (`
        @media (min-height: 1050px) {
            nav-pills.vertical {
                height: unset !important;
            }
        }`
        )
      lastUrl = url;
    }
}).observe(document, {subtree: true, childList: true}));