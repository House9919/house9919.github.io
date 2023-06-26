document.addEventListener('DOMContentLoaded', function() {
    const popupLink = document.getElementById('popup-link');
    const popupMessage = document.getElementById('popup-msg');

    // Show the pop-up message when the link is clicked
    popupLink.addEventListener('click', function(event) {
        event.preventDefault();
        popupMessage.style.display = 'block';
        setTimeout(function() {
            popupMessage.style.opacity = '1';
        }, 10);
        setTimeout(function() {
            popupMessage.style.opacity = '0';
            setTimeout(function() {
                popupMessage.style.display = 'none';
            }, 1500);
        }, 5000);
    });
});