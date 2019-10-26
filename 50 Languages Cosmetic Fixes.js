// ==UserScript==
// @name         50languages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Cosmetic Fixes
// @author       snowman
// @match        https://www.50languages.com/phrasebook/*
// @grant        none
// @updateURL      
// @downloadURL   
// ==/UserScript==

function Toggle(n) {
    var sn = 'sn_' + n
    var hn = 'hn_' + n
    var e = document.getElementById(sn)
    var f = document.getElementById(hn)
    e.style.display = 'none';
    f.style.display = 'inline-block';
    f.onclick = false
  //  f.style.color = "green";
  //  f.style.fontSize = "x-large";
}

function ToggleAll() {
    var i;
    for (i = 1; i <= 18; i++){
        Toggle(i);
    }
}

function applyStyle(){
    var css = `
a:hover {
    text-decoration:none ;
}
table a{
    font-size: 27px;
    color: green;
}
table a:hover{
    color: green;
}
.dropdown-mega-sub-nav a:visited{
    color: blue !important;
}
`
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.getElementsByTagName('head')[0].appendChild(style);
}

(function() {
    ToggleAll()
    applyStyle()
})();

