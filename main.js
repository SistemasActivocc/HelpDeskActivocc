//lOGIN


function validarClave() {
  var clave = document.getElementById("clave").value;

  // Realizar validación de la clave 
  if (clave === "Activocc_2023_Ticket") {
     // Establecer la cookie de sesión sin fecha de expiración
     document.cookie = "sesionIniciada=true";
     redirigirAIndex();
  } else {
      document.getElementById("mensaje-error").textContent = "Clave incorrecta. Intenta nuevamente.";
  }
}

function redirigirAIndex() {
  window.location.href = "index.html";
}









const formFijo = document.querySelector('form[data-form-type="redirect"]');

if (formFijo) {

// Creación de dirección de correo electrónico a partir del nombre de usuario y el servidor
const usernameField = document.getElementById("username");
const serverField = document.getElementById("server");
const emailField = document.getElementById("email");
function updateEmailField() {
    emailField.value = usernameField.value + "@" + serverField.value;
}
usernameField.addEventListener("input", updateEmailField);
serverField.addEventListener("change", updateEmailField);














// Formulario de selección de tipo de usuario y su nombre de usuario correspondiente
const tipoUsuario = document.getElementById('tipoUsuario');
const usuario = document.getElementById('usuario');

tipoUsuario.addEventListener('change', () => {
  if (tipoUsuario.value === 'null') {
    usuario.value = '';
    usuario.setAttribute('disabled', true);
  } else {
    usuario.removeAttribute('disabled');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  if (tipoUsuario.value === 'null' && !usuario.value) {
    usuario.value = '';
  }
});
















}



//Deshabilitar el boton de envio y Avisar de campos invalidos en el submit

(() => {
  const forms = document.querySelectorAll('.needs-validation');
  const mensaje = document.querySelector('#mensaje');

  function hideMessage() {
    mensaje.textContent = '';
  }

  function clearMessageOnFocus(event) {
    const feedback = event.target.closest('.form-floating').querySelector('.invalid-feedback');
    feedback.textContent = '';
  }

  function clearMessageOnFocusTextarea(event) {
    const feedback = event.target.closest('.mb-1').querySelector('.invalid-feedback');
    feedback.textContent = '';
  }

  function handleFormSubmit(event) {
    const form = event.target;
    if (form.checkValidity()) {
      const { disabled } = event.submitter;
      event.submitter.disabled = true;
      setTimeout(() => disabled || (event.submitter.disabled = false), 9000);
    } else {
      mensaje.textContent = 'Campos inválidos en el formulario.';
      mensaje.style.color = 'red';
    }
  }

  forms.forEach((form) => {
    form.addEventListener('submit', handleFormSubmit, false);

    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      input.addEventListener('input', hideMessage, false);
      input.addEventListener('focus', clearMessageOnFocus, false);
    });

    const selects = form.querySelectorAll('select');
    selects.forEach((select) => {
      select.addEventListener('change', hideMessage, false);
      select.addEventListener('focus', clearMessageOnFocus, false);
    });

    const textarea = form.querySelector('textarea');
    textarea.addEventListener('input', hideMessage, false);
    textarea.addEventListener('focus', clearMessageOnFocusTextarea, false);
  });
})();





// Envío de formulario mediante AJAX
window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const mensaje = document.querySelector('#mensaje');
  const invalidFields = Array.from(form.querySelectorAll(':invalid'));
  const feedbacks = Array.from(form.querySelectorAll('.invalid-feedback'));
  const isRedirectForm = form.getAttribute('data-form-type') === 'redirect';

  function handleFormResponse(data) {
    if (data.result === 'success') {
      invalidFields.forEach(field => {
        field.classList.remove('is-invalid');
      });
      feedbacks.forEach(feedback => {
        if (feedback.textContent) {
          feedback.textContent = '';
        }
      });

      form.reset();
      form.classList.remove('was-validated');


      if (isRedirectForm) {
        window.location.replace('success.html');
      } else {
        mensaje.textContent = 'El formulario se envió correctamente.';
        mensaje.style.color = 'green';
      }


    } else {
      mensaje.textContent = 'Error al enviar el formulario.';
      mensaje.style.color = 'red';
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      })
        .then(response => response.json())
        .then(data => handleFormResponse(data))
        .catch(error => {
          mensaje.textContent = 'Error al enviar el formulario.';
          mensaje.style.color = 'red';
        });
    }
    form.classList.add('was-validated');
  });
});


