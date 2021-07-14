$(".overlay").hide();
$(".show-locations").click(function(e){
$(".overlay").toggle();
e.preventDefault()
});



$(".menu-btn").click(function(e){
    $(".menu-btn .fas").toggleClass("fa-bars fa-times-circle");

    $("nav ul").toggle();//toggles the display of the menu
    e.preventDefault();//prevents the default from firing the link

});
$(".locations a").click(function(e){
    $(".overlay").toggle();
    e.preventDefault()
});

