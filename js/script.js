function copyEmail() {
  const emailTextarea = document.getElementById("email-textarea");
  emailTextarea.select();
  document.execCommand("copy");
}

/*cambiador de color de texto logica*/

document.addEventListener("DOMContentLoaded", function () {
  const iconos = document.querySelectorAll(".iconos i");

  function cambiarColorIcono() {
    iconos.forEach((icono) => {
      const colorRandom = getRandomColor();
      icono.style.transition = "color 1s linear"; // Aplica la transición suave de color
      icono.style.color = colorRandom;
    });
  }

  function getRandomColor() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setInterval(cambiarColorIcono, 1000); // Cambia el color cada segundo
});
