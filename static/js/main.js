// main.js

document.addEventListener('DOMContentLoaded', () => {
    const loaderOverlay = document.getElementById('loader-overlay');
    const flameParts = document.querySelectorAll('.flame-part'); // Seleccionamos todas las partes de la llama

    const colorFlame1 = '#F63E02'; // Rojo-naranja (base)
    const colorFlame2 = '#E6AF2E';   // Amarillo (punta/centro más brillante)

    let animationColorInterval;

    function startFlameColorAnimation() {
        if (flameParts.length === 0) {
            console.warn('No se encontraron partes de llama para animar. Asegúrate de que tu SVG tenga elementos con la clase "flame-part".');
            return;
        }

        let step = 0;
        animationColorInterval = setInterval(() => {
            // Lógica para colorear las llamas de forma que parezca que "cobran vida"
            // Puedes hacer un ciclo o una asignación más compleja

            flameParts.forEach(part => {
                // Alternar el color principal
                if (step % 2 === 0) {
                    part.style.fill = colorFlame1;
                } else {
                    part.style.fill = colorFlame2;
                }

                // Lógica más específica para algunas partes (opcional)
                if (part.id === 'inner-flame') {
                    // La parte interna es siempre más brillante
                    part.style.fill = colorFlame2;
                    // Y puede cambiar de opacidad para simular el brillo
                    part.style.opacity = (step % 3 === 0) ? 1 : 0.8;
                } else if (part.id.startsWith('flame-spark')) {
                    // Las chispas pueden parpadear entre colores o tener opacidad variable
                    part.style.fill = (step % 2 === 0) ? colorFlame2 : colorFlame1;
                    part.style.opacity = (step % 4 === 0) ? 0.5 : 1; // Parpadeo más rápido
                }
            });

            step++;
            // Puedes resetear step o dejarlo crecer si la lógica de % lo maneja bien
        }, 300); // Cambia de color cada 300ms
    }

    function stopFlameColorAnimation() {
        clearInterval(animationColorInterval);
        flameParts.forEach(part => {
            // Puedes resetear al color original del SVG o a un gris, etc.
            part.style.fill = '#FF3069'; // O al color base de tu SVG
            part.style.opacity = 1; // Asegura opacidad completa
        });
    }

    // ############ Lógica de mostrar/ocultar Loader ############
    if (loaderOverlay) {
        // Aseguramos que el loader es visible y bloquea la interacción al inicio
        loaderOverlay.style.opacity = '1';
        loaderOverlay.style.pointerEvents = 'auto';
        startFlameColorAnimation(); // Inicia la animación de color
    }

    window.addEventListener('load', () => {
        if (loaderOverlay) {
            // Añadimos un pequeño retraso mínimo para que la animación se vea
            setTimeout(() => {
                stopFlameColorAnimation(); // Detiene la animación de color
                loaderOverlay.style.opacity = '0'; // Inicia la transición de fade-out
                // Una vez que la transición ha terminado, ocultamos completamente
                setTimeout(() => {
                    loaderOverlay.style.display = 'none';
                    loaderOverlay.style.pointerEvents = 'none';
                }, 300); // Duración de la transición en CSS
            }, 1500); // Mínimo 500ms de visualización del loader
        }
    });

});