"use strict";
var STANDARD_PROGRESS_TEXT_FORMATTER = function (progress, progressCircle) {
    var multiplier = progressCircle.is("[x-multiplier]") ? parseFloat(progressCircle.attr("x-multiplier")) : 1;
    var decimals = progressCircle.is("[x-decimals]") ? parseInt(progressCircle.attr("x-decimals")) : 2;
    return (progress * multiplier).toFixed(decimals);
};
var setProgressCircleProgress = function (progressCircle, progress, progressTextFormatter) {
    if (progressTextFormatter === void 0) { progressTextFormatter = STANDARD_PROGRESS_TEXT_FORMATTER; }
    var jqProgressCircle = $(progressCircle);
    jqProgressCircle.find("circle").css("stroke-dasharray", 125 * (1 - progress) + ", 150");
    jqProgressCircle.find("svg").css("transform", "rotate(" + (270 + progress * 360) + "deg)");
    jqProgressCircle.attr("x-progress-readout", progress);
    var unit = jqProgressCircle.is("[x-unit]") ? jqProgressCircle.attr("x-unit") : "";
    var text = jqProgressCircle.find(".progress-circle-value");
    text.text(progressTextFormatter(progress, jqProgressCircle) + unit);
    // if(text.text().length > 5) text.text(text.text().slice(0, 4) + "...");
};
var setJQueryProgressCircleProgress = function (progressCircle, progress) {
    return progressCircle.each(function (i, elem) { return setProgressCircleProgress(elem, progress); });
};
$(document).ready(function () {
    $("progress, .progress-like").hover(function (evt) {
        var progress = $(evt.currentTarget);
        var tooltip = progress.next(".tooltip");
        var unit = tooltip.attr("x-unit");
        tooltip.find(".tooltip-inner").text(progress.val() + (unit ? unit : ""));
    });
    setJQueryProgressCircleProgress($(".progress-circle"), .35);
});
