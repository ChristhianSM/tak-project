    let flag = false;
    let scroll;

    const subir = $('.subir');
    const textoFlotante = $('.texto-flotante');
    const iconoScroll = $('.icono-scroll');
    subir.hide();

    const anchoPantalla = $(window).width();
    let width, justifyContent;
    switch (true) {
        case (anchoPantalla >= 2000):
            width = "55%";
            justifyContent = "flex-end"
            break;
        case (anchoPantalla>=1366):
            width = "65%";
            justifyContent = "flex-end"
            break;
        case (anchoPantalla>=1024):
            width = "75%";
            justifyContent = "flex-end"
            break;
        case (anchoPantalla >= 768):
            width = "80%";
            justifyContent = "flex-end"
            break;
        default:
            width = "83%";
            justifyContent = "flex-end"
            break;
    }

    $(window).scroll(function () { 
        scroll = $(window).scrollTop();
        if (scroll > 10) {
            $(textoFlotante).hide("2000");
        }else{
            $(textoFlotante).fadeIn("3000");
        }
        if (scroll > 200) {
            $(subir).fadeIn("3000");
            $(iconoScroll).hide("2000");
            if (!flag) {
                $(".contenedor-header").css({
                    width: "100%",
                    transition : "all 0.9s ease-in",
                    justifyContent: `${justifyContent}`,
                    top: "0",
                    borderRadius: "0"
                })
                $(".logo").css({
                    width : "80px",
                    height : "80px",
                    top: "0px",
                    left: "200px",
                    backgroundImage : "url('/src/img/frame-logo.svg')"
                });

                $('.navegacion').css({
                    width: `${width}`
                });

                flag = true;
            }
        }else{
            $(subir).fadeOut("2000");
            $(iconoScroll).fadeIn("2000");
            if (flag) {
                $(".contenedor-header").css({
                    width: "80%",
                    justifyContent: "space-between",
                    top: "15px",
                    borderRadius: "50px",
                    transition : "all 0.9s ease-in",
                })
                $(".logo").css({
                    top: "260px",
                    left: "50%",
                    marginLeft: "-200px",
                    height: "400px",
                    width: "400px",
                    backgroundImage : "url('/src/img/logo-verde.svg')"
                });
                $('.navegacion').css({
                    width: "100%"
                });

                flag = false;
            }
        }
    });
   

let {y:coordernadasQuienes} = document.querySelector('#quienes-somos').getBoundingClientRect();
let {y:coordenadasServicios} = document.querySelector('#servicios').getBoundingClientRect();
let {y:coordenadasBlog} = document.querySelector('#blog').getBoundingClientRect();
let {y:coordenadasContacto} = document.querySelector('#contacto').getBoundingClientRect();


