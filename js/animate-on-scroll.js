// Slide in
const slidingNewsletter = document.querySelector('.scroll-slide-in');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slidingNewsletter.classList.add('active')
    }
})

    // Zoom in
    const zoomOnScroll = document.querySelector('.scroll-zoom-in');

    window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = zoomOnScroll.getBoundingClientRect().top;
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        zoomOnScroll.classList.add('active')
    }
})
// Zoom in for community
const zoomOnScrollCommunity = document.querySelector('.community-zoom-in');
    window.addEventListener('scroll', () => {
        const {scrollTop, clientHeight} = document.documentElement;
        const topElementToTopViewport = zoomOnScrollCommunity.getBoundingClientRect().top;
        if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
            zoomOnScrollCommunity.classList.add('active')
        }
    })