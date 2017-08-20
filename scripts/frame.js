"use strict";
$(document).ready(function () {
    $(".toggle:not([x-toggle])").click(function (evt) { return $(evt.currentTarget).closest(".toggleable").toggleClass("active"); });
    $(".toggle[x-toggle]").click(function (evt) { return $(evt.currentTarget.getAttribute("x-toggle")).toggleClass("active"); });
});
