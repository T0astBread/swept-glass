$(document).ready(() =>
{
    $("progress").hover(evt =>
    {
        let progress = $(evt.currentTarget);
        let tooltip = progress.next(".tooltip");
        let unit = tooltip.attr("x-unit");
        tooltip.find(".tooltip-inner").text(progress.val() + (unit ? unit : ""));
    });
});
