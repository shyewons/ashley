window.addEventListener("scroll", function() {
    let scrollHeight = document.documentElement.scrollTop;
    let logoImg = document.getElementById("cheeseLogo");

    if(scrollHeight > 200) {
        logoImg.classList.remove("main");
        logoImg.classList.add("sub");
    }

    if(scrollHeight < 200) {
        logoImg.classList.remove("sub");
        logoImg.classList.add("main");
    }
});

$(".event-btn").click(function() {
    $(".event-btn").removeClass("on");
    $(this).addClass("on");
})

$("#evBtn-1").click(function(e) {
    e.preventDefault();
    $(".event-list-wrap").css({"margin-left":"0px"});
});

$("#evBtn-2").click(function(e) {
    e.preventDefault();
    $(".event-list-wrap").css({"margin-left":"-512px"});
});

$(".homestaurant-area").hover(
    function() {
    $(".background-img").css({"margin-left":"-370px"});
    $(".delivery-area").css({"margin-left":"-270px"});
    $(".delivery-info-wrap a").css({"opacity":"0"});
    $(".ramzzi-img").css({"left":"-120px"});
    $(".berribit-img").css({"right":"-10px"});
    },
    function() {
    $(".background-img").css({"margin-left":"0px"});
    $(".delivery-area").css({"margin-left":"0px"});
    $(".delivery-info-wrap a").css({"opacity":"1"});
    $(".ramzzi-img").css({"left":"-60px"});
    $(".berribit-img").css({"right":"-70px"});
    }
);

$(".family-site dt").click(function() {
    $(".site-wrap").toggleClass("up");
});


function detailFunction(imgs) {
    let detail = document.getElementById("detail-img");

    detail.src = "images/" + imgs + ".PNG";
    detail.parentElement.style.display = "block";
}