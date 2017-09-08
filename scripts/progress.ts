const STANDARD_PROGRESS_TEXT_FORMATTER = (progress: number, progressCircle: JQuery) =>
{
    let multiplier = progressCircle.is("[x-multiplier]") ? parseFloat(progressCircle.attr("x-multiplier")) : 1;
    let decimals = progressCircle.is("[x-decimals]") ? parseInt(progressCircle.attr("x-decimals")) : 2;
    return (progress * multiplier).toFixed(decimals);
}

let setProgressCircleProgress = (progressCircle: HTMLElement, progress: number,
    progressTextFormatter: (progress: number, progressCircle: JQuery) => string = STANDARD_PROGRESS_TEXT_FORMATTER) =>
{
    let jqProgressCircle = $(progressCircle);
    jqProgressCircle.find("circle").css("stroke-dasharray", 125 * (1 - progress) + ", 150");
    jqProgressCircle.find("svg").css("transform", "rotate(" + (270 + progress * 360) + "deg)");
    jqProgressCircle.attr("x-progress-readout", progress);
    let unit = jqProgressCircle.is("[x-unit]") ? jqProgressCircle.attr("x-unit") : "";
    let text = jqProgressCircle.find(".progress-circle-value");
    text.text(progressTextFormatter(progress, jqProgressCircle) + unit);
    // if(text.text().length > 5) text.text(text.text().slice(0, 4) + "...");
}

let setJQueryProgressCircleProgress = (progressCircle: JQuery, progress: number, ) =>
    progressCircle.each((i, elem) => setProgressCircleProgress(elem as HTMLElement, progress));

$(document).ready(() =>
{
    $("progress, .progress-like").hover(evt =>
    {
        let progress = $(evt.currentTarget);
        let tooltip = progress.next(".tooltip");
        let unit = tooltip.attr("x-unit");
        tooltip.find(".tooltip-inner").text(progress.val() + (unit ? unit : ""));
    });

    setJQueryProgressCircleProgress($(".progress-circle"), .35);
});
