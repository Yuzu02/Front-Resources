// Setup del carrusel
let indice = 0;
const images = document.getElementById("images");
const totalImages = images.children.length;
let startX = 0;
let endX = 0;

// Función para cambiar la imagen usando los botones
function cambiarImagen(direction) {
	indice = (indice + direction + totalImages) % totalImages;
	images.style.transform = `translateX(${-indice * 600}px)`;
}

// Eventos para dispositivos táctiles
images.addEventListener("touchstart", (e) => {
	startX = e.touches[0].clientX;
	e.preventDefault();
});

images.addEventListener("touchmove", (e) => {
	endX = e.touches[0].clientX;
	e.preventDefault();
});

images.addEventListener("touchend", (e) => {
	if (startX > endX + 50) {
		cambiarImagen(1); // Deslizar a la izquierda
	} else if (startX < endX - 50) {
		cambiarImagen(-1); // Deslizar a la derecha
	}
	e.preventDefault();
});

// Eventos para dispositivos con ratón
images.addEventListener("mousedown", (e) => {
	startX = e.clientX;
	e.preventDefault();
});

images.addEventListener("mousemove", (e) => {
	if (startX !== 0) {
		endX = e.clientX;
		e.preventDefault();
	}
});

images.addEventListener("mouseup", (e) => {
	if (startX !== 0) {
		endX = e.clientX;
		if (startX > endX + 50) {
			cambiarImagen(1); // Deslizar a la izquierda
		} else if (startX < endX - 50) {
			cambiarImagen(-1); // Deslizar a la derecha
		}
		startX = 0;
		endX = 0;
		e.preventDefault();
	}
});

images.addEventListener("mouseleave", (e) => {
	startX = 0;
	endX = 0;
});
