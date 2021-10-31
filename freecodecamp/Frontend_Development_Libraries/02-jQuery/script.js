$(document).ready(function () {
    // $("button").addClass("animated bounce");
    // $(".well").addClass("animated shake");
    // $("#target3").addClass("animated fadeOut");

    $("#target1").addClass("btn-primary");
    $("#target1").css("color","red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "blue");
    $("#right-well").children().css("color","orange");
    $(".target:nth-child(3)").addClass("btn-info");
    $(".target:odd").addClass("btn-danger");
});