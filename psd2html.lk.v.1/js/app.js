new Swiper('.aside__slider', {
    direction: "vertical",
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 30,
    mousewheel: true,
    freeMode: true
});

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    let aside = document.getElementById('aside');
    
    if (!id) {
        if( !aside.contains(event.target) ) aside.classList.remove('active');
        return;
    }
    aside.classList.toggle('active');
});