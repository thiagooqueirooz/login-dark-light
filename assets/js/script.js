const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-solid fa-moon')) {
        mode.classList.remove('fa-solid fa-moon');
        mode.classList.add('fa-sun');

        return;
    }

    mode.classList.add('fa-solid fa-moon');
    mode.classList.remove('fa-sun');
});