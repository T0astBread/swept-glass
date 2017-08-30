"use strict";
$(document).ready(function () {
    $("progress").hover(function (evt) {
        var progress = $(evt.currentTarget);
        var tooltip = progress.next(".tooltip");
        var unit = tooltip.attr("x-unit");
        tooltip.find(".tooltip-inner").text(progress.val() + (unit ? unit : ""));
    });
});
