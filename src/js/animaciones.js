$(document).ready(function () {
    let flag = false;
    let scroll;

    const subir = $('.subir');
    subir.hide()

    const anchoPantalla = $(window).width();
    if (anchoPantalla > 768) {
        $(window).scroll(function () { 
            scroll = $(window).scrollTop();
            if (scroll > 200) {
                $(subir).fadeIn();
                if (!flag) {
                    $(".contenedor-header").css({
                        width: "100%"
                    })
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
                    });
                    $('.navegacion').css({
                        width: "50%"
                    });
                    $('.logo img').attr("src","/src/img/Frame logo.svg");
                    $('.contenedor-header').css({
                        top: "0",
                        borderRadius: "0"
                    })
    
                    flag = true;
                }
            }else{
                $(subir).fadeOut();
                if (flag) {
                    $(".contenedor-header").css({
                        width: "80%"
                    })
                    $(".logo").css({
                        top: "280px",
                        left: "55%",
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
                    });
                    $('.logo img').attr("src","/src/img/Frame logo.png");
    
                    $('.contenedor-header').css({
                        top: "15px",
                        borderRadius: "50px"
                    })
                    flag = false;
                }
            }
        });
    }else{
        $(window).scroll(function () { 
            scroll = $(window).scrollTop();
            if (scroll > 200) {
                $(subir).fadeIn();
                if (!flag) {
                    $(".contenedor-header").css({
                        width: "100%"
                    })
                    $(".logo").css({
                        top: "0px",
                        left: "220px"
                    });
                    $(".logo img").css({
                        width : "80px",
                        height : "80px"
                    })
                    $('.contenedor-header').css({
                        justifyContent: "center"
                    });
                    $('.navegacion').css({
                        width: "80%",
                        marginLeft:'10%'
                    });
                    $('.logo img').attr("src","/src/img/Frame logo.svg");
                    $('.contenedor-header').css({
                        top: "0",
                        borderRadius: "0"
                    })
    
                    flag = true;
                }
            }else{
                $(subir).fadeOut();
                if (flag) {
                    $(".contenedor-header").css({
                        width: "80%"
                    })
                    $(".logo").css({
                        top: "280px",
                        left: "55%",
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
                        width: "100%",
                        marginLeft : '0'
                    });;
                    $('.logo img').attr("src","/src/img/Frame logo.png");
    
                    $('.contenedor-header').css({
                        top: "15px",
                        borderRadius: "50px"
                    })
                    flag = false;
                }
            }
    
        });
    }
});
let {y:coordernadasQuienes} = document.querySelector('#quienes-somos').getBoundingClientRect();
let {y:coordenadasServicios} = document.querySelector('#servicios').getBoundingClientRect();
let {y:coordenadasBlog} = document.querySelector('#blog').getBoundingClientRect();
let {y:coordenadasContacto} = document.querySelector('#contacto').getBoundingClientRect();

$(window).scroll(function () { 
    scroll = $(window).scrollTop();

    if (scroll >= 0 && scroll <= coordernadasQuienes - 1) {
        $('.barra-dos').css({
            backgroundColor: 'white'
        });
        $('.barra-tres').css({
            backgroundColor: 'white'
        });
        $('.barra-cuatro').css({
            backgroundColor: 'white'
        });
        $('.barra-cinco').css({
            backgroundColor: 'white'
        });

        $('.barra-uno').css({
            backgroundColor: 'yellow'
        });
    }else if (scroll >= coordernadasQuienes - 100 && scroll <= coordenadasServicios -1 ) {
        $('.barra-uno').css({
            backgroundColor: 'white'
        });
        $('.barra-tres').css({
            backgroundColor: 'white'
        });
        $('.barra-cuatro').css({
            backgroundColor: 'white'
        });
        $('.barra-cinco').css({
            backgroundColor: 'white'
        });

        $('.barra-dos').css({
            backgroundColor: '#70AF50'
        });
    }else if (scroll >= coordenadasServicios && scroll <= coordenadasBlog - 1){
        $('.barra-uno').css({
            backgroundColor: 'white'
        });
        $('.barra-dos').css({
            backgroundColor: 'white'
        });
        $('.barra-cuatro').css({
            backgroundColor: 'white'
        });
        $('.barra-cinco').css({
            backgroundColor: 'white'
        });
        $('.barra-tres').css({
            backgroundColor: '#EE4498'
        });
    }else if (scroll >= coordenadasBlog && scroll <= coordenadasContacto - 100){
        $('.barra-uno').css({
            backgroundColor: 'white'
        });
        $('.barra-tres').css({
            backgroundColor: 'white'
        });
        $('.barra-dos').css({
            backgroundColor: 'white'
        });
        $('.barra-cinco').css({
            backgroundColor: 'white'
        });
        $('.barra-cuatro').css({
            backgroundColor: 'yellow'
        });
    }else if (scroll >= coordenadasContacto){
        $('.barra-uno').css({
            backgroundColor: 'white'
        });
        $('.barra-tres').css({
            backgroundColor: 'white'
        });
        $('.barra-cuatro').css({
            backgroundColor: 'white'
        });
        $('.barra-dos').css({
            backgroundColor: 'white'
        });
        $('.barra-cinco').css({
            backgroundColor: '#70AF50'
        });
    }
});

