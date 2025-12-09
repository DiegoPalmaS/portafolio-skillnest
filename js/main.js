// Requerimiento 4: Uso de JavaScript para personalización de eventos
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            alert('Modo de visualización cambiado.');
        });
    }
});

// Requerimiento 5: Uso de JQuery para manejo del DOM
$(document).ready(function() {
    // Cuando se haga clic en un título de experiencia
    $('.experience-card-header').on('click', function() {
        // Alternar el mostrar/ocultar del contenido (el detalle)
        $(this).next('.experience-card-body').slideToggle(300);
    });
});