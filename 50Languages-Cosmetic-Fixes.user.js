// ==UserScript==
// @name         50Languages-Cosmetic-Fixes
// @namespace    https://github.com/deepspace221
// @version      0.1
// @description  Cosmetic Fixes
// @author       snowman
// @match        https://www.50languages.com/phrasebook/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/deepspace221/50Languages/master/50%20Languages%20Cosmetic%20Fixes.js  
// @downloadURL  https://raw.githubusercontent.com/deepspace221/50Languages/master/50%20Languages%20Cosmetic%20Fixes.js 
// ==/UserScript==

(function() {
    ToggleAll()
    applyStyles()
})();

function ToggleAll() {
    var i;
    for (i = 1; i <= 18; i++){
        Toggle(i);
    }
}

function Toggle(n) {
    var sn = 'sn_' + n
    var hn = 'hn_' + n
    var e = document.getElementById(sn)
    var f = document.getElementById(hn)
    e.style.display = 'none'
    f.style.display = 'inline-block'
    f.onclick = false
}

function applyStyles(){
    var css = `
table a{
    font-size: 27px;
    color: green;
}
table a:hover{
    color: green;
    text-decoration:none;
}
.dropdown-mega-sub-nav a:visited{
    color: blue !important;
}
`
    var style = document.createElement('style')
    style.appendChild(document.createTextNode(css))
    document.getElementsByTagName('head')[0].appendChild(style)
}


