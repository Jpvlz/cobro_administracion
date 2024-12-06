// Obtener el formulario y los campos
const form = document.getElementById('contact-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

// Obtener los elementos de error
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// Función para validar el formulario
function validateForm(event) {
    let valid = true;

    // Limpiar los errores previos
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Validación del nombre
    if (nameField.value.trim() === '') {
        nameError.textContent = 'Por favor, ingresa tu nombre completo.';
        valid = false;
    }

    // Validación del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailField.value.trim() === '') {
        emailError.textContent = 'Por favor, ingresa tu correo electrónico.';
        valid = false;
    } else if (!emailPattern.test(emailField.value.trim())) {
        emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
        valid = false;
    }

    // Validación del mensaje
    if (messageField.value.trim() === '') {
        messageError.textContent = 'Por favor, ingresa tu mensaje.';
        valid = false;
    }

    // Si no es válido, evitar el envío del formulario
    if (!valid) {
        event.preventDefault(); // Evitar que el formulario se envíe
    }
}

// Añadir el evento de validación al formulario
form.addEventListener('submit', validateForm);
