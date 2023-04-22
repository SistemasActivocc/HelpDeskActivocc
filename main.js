
//Deshabilitar usuario si no tiene.

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

//

const usernameField = document.getElementById("username");
const serverField = document.getElementById("server");
const emailField = document.getElementById("email");
function updateEmailField() {
    emailField.value = usernameField.value + "@" + serverField.value;
}
usernameField.addEventListener("input", updateEmailField);
serverField.addEventListener("change", updateEmailField);



  const submitBtn = document.getElementById('submitBtn');
  const spinnerBtn = document.getElementById('spinnerBtn');

  submitBtn.addEventListener('click', function() {
    spinnerBtn.classList.remove('d-none');
    setTimeout(function() {
      spinnerBtn.classList.add('d-none');
    }, 2000);
  });






  (() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
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






  window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  const mensaje = document.querySelector('#mensaje')





  function handleFormResponse(data) {
    if (data.result === 'success') {
      // Limpiar los mensajes de error
      const invalidFields = document.querySelectorAll('.is-invalid')
      invalidFields.forEach(field => {
        field.classList.remove('is-invalid')
        const feedback = field.nextElementSibling
        if (feedback && feedback.classList.contains('invalid-feedback')) {
          feedback.textContent = ''
        }
      })
      // Limpiar los valores del formulario
      form.reset()
      // Redireccionar a la página "enviado.html"
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





  

  window.addEventListener("load", function() {
    document.getElementById("formulario").reset();
  });

