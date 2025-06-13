document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector('button[type="submit"]');

    submitButton.addEventListener("click", (e) => {
        e.preventDefault(); // evita que el formulario se envíe realmente

        // Captura de los campos requeridos
        const nombre = document.getElementById("inputNombre").value.trim();
        const apellidos = document.getElementById("inputApellidos").value.trim();
        const fechaNacimiento = document.getElementById("inputFechanacimiento").value.trim();
        const password = document.getElementById("inputPassword").value.trim();
        const repetirPassword = document.getElementById("inputPassword5").value.trim();
        const correo = document.getElementById("inputEmail").value.trim();
        const telefono = document.getElementById("inputTelefono").value.trim();
        const sexo = document.querySelector("select[aria-label='Default select example']").value;
        const nacionalidad = document.querySelectorAll("select[aria-label='Default select example']")[1].value;

        // Validar campos vacíos
        if (
            !nombre || !apellidos || !fechaNacimiento || !password || !repetirPassword ||
            !correo || !telefono || sexo === "Seleccione su Sexo" || nacionalidad === "Seleccione su Nacionalidad"
        ) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Todos los campos deben estar completos.",
            });
        } else {
            // Mostrar alerta de éxito
            Swal.fire({
                title: "¡Formulario enviado!",
                icon: "success",
                text: "Tu formulario ha sido enviado correctamente.",
                draggable: true
            });
        }
    });
});
