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
console.log(coordernadasQuienes);
console.log(coordenadasServicios);
console.log(coordenadasBlog);
console.log(coordenadasContacto);

$(window).scroll(function () { 
    scroll = $(window).scrollTop();
    console.log(scroll);

    if (scroll >= 0 && scroll <= coordernadasQuienes - 119) {
        limpiarBarraColor('.navegacion');
        mostrarBarraColor('.navegacion','uno','yellow');
        limpiarColorTexto();
        cambiarColorTexto('.link-1','#48334F');
    }else if (scroll >= coordernadasQuienes - 120 && scroll <= coordenadasServicios -1 ) {
        limpiarBarraColor('.navegacion');
        mostrarBarraColor('.navegacion','dos','#70AF50');
        limpiarColorTexto();
        cambiarColorTexto('.link-2','#48334F');
    }else if (scroll >= coordenadasServicios && scroll <= coordenadasBlog - 1){
        limpiarBarraColor('.navegacion');
        mostrarBarraColor('.navegacion','tres','#EE4498');
        limpiarColorTexto();
        cambiarColorTexto('.link-3','#48334F');
    }else if (scroll >= coordenadasBlog && scroll <= coordenadasContacto - 100){
        limpiarBarraColor('.navegacion');
        mostrarBarraColor('.navegacion','cuatro','yellow');
        limpiarColorTexto();
        cambiarColorTexto('.link-4','#48334F');
    }else if (scroll >= coordenadasContacto - 120){
        limpiarBarraColor('.navegacion');
        mostrarBarraColor('.navegacion','cinco','#70AF50');
        limpiarColorTexto();
        cambiarColorTexto('.link-5','#48334F');
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
            height:'100%',
            width: '100vh',
            backgroundColor : 'rgba(0,0,0,0.75)',
            transition : 'all 0.5s'
        });
        $('.btn-menu').text('Cerrar');
    }else{
        $('.header-mobile').css({
            height:'0',
            width: '0',
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
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Analisis-servicio.png")',
        transition: 'all 0.5s'
    });
    limpiarBarraColor('#servicios');
    mostrarBarraColor('#servicios', 'uno', 'yellow')
})
servicioDos.addEventListener('mouseover', () => {
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Gestion-de-redes-servicio.png")',
        transition: 'all 0.5s'
    });
    limpiarBarraColor('#servicios');
    mostrarBarraColor('#servicios', 'dos', '#EE4498')

})
servicioTres.addEventListener('mouseover', () => {
    limpiarBarraColor('#servicios');
    mostrarBarraColor('#servicios', 'tres', '#71AF50')
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Diseño-servicio.png")',
        transition: 'all 0.5s'
    });
})
servicioCuatro.addEventListener('mouseover', () => {
    limpiarBarraColor('#servicios');
    mostrarBarraColor('#servicios', 'cuatro', '#71AF50')
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Publicidad-servicio.png")',
        transition: 'all 0.5s'
    });
})
servicioCinco.addEventListener('mouseover', () => {
    limpiarBarraColor('#servicios');
    mostrarBarraColor('#servicios', 'cinco', '#EE4498')
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Asesoramiento-servicio.png")',
        transition: 'all 0.5s'
    });
})


/* Funciones reutilizables */
function limpiarBarraColor(localizacion){
    console.log(`${localizacion} .barra-uno`);
    $(`${localizacion} .barra-uno`).css({
        backgroundColor: 'transparent'
    });
    $(`${localizacion} .barra-dos`).css({
        backgroundColor: 'transparent'
    });
    $(`${localizacion} .barra-tres`).css({
        backgroundColor: 'transparent'
    });
    $(`${localizacion} .barra-cuatro`).css({
        backgroundColor: 'transparent'
    });
    $(`${localizacion} .barra-cinco`).css({
        backgroundColor: 'transparent'
    });
}

function mostrarBarraColor(localizacion, numero, color){
    $(`${localizacion} .barra-${numero}`).css({
        backgroundColor: `${color}`,
        transition: 'all 0.8s'
    })
}

function limpiarColorTexto(){
    for (let i = 1; i <= 5; i++) {
        $(`.link-${i}`).css({
            color : '#8B8B8B'
        });  
    } 
}

function cambiarColorTexto(localizacion,color){
    $(localizacion).css({
        color : color,
        transition: 'all 0.8s'
    });
}