let toggleNav = (active: boolean|undefined = undefined) => $("nav.top-level-nav").toggleClass("active", active);

$(document).keyup(evt => evt.keyCode == 77 ? toggleNav() : null);
