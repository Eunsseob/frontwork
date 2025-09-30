$(() => {
    // 각각 내려오게 하는방법

    $('.nav>li').mouseover(function(){
        $(this).children('.submenu').stop().slideDown();
    });

    $('.nav>li').mouseout(function(){
        $(this).children('.submenu').stop().slideUp();
    });

    setInterval(slide, 2000);

    let img = $('#imgslide>img');
    let i = 3;
    function slide(){
        i--;
        if(i==0){
            img.fadeIn();
            i=3;
        } else {
            img.eq(i).fadeOut();
        }
    }
})