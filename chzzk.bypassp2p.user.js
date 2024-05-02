// ==UserScript==
// @name        Chzzk bypass p2p client installation
// @namespace   Violentmonkey Scripts
// @match       https://chzzk.naver.com/**
// @grant       none
// @version     1.0
// @run-at      document-start
// ==/UserScript==
navigator.__defineGetter__('userAgent', function () {
    return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
});
