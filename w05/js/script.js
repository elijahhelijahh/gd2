

// $("#preamble-btn-1").click(function(){
//     $("#preamble-btn-2").css({
//         "background":"blue",
//         "transform":"rotate(45deg)"
        
//     })
// })

// $("#preamble-btn-2").click(function(){
//     $("#preamble-btn-1").toggleclass("rotate")
        
//     })

// $("#h1.header-left").click(function(){

//     ("#h1.header-left").toggleClass("active")

    $(document).scroll(function(){
        let distance = $(document).scrollTop()
        let height = $(document).height()-$(window).height();
        let ratio = distance/height();

        $((">header-right").html(ratio))

        $(".header-right").html("you have travelled " + distance + " pixels so far")

        $("h1").css({
            "transform":"rotate(" + ratio*360 + "deg)"





        })
    })

// })

$(".album-thumbs").flickity({

    wrapAround: true,
    // freeScroll: true,
    // contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false
});
