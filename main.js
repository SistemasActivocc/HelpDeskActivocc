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


// Creación de dirección de correo electrónico a partir del nombre de usuario y el servidor
const usernameField = document.getElementById("username");
const serverField = document.getElementById("server");
const emailField = document.getElementById("email");
function updateEmailField() {
    emailField.value = usernameField.value + "@" + serverField.value;
}
usernameField.addEventListener("input", updateEmailField);
serverField.addEventListener("change", updateEmailField);





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

  function handleFormSubmit(event) {
    const form = event.target;
    if (form.checkValidity()) {
      const {disabled} = event.submitter;
      event.submitter.disabled = true;
      setTimeout(() => disabled || (event.submitter.disabled = false), 5000);
    } else {
      mensaje.textContent = 'Campos inválidos en el formulario.';
      mensaje.style.color = 'red';
    }
  }

  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit, false);

    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('input', hideMessage, false);
      input.addEventListener('focus', clearMessageOnFocus, false);
    });

    const selects = form.querySelectorAll('select');
    selects.forEach(select => {
      select.addEventListener('change', hideMessage, false);
      select.addEventListener('focus', clearMessageOnFocus, false);
    });
  });
})();


//Spinner

const submitBtn = document.getElementById('submitBtn');
const spinnerBtn = document.getElementById('spinnerBtn');

submitBtn.addEventListener('click', function() {
  spinnerBtn.classList.remove('d-none');
  
  setTimeout(function() {
    spinnerBtn.classList.add('d-none');
    
  }, 3000);
});



// Envío de formulario mediante AJAX
window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const mensaje = document.querySelector('#mensaje');
  const invalidFields = Array.from(form.querySelectorAll(':invalid'));
  const feedbacks = Array.from(form.querySelectorAll('.invalid-feedback'));

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
      window.location.replace('success.html');
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

const Smodalidad = document.getElementById('Smodalidad');
const pcinsite = document.getElementById('pcinsite');
const NomDispositivo = document.getElementById('NomDispositivo');
const NroPuesto = document.getElementById('NroPuesto');

function toggleFields() {
  // Habilitar/Deshabilitar campo NomDispositivo
  if (pcinsite.value === 'No') {
    const currentNomDispositivoValue = NomDispositivo.value; // Guardar el valor actual de NomDispositivo
    NomDispositivo.value = ''; // Establecer el valor en blanco
    NomDispositivo.disabled = true; // Deshabilitar el campo
  } else {
    NomDispositivo.disabled = false;
  }

  // Habilitar/Deshabilitar campos pcinsite y NroPuesto
  if (Smodalidad.value !== 'Home Office') {
    pcinsite.disabled = false;
    NroPuesto.disabled = false;

    // Habilitar/Deshabilitar campo NomDispositivo si se selecciona 'Si' en pcinsite
    if (pcinsite.value === 'Si') {
      NomDispositivo.disabled = false;
    } else {
      const currentNomDispositivoValue = NomDispositivo.value; // Guardar el valor actual de NomDispositivo
      NomDispositivo.value = ''; // Establecer el valor en blanco
      NomDispositivo.disabled = true; // Deshabilitar el campo
    }

    // Limpiar el valor de pcinsite y NroPuesto si están deshabilitados
    if (pcinsite.disabled) {
      const currentPcinsiteValue = pcinsite.value; // Guardar el valor actual de pcinsite
      pcinsite.value = ''; // Establecer el valor en blanco
    }

    if (NroPuesto.disabled) {
      const currentNroPuestoValue = NroPuesto.value; // Guardar el valor actual de NroPuesto
      NroPuesto.value = ''; // Establecer el valor en blanco
    }
  } else {
    pcinsite.disabled = true;
    NroPuesto.disabled = true;
    const currentNomDispositivoValue = NomDispositivo.value; // Guardar el valor actual de NomDispositivo
    NomDispositivo.value = ''; // Establecer el valor en blanco
    NomDispositivo.disabled = true; // Deshabilitar el campo

    // Limpiar el valor de pcinsite y NroPuesto si están deshabilitados
    const currentPcinsiteValue = pcinsite.value; // Guardar el valor actual de pcinsite
    const currentNroPuestoValue = NroPuesto.value; // Guardar el valor actual de NroPuesto
    pcinsite.value = ''; // Establecer el valor en blanco
    NroPuesto.value = ''; // Establecer el valor en blanco
  }
}

// Llamada a la función toggleFields() cuando cambian los valores de los campos relevantes
Smodalidad.addEventListener('change', toggleFields);
pcinsite.addEventListener('change', toggleFields);















//Validaciones de caracteres especiales.

var formulario = document.getElementById("formulario");
var campos = formulario.querySelectorAll("input[type=text], textarea");

for (var i = 0; i < campos.length; i++) {
  campos[i].addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z0-9.]/g, '');
  });
}

