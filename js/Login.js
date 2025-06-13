document.addEventListener("DOMContentLoaded", function () {
    const btnEntrar = document.getElementById("btnEntrar");

    if (btnEntrar) {
        btnEntrar.addEventListener("click", function (e) {
            e.preventDefault(); 

            const email = document.getElementById("inputEmail").value;
            const password = document.getElementById("inputPassword").value;

            if (email === "" || password === "") {

                Swal.fire({
                    icon: "error",
                    title: "Campos incompletos",
                    text: "Por favor, completa todos los campos.",

                });
            } else {
                Swal.fire({
                    icon: "success",
                    title: "¡Bienvenido!",
                    text: "Inicio de sesión exitoso"
                });

              
            }
        });
    }
});