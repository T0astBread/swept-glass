"use strict";
var toggleNav = function (active) {
    if (active === void 0) { active = undefined; }
    return $("nav.top-level-nav").toggleClass("active", active);
};
$(document).keyup(function (evt) { return evt.keyCode == 77 ? toggleNav() : null; });
