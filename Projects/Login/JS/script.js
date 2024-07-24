document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const userInput = document.querySelector('input[placeholder="user"]');
  const passwordInput = document.querySelector(
    'input[placeholder=" password"]'
  );
  const loginButton = document.querySelector("button");

  loginButton.addEventListener("click", function () {
    const username = userInput.value;
    const password = passwordInput.value;

    if (username === "admin" && password === "admin") {
      alert("Inicio de sesión exitoso");
      // Aquí podrías redirigir a otra página o cambiar el contenido
      form.innerHTML = "<h2>Bienvenido, administrador</h2>";
    } else {
      alert("Usuario o contraseña incorrectos");
      form.inertHTML = "<h2>Usuario o contraseña incorrecta</h2>";
    }
  });
});
