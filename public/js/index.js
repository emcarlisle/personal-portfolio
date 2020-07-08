$(document).ready(function () {
    $("#more-btn").on("click", function () {
        $("more-pg").removeClass("d-none");
    })
    $("#back-btn").on("click", function () {
        $("more-pg").addClass("d-none");
        $("#nav").removeClass("d-none");
        $("#home-pg").removeClass("d-none");
        $("#portfolio-pg").removeClass("d-none");
        $("#contact-me").removeClass("d-none");

    })
})