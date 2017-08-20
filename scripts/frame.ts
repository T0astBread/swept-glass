$(document).ready(() =>
{
    $(".toggle:not([x-toggle])").click(evt =>
    {
        $(evt.currentTarget).closest(".toggleable").toggleClass("active");
        evt.preventDefault();
    });

    $(".toggle[x-toggle]").click(evt =>
    {
        $(evt.currentTarget.getAttribute("x-toggle") as String).toggleClass("active");
        evt.preventDefault();
    });
})