function effect() {
    const fade = document.querySelector('.init');
    const topOfNav = fade.offsetTop;
    if (window.scrollY >= topOfNav-400) {
        fade.classList.add(['fade-in-anim']);
    }
}
window.addEventListener('scroll', effect);