
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


// Botón de envío de formulario con animación de carga
const submitBtn = document.getElementById('submitBtn');
const spinnerBtn = document.getElementById('spinnerBtn');

submitBtn.addEventListener('click', function() {
  submitBtn.disabled = true; // Deshabilitar el botón de envío
  spinnerBtn.classList.remove('d-none');
  setTimeout(function() {
    spinnerBtn.classList.add('d-none');
    submitBtn.disabled = false; // Habilitar el botón de envío después de 2 segundos
  }, 5000);
});




// Validación del formulario con Bootstrap
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


// Envío de formulario mediante AJAX
window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  const mensaje = document.querySelector('#mensaje')

  function handleFormResponse(data) {
    if (data.result === 'success') {
      const invalidFields = document.querySelectorAll('.is-invalid')
      invalidFields.forEach(field => {
        field.classList.remove('is-invalid')
        const feedback = field.nextElementSibling
        if (feedback && feedback.classList.contains('invalid-feedback')) {
          feedback.textContent = ''
        }
      })
      window.location.href = "success.html";
    } else {
      mensaje.textContent = 'Error al enviar el formulario.'
      mensaje.style.color = 'red'
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (form.checkValidity()) {
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      })
        .then(response => response.json())
        .then(data => handleFormResponse(data))
        .catch(error => {
          mensaje.textContent = 'Error al enviar el formulario.'
          mensaje.style.color = 'red'
        })
    }

    form.classList.add('was-validated')
  })
})


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