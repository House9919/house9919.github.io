document.addEventListener('DOMContentLoaded', function () {
  var tolButton = document.querySelector('.hoverTOL');
  var pixButton = document.querySelector('.hoverPIX');
  var background = document.querySelector('.background');

  // Tales of Lynnear button
  tolButton.addEventListener('mouseover', function () {
    background.classList.add('hoveredTOL');
    background.classList.remove('fade-out');
    background.classList.add('fade-in');
  });

  tolButton.addEventListener('mouseout', function () {
    background.classList.remove('hoveredTOL');
    background.classList.remove('fade-in');
    background.classList.add('fade-out');
  });

  // Pixelmon button
  pixButton.addEventListener('mouseover', function () {
    background.classList.add('hoveredPIX');
    background.classList.remove('fade-out');
    background.classList.add('fade-in');
  });

  pixButton.addEventListener('mouseout', function () {
    background.classList.remove('hoveredPIX');
    background.classList.remove('fade-in');
    background.classList.add('fade-out');
  });

  // Handle fade-in transition when moving cursor into the background
  background.addEventListener('mouseover', function () {
    background.classList.remove('fade-out');
    background.classList.add('fade-in');
  });

  // Handle fade-out transition when moving cursor out of the background
  background.addEventListener('mouseout', function () {
    background.classList.remove('fade-in');
    background.classList.add('fade-out');
  });
});