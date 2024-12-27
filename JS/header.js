// Remove focus from social icons after clicking or touching
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.blur(); // Remove focus after click
    });

    icon.addEventListener('touchstart', () => {
        icon.blur(); // Remove focus after touch on mobile
    });
});