$(window).scroll(function () { 
    scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll <= coordernadasQuienes - 119) {
        limpiarBarraColor('.navegacion','1');
        mostrarBarraColor('.navegacion','1','yellow');
        limpiarColorTexto();
        cambiarColorTexto('.link-1','#48334F');
    }else if (scroll >= coordernadasQuienes - 120 && scroll <= coordenadasServicios -1 ) {
        limpiarBarraColor('.navegacion','2');
        mostrarBarraColor('.navegacion','2','#70AF50');
        limpiarColorTexto();
        cambiarColorTexto('.link-2','#48334F');
        $(".logo img").css({
            width : "100%",
            height : "100%",
        })
    }else if (scroll >= coordenadasServicios && scroll <= coordenadasBlog - 1){
        limpiarBarraColor('.navegacion','3');
        mostrarBarraColor('.navegacion','3','#EE4498');
        limpiarColorTexto();
        cambiarColorTexto('.link-3','#48334F');
        $(".logo").css({
            backgroundImage : "url('/src/img/logo-rosado.png')"
        });
    }else if (scroll >= coordenadasBlog && scroll <= coordenadasContacto - 100){
        limpiarBarraColor('.navegacion','4');
        mostrarBarraColor('.navegacion','4','yellow');
        limpiarColorTexto();
        cambiarColorTexto('.link-4','#48334F');
        $(".logo").css({
            backgroundImage : "url('/src/img/logo-amarillo.png')"
        });
    }else if (scroll >= coordenadasContacto - 120){
        limpiarBarraColor('.navegacion','5');
        mostrarBarraColor('.navegacion','5','#70AF50');
        limpiarColorTexto();
        cambiarColorTexto('.link-5','#48334F');
        $(".logo").css({
            backgroundImage : "url('/src/img/frame-logo.svg')"
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
        transition: 'all 0.8s ease-in-out'
    });
    limpiarBarraColor('#servicios','1');
    mostrarBarraColor('#servicios', '1', 'yellow');
    mostrarIconoServicioColor('#servicios', "uno", '/src/img/icon-08.svg')
})
servicioDos.addEventListener('mouseover', () => {
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Gestion-de-redes-servicio.png")',
        transition: 'all 0.8s ease-in-out'
    });
    limpiarBarraColor('#servicios','2');
    mostrarBarraColor('#servicios', '2', '#EE4498');
    mostrarIconoServicioColor('#servicios', "dos", '/src/img/icon-10.svg')

})
servicioTres.addEventListener('mouseover', () => {
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Diseño-servicio.png")',
        transition: 'all 0.8s ease-in-out'
    });
    limpiarBarraColor('#servicios','3');
    mostrarBarraColor('#servicios', '3', '#71AF50')
    mostrarIconoServicioColor('#servicios', "tres", '/src/img/icon-06.svg')
})
servicioCuatro.addEventListener('mouseover', () => {
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Publicidad-servicio.png")',
        transition: 'all 0.8s ease-in-out'
    });
    limpiarBarraColor('#servicios','4');
    mostrarBarraColor('#servicios', '4', '#71AF50');
    mostrarIconoServicioColor('#servicios', "cuatro", '/src/img/icon-09.svg')
})
servicioCinco.addEventListener('mouseover', () => {
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/Asesoramiento-servicio.png")',
        transition: 'all 0.8s ease-in-out'
    });
    limpiarBarraColor('#servicios','5');
    mostrarBarraColor('#servicios', '5', '#EE4498')
    mostrarIconoServicioColor('#servicios', "cinco", '/src/img/icon-07.svg')
})

servicioUno.addEventListener('mouseout', () => {
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/pantalla-principal-servicio.png")',
        transition: 'all 0.8s ease-in-out'
    });
    limpiarBarraColor('#servicios','1');
    mostrarIconoServicioColor('#servicios', "uno", '/src/img/icon-03.svg')
})
servicioDos.addEventListener('mouseout', () => {
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/pantalla-principal-servicio.png")',
        transition: 'all 0.8s ease-out'
    });
    limpiarBarraColor('#servicios','2');
    mostrarIconoServicioColor('#servicios', "dos", '/src/img/icon-04.svg')
})
servicioTres.addEventListener('mouseout', () => {
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/pantalla-principal-servicio.png")',
        transition: 'all 0.8s ease-out'
    });
    limpiarBarraColor('#servicios','3');
    mostrarIconoServicioColor('#servicios', "tres", '/src/img/icon-05.svg')
})
servicioCuatro.addEventListener('mouseout', () => {
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/pantalla-principal-servicio.png")',
        transition: 'all 0.8s ease-out'
    });
    limpiarBarraColor('#servicios','4');
    mostrarIconoServicioColor('#servicios', "cuatro", '/src/img/icon-01.svg')
})
servicioCinco.addEventListener('mouseout', () => {
    $('.img-celular-variable').css({
        backgroundImage: 'url("/src/img/pantalla-principal-servicio.png")',
        transition: 'all 0.8s ease-out'
    });
    limpiarBarraColor('#servicios','5');
    mostrarIconoServicioColor('#servicios', "cinco", '/src/img/icon-02.svg')
})

/* Funciones reutilizables */
function limpiarBarraColor(localizacion){
    for (let i = 1; i <= 5; i++){
        $(`${localizacion} .barra-${i}`).css({
            backgroundColor: 'transparent'
        });
    }
}

function mostrarBarraColor(localizacion, numero, color){
    $(`${localizacion} .barra-${numero}`).css({
        backgroundColor: `${color}`,
        transition: 'all 0.8s ease-in-out'
    });
}

function mostrarIconoServicioColor(localizacion, numero, url){
    $(`${localizacion} .icono-servicio-${numero}`).css({
        backgroundImage : `url(${url})`,  
    });
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