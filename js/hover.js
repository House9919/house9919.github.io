document.addEventListener('DOMContentLoaded', function() {
    var tolButton = document.querySelector('.hoverTOL');
    var pixButton = document.querySelector('.hoverPIX')
    var body = document.body;

    // Tales of Lynnear button
    tolButton.addEventListener('mouseover', function() {
        body.classList.add('fade-in');
        body.classList.add('hoveredTOL');
    });

    tolButton.addEventListener('mouseout', function() {
        body.classList.remove('hoveredTOL');
        setTimeout(function () {
            body.classList.remove('fade-in');
        }, 1000);
    });

    // Pixelmon button
    pixButton.addEventListener('mouseover', function () {
        body.classList.add('fade-in');
        body.classList.add('hoveredPIX');
    });

    pixButton.addEventListener('mouseout', function () {
        body.classList.remove('hoveredPIX');
        setTimeout(function () {
            body.classList.remove('fade-in');
        }, 1000);
    });
});