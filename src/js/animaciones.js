$(document).ready(function () {
    let flag = false;
    let scroll;

    $(window).scroll(function () { 
        scroll = $(window).scrollTop();
        console.log(scroll)
        if (scroll > 200) {
            if (!flag) {
                $(".logo").css({
                    top: "0px",
                    left: "220px"
                });
                $(".logo img").css({
                    width : "80px",
                    height : "80px"
                })
                $('.contenedor-header').css({
                    justifyContent: "flex-end"
                });;
                $('.navegacion').css({
                    width: "50%"
                });;
                $('.logo img').attr("src","/src/img/Frame logo.svg");
                $('.contenedor-header').css({
                    top: "0",
                    borderRadius: "0"
                })

                flag = true;
            }
        }else{
            if (flag) {
                $(".logo").css({
                    top: "250px",
                    left: "50%",
                    marginLeft: "-200px"
                });
                $(".logo img").css({
                    width : "100%",
                    height : "100%"
                })
                $('.contenedor-header').css({
                    justifyContent: "space-between"
                });;
                $('.navegacion').css({
                    width: "100%"
                });;
                $('.logo img').attr("src","/src/img/Frame logo.png");

                $('.contenedor-header').css({
                    top: "15px",
                    borderRadius: "50px"
                })
                flag = false;
            }
        }

        if (scroll === 400) {
            
        }
    });
});