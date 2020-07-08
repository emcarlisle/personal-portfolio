$(document).ready(function () {
    $("#more-btn").on("click", function () {
        $("more-pg").removeClass("d-none");
        $("#nav").addClass("d-none");
        $("#home-pg").addClass("d-none");
        $("#portfolio-pg").addClass("d-none");
        $("#contact-me").addClass("d-none");
    })
    $("#back-btn").on("click", function () {
        $("more-pg").addClass("d-none");

    })
})