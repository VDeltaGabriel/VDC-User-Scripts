// ==UserScript==
// @name         VDC User Scripts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Launch user scripts from VDC!
// @author       GabrielV
// @match        https://developer.valvesoftware.com/*
// @icon         https://developer.valvesoftware.com/favicon.ico
// @updateURL    https://github.com/VDeltaGabriel/VDC-User-Scripts/raw/main/VDC-User-Scripts.user.js
// @downloadURL  https://github.com/VDeltaGabriel/VDC-User-Scripts/raw/main/VDC-User-Scripts.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const currentUrl = window.location.href;
    const match = currentUrl.match(/(User:)([a-zA-z]*)/);
    if (match != null)
    {
        if (confirm('This user seems to have a custom user script! Do you want to load it? (REMEMBER: Just because it is on VDC **DOES NOT** mean it cannot contain potentially harmful/malicious code!)'))
        {
            const script = document.createElement('script');
            script.src = `https://developer.valvesoftware.com/w/index.php?title=${match[0]}/common.js&action=raw&ctype=text/javascript`;
            document.body.appendChild(script);
        }
    }
})();