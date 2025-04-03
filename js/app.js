document.addEventListener("DOMContentLoaded", () => {
    function incrementarLikes(event) {
        const boton = event.target;
        const contadorLikes = boton.nextElementSibling; // busca al hermano (span
        let cantidadLikes = parseInt(contadorLikes.textContent); 
        cantidadLikes++;
        contadorLikes.textContent = cantidadLikes;
    }

    function incrementarRetuit(event) {
        const boton = event.target;
        const contadorRetuit = boton.nextElementSibling; 
        let cantidadRetuit = parseInt(contadorRetuit.textContent); // convertir a num
        cantidadRetuit++;
        contadorRetuit.textContent = cantidadRetuit;
    }

    document.querySelectorAll(".like").forEach((boton) => {
        boton.addEventListener("click", incrementarLikes);
    });

    document.querySelectorAll(".retuitear").forEach((boton) => {
        boton.addEventListener("click", incrementarRetuit);
    });
});
