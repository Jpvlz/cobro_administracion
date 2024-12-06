document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita el envío del formulario para validarlo primero

    let valid = true;

    // Validar Nombre Completo (solo letras y espacios)
    const name = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    const namePattern = /^[a-zA-Z\s]+$/;  // Solo letras y espacios
    if (!name.value.trim()) {
        valid = false;
        nameError.textContent = "Este campo no puede estar vacío.";
    } else if (!namePattern.test(name.value.trim())) {
        valid = false;
        nameError.textContent = "El nombre solo puede contener letras y espacios.";
    } else {
        nameError.textContent = "";
    }

    // Validar Número de Torre (solo números)
    const tower = document.getElementById("tower");
    const towerError = document.getElementById("tower-error");
    const towerPattern = /^[0-9]+$/;  // Solo números
    if (!tower.value.trim()) {
        valid = false;
        towerError.textContent = "Este campo no puede estar vacío.";
    } else if (!towerPattern.test(tower.value.trim())) {
        valid = false;
        towerError.textContent = "Solo se permiten números en este campo.";
    } else {
        towerError.textContent = "";
    }

    // Validar Número de Apartamento (solo números)
    const apartment = document.getElementById("apartment");
    const apartmentError = document.getElementById("apartment-error");
    const apartmentPattern = /^[0-9]+$/;  // Solo números
    if (!apartment.value.trim()) {
        valid = false;
        apartmentError.textContent = "Este campo no puede estar vacío.";
    } else if (!apartmentPattern.test(apartment.value.trim())) {
        valid = false;
        apartmentError.textContent = "Solo se permiten números en este campo.";
    } else {
        apartmentError.textContent = "";
    }

    // Validar Correo Electrónico
    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.value.trim()) {
        valid = false;
        emailError.textContent = "Este campo no puede estar vacío.";
    } else if (!emailPattern.test(email.value)) {
        valid = false;
        emailError.textContent = "Por favor ingresa un correo electrónico válido.";
    } else {
        emailError.textContent = "";
    }

    // Validar Contraseña
    const password = document.getElementById("password");
    const passwordError = document.getElementById("password-error");
    if (!password.value.trim()) {
        valid = false;
        passwordError.textContent = "Este campo no puede estar vacío.";
    } else if (password.value.length < 6) {
        valid = false;
        passwordError.textContent = "La contraseña debe tener al menos 6 caracteres.";
    } else {
        passwordError.textContent = "";
    }

    // Validar Confirmar Contraseña
    const confirmPassword = document.getElementById("confirm-password");
    const confirmPasswordError = document.getElementById("confirm-password-error");
    if (!confirmPassword.value.trim()) {
        valid = false;
        confirmPasswordError.textContent = "Este campo no puede estar vacío.";
    } else if (confirmPassword.value !== password.value) {
        valid = false;
        confirmPasswordError.textContent = "Las contraseñas no coinciden.";
    } else {
        confirmPasswordError.textContent = "";
    }

    // Si todas las validaciones son correctas, enviar el formulario
    if (valid) {
        alert("Formulario enviado correctamente.");
        // Aquí puedes realizar la acción de envío del formulario
        // Si es un formulario real, usa: event.target.submit();
    }
});
