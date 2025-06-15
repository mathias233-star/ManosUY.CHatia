document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const userType = document.getElementById('userType').value; // Obtiene el tipo de usuario
    const name = document.getElementById('name').value; // Obtiene el nombre
    const email = document.getElementById('email').value; // Obtiene el email

    // Muestra un mensaje en la página
    const messageDiv = document.getElementById('message');
    
    if (userType && name && email) {
        messageDiv.innerHTML = `Registro exitoso! Tipo de usuario: ${userType}, Nombre: ${name}, Email: ${email}`;
        messageDiv.style.color = "green"; // Cambia el color del mensaje a verde
        document.getElementById('registrationForm').reset(); // Reinicia el formulario
    } else {
        messageDiv.innerHTML = "Por favor completa todos los campos.";
        messageDiv.style.color = "red"; // Cambia el color del mensaje a rojo
    }
});