/* Animacion del menu mobile */
const btnMenu = document.querySelector('.menu-toogle');
const navegacionMobile = document.querySelector('.navegacion-mobile');

btnMenu.addEventListener('click', () => {
    const existe = document.querySelector('.visible');
    if (!existe) {
        console.log("No existe");
        btnMenu.classList.add('visible');
    }else{
        btnMenu.classList.remove('visible');
    }

    if (btnMenu.classList.contains('visible')) {
        $('.header-mobile').css({
            backgroundColor : 'rgba(0,0,0,0.75)',
            transition : 'all 0.5s'
        });
        $('.btn-menu').text('Cerrar');
    }else{
        $('.header-mobile').css({
            backgroundColor : 'transparent',
            transition : 'all 0.5s'
        });
        $('.btn-menu').text('Menu');
    }

    $(navegacionMobile).toggle('slow');
})

/* Animaciones de servicios */
const servicioUno = document.querySelector('.servicio-1');
const servicioDos = document.querySelector('.servicio-2');
const servicioTres = document.querySelector('.servicio-3');
const servicioCuatro = document.querySelector('.servicio-4');
const servicioCinco = document.querySelector('.servicio-5');
servicioUno.addEventListener('mouseover', () => {
    $(servicioUno).css({
        color: '#FBDE48',
        transition: 'all 0.8s'
    });
    $(servicioDos).css({
        color: 'black'
    });
    $(servicioTres).css({
        color: 'black'
    });
    $(servicioCuatro).css({
        color: 'black'
    });
    $(servicioCinco).css({
        color: 'black'
    });
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Screen.png")',
        transition: 'all 0.5s'
    });
})
servicioDos.addEventListener('mouseover', () => {
    $(servicioUno).css({
        color: 'black'
    });
    $(servicioDos).css({
        color: '#EE4498',
        transition: 'all 0.8s'
    });
    $(servicioTres).css({
        color: 'black'
    });
    $(servicioCuatro).css({
        color: 'black'
    });
    $(servicioCinco).css({
        color: 'black'
    });
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Fondo 1.png")',
        transition: 'all 0.5s'
    });
})
servicioTres.addEventListener('mouseover', () => {
    $(servicioUno).css({
        color: 'black'
    });
    $(servicioDos).css({
        color: 'black'
    });
    $(servicioTres).css({
        color: '#70AF50',
        transition: 'all 0.8s'
    });
    $(servicioCuatro).css({
        color: 'black'
    });
    $(servicioCinco).css({
        color: 'black'
    });
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/email-marketing.png")',
        transition: 'all 0.5s'
    });
})
servicioCuatro.addEventListener('mouseover', () => {
    $(servicioUno).css({
        color: 'black'
    });
    $(servicioDos).css({
        color: 'black'
    });
    $(servicioTres).css({
        color: 'black'
    });
    $(servicioCuatro).css({
        color: '#70AF50',
        transition: 'all 0.8s'
    });
    $(servicioCinco).css({
        color: 'black'
    });
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/facebook-ads-hoteles.png")',
        transition: 'all 0.5s'
    });
})
servicioCinco.addEventListener('mouseover', () => {
    $(servicioUno).css({
        color: 'black'
    });
    $(servicioDos).css({
        color: 'black'
    });
    $(servicioTres).css({
        color: 'black'
    });
    $(servicioCuatro).css({
        color: 'black'
    });
    $(servicioCinco).css({
        color: '#EE4498',
        transition: 'all 0.8s'
    });
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Imagen quienes somos.png")',
        transition: 'all 0.5s'
    });
})

