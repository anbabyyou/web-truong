$(document).ready(function(){
    /* go to top ----------------------*/
    $(window).scroll(function () {
        var e = $(window).scrollTop();
        if (e > 300) {
            $(".go_Top").show()
        } else {
            $(".go_Top").hide()
        }
    });
    $(".go_Top").click(function () {
        $('body,html').animate({
            scrollTop: 0
        })
    });
    
    /* zalo icon -----------------------------------*/
    /*click vào icon_zalo */
    $("#zaloId").click(function(){
        $("#zaloId_1").css("display","block")
    });
    /*click vào bất kì đâu trên màng hình */
    $(".zalo").click(function(){
        $("#zaloId_1").css("display","none")
    });


    /* menu mobie -------------------------------------*/
    var kt=0;
    $(".submenu").click(function(){
        $(".submenu").find(".after").css({
            "borderBottom":"none",
            "borderTop": "10px solid pink"
        })
        /* nếu chưa có submenu nao được bật */ 
        if(kt==0){
            $(this).find("ul.subcontent").addClass("hien_menu")
            $(this).find(".after").css({
                "borderTop":"none",
                "borderBottom": "10px solid pink"
            })
            kt=1;
        }else{
            /* nếu thẻ đang click có class hien_menu */
            if ($(this).find("ul.subcontent").hasClass("hien_menu")){
                $(this).find("ul.subcontent").removeClass("hien_menu")
                kt=0;
            }else{
                $("ul.subcontent").toggleClass("hien_menu")
                $(this).find(".after").css({
                    "borderTop":"none",
                    "borderBottom": "10px solid pink"
                })
            }
        }
        
    });
})
