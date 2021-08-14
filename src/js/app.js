/* Variables del formulario */
const nombre = document.querySelector('.nombre');
const email = document.querySelector('.email');
const telefono = document.querySelector('.telefono');
const mensaje = document.querySelector('.mensaje');

const btnEnviar = document.querySelector('.btn-enviar');
const contenedorFormulario = document.querySelector('.contenedor-formulario');
const formularioContacto = document.querySelector('.formulario-contacto');

const divTema = document.querySelectorAll('.checkbox');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let datosIngresados = {
    mensaje: '', 
    nombre : '',
    telefono : '',
    email: '',
    servicios : [],
}

eventosListener();
function eventosListener(){
    nombre.addEventListener('blur', validarCampo);
    email.addEventListener('blur', validarCampo);
    telefono.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    btnEnviar.addEventListener('click', enviarFormulario);

    divTema.forEach( tema => {
        tema.addEventListener("click", temaSeleccionado)
    })

}

function validarCampo(e){
    
    if (e.target.value.length < 2) {
        e.target.classList.add('incorrecto')
        e.target.classList.remove('correcto')
    }else{
        e.target.classList.remove('incorrecto')
        e.target.classList.add('correcto')
    }

    if (er.test(email.value)) {
        email.classList.remove('incorrecto')
        email.classList.add('correcto')
    }else{
        email.classList.add('incorrecto')
        email.classList.remove('correcto')
    }

    if (er.test(email.value) && mensaje.value !== '' && telefono.value !=='' && nombre.value !=='') {
        const servicios = document.querySelectorAll('input[type="checkbox"]');
        servicios.forEach( servicio => {
            if (servicio.checked) {
                datosIngresados.servicios.push(servicio.nextElementSibling.textContent);
            }
        })

        btnEnviar.disabled = false;
        $(btnEnviar).css({
            // backgroundColor : 'green',
            color: 'green',
            cursor : 'pointer',
        });
        datosIngresados.mensaje = mensaje.value
        datosIngresados.nombre = nombre.value
        datosIngresados.email = email.value
        datosIngresados.telefono = telefono.value
    }else{
        btnEnviar.disabled = true;   
    }
}

function enviarFormulario(e){
    e.preventDefault();
    
    const servicios = document.querySelectorAll('input[type="checkbox"]');
    datosIngresados.servicios = [];
    servicios.forEach( servicio => {
        if (servicio.checked) {
            datosIngresados.servicios.push(servicio.nextElementSibling.textContent);
        }
    })

    if (datosIngresados.servicios.length === 0) {
        mostrarErrores('Debes Ingresar el servicio o los servicios que necesitas');
        return
    }

    limpiarCampos();
    
    console.log(datosIngresados)
}

function temaSeleccionado(e){
    const div = e.target.parentElement;
    if (div.classList.contains('correcto')) {
        div.classList.remove('correcto');
    }else {
        div.classList.add('correcto')
    }
}

function mostrarErrores(mensaje){

    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');

    const existe = document.querySelectorAll('.error');
    if (existe.length === 0 ) {
        contenedorFormulario.appendChild(error);

        setTimeout(() => {
            error.remove();
        }, 3000);
    }
}

function limpiarCampos() {
    formularioContacto.reset();
    email.classList.remove('correcto');
    nombre.classList.remove('correcto');
    telefono.classList.remove('correcto');
    mensaje.classList.remove('correcto');
    btnEnviar.disabled = true;

    const servicios = document.querySelectorAll('input[type="checkbox"]');
    servicios.forEach( servicio => {
        if (servicio.checked) {
            servicio.checked = false;
        }
    })
}