// Reinicio del formulario al cargar la página
window.addEventListener("load", function() {
  document.getElementById("formulario").reset();
});



// Campos de Info PC solo si es Home Office


const selectModalidad = document.getElementById('Smodalidad');
const inputAnydesk = document.getElementById('Anydesk');
const inputPinternet = document.getElementById('Pinternet');

inputAnydesk.disabled = true;
    inputPinternet.disabled = true;


selectModalidad.addEventListener('change', () => {
  if (selectModalidad.value === 'Home Office') {
    inputAnydesk.disabled = false;
    inputPinternet.disabled = false;
  } else {
    inputAnydesk.value = '';
    inputPinternet.value = '';
    inputAnydesk.disabled = true;
    inputPinternet.disabled = true;
  }
});



//Nombre de equipo

// Obtener referencias a los elementos del DOM
const estadoEquipo = document.querySelectorAll('input[name="estadoEquipo"]');
const modalidad = document.getElementById("Smodalidad");
const nomDispositivo = document.getElementById("NomDispositivo");
const nroPuesto = document.getElementById("NroPuesto");
const formCheckEstadoEquipo = document.querySelectorAll('input[name="estadoEquipo"]:not([disabled])');

// Función para deshabilitar los elementos del form-group de estadoEquipo, NomDispositivo y NroPuesto
function deshabilitarElementos() {
  for (let i = 0; i < estadoEquipo.length; i++) {
    estadoEquipo[i].disabled = true;
    estadoEquipo[i].checked = false;
  }
  nomDispositivo.disabled = true;
  nomDispositivo.value = ""; // Limpiar el valor ingresado
  nroPuesto.disabled = true;
  nroPuesto.value = ""; // Limpiar el valor ingresado
}

// Función para habilitar el elemento NomDispositivo
function habilitarNomDispositivo() {
  nomDispositivo.disabled = false;
}

// Evento change en el select Smodalidad
modalidad.addEventListener("change", function () {
  if (modalidad.value === "Home Office") {
    deshabilitarElementos();
  } else {
    for (let i = 0; i < estadoEquipo.length; i++) {
      estadoEquipo[i].disabled = false;
    }
    nroPuesto.disabled = false;
  }
});

// Evento change en los radios de estadoEquipo
for (let i = 0; i < estadoEquipo.length; i++) {
  estadoEquipo[i].addEventListener("change", function () {
    if (estadoEquipo[i].checked && estadoEquipo[i].value === "si") {
      habilitarNomDispositivo();
    } else {
      nomDispositivo.disabled = true;
      nomDispositivo.value = ""; // Limpiar el valor ingresado
    }
  });
}

// Limpiar los form-check de estadoEquipo cuando se deshabilitan
function limpiarFormCheckEstadoEquipo() {
  for (let i = 0; i < formCheckEstadoEquipo.length; i++) {
    formCheckEstadoEquipo[i].checked = false;
  }
}

// Llamar a la función para limpiar los form-check de estadoEquipo al cargar la página
limpiarFormCheckEstadoEquipo();





// Validaciones de caracteres especiales.
var formulario = document.getElementById("formulario");
var campos = formulario.querySelectorAll("input[type=text], textarea");

for (var i = 0; i < campos.length; i++) {
  campos[i].addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z0-9.\s\-ñÑ]/g, '');
  });
}

// Eliminación de saltos de línea.
var textarea = document.getElementById("comentario");

textarea.addEventListener("input", function() {
  this.value = this.value.replace(/\n/g, '');
});