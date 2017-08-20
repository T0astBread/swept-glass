"use strict";
$(document).ready(function () {
    $(".toggle:not([x-toggle])").click(function (evt) {
        $(evt.currentTarget).closest(".toggleable").toggleClass("active");
        evt.preventDefault();
    });
    $(".toggle[x-toggle]").click(function (evt) {
        $(evt.currentTarget.getAttribute("x-toggle")).toggleClass("active");
        evt.preventDefault();
    });
});
