document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const subscribeForm = document.getElementById('subscribe-form');

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Close the popup
        popup.classList.add('hidden');
    });

    // Show the popup after a delay 
    setTimeout(function () {
        popup.classList.remove('hidden');
    }, 5000);

    // Close the popup when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
});