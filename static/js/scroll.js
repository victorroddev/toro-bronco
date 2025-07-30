document.addEventListener('DOMContentLoaded', () => {

    const sr = ScrollReveal({
        distance: '50px',
        duration: 700,
        easing: 'ease-out',
        origin: 'bottom',
        reset: false
    });

    sr.reveal('.reveal-left', {
        origin: 'left',
        distance: '80px',
        delay: 500,
        duration: 1000
    })

    sr.reveal('.reveal-right', {
        origin: 'right',
        distance: '80px',
        delay: 500,
        duration: 1000
    })

    sr.reveal('.first-image', {
        origin: 'bottom',  // La imagen emerge ligeramente desde abajo
        distance: '30px',  // Se mueve 30px desde abajo a su posición final
        opacity: 0,        // Empieza completamente transparente
        scale: 0.9,        // Empieza un poco más pequeña (90% de su tamaño final)
        duration: 1200,    // Una duración más larga para un efecto más majestuoso
        delay: 150         // Un pequeño retraso para que no sea instantáneo
    });

    sr.reveal('.reveal-bottom', {
        origin: 'bottom',
        distance: '80px',
        delay: 500,
        duration: 1000
    })

    sr.reveal('.reveal-top', {
        origin: 'top',
        distance: '10px',
        delay: 500,
        duration: 1000
    })

    sr.reveal('.aparecer', {
        origin: 'left',
        distance: '5px',
        delay: 500,
        duration: 1000
    })

})