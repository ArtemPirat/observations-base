$(document).ready(function(){
    $(".OtherInfo").click(function(){
        $(this).find(".card-body").slideToggle();
    });
});

$(document).ready(function(){
    $(".OtherInfo").click(function(){
        $(".profile-main").toggleClass("expanded");
    });
});