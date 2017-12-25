function fadeIn() {
    //feature-anim
    const feature = document.querySelector('.features');
    const topOfFeature = 0.85 * feature.offsetTop;
    const featList = document.querySelector('.feat-list');

    //iphone-anim
    const hw_it_wrks = document.querySelector('.hw-it-wrk');
    const topOfhwitwrk = 0.95 * hw_it_wrks.offsetTop;
    const iphone = document.querySelector('.iphone-img');

    //city-anim
    const cities = document.querySelector('.cities');
    const topOfCity = 0.95 * cities.offsetTop;
    const city = document.querySelector('.city-list');

    if (window.scrollY >= topOfFeature) {
        featList.classList.add(['fade-in-anim']);
    }

    if (window.scrollY >= topOfCity) {
        city.classList.add(['city-anim']);
    }

    if (window.scrollY >= topOfhwitwrk) {
        iphone.classList.add(['iphone-anim']);
    }
}
window.addEventListener('scroll', fadeIn);

//var c = document.getElementsByTagName('section')
// var c = document.getElementsByTagName('header')