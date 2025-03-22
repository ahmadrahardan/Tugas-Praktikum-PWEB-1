let slidevar=1;
function changeSlide(slider)
{
    let sliderNo=document.querySelectorAll('.slider');
    let sliderpoint=document.querySelectorAll('.slider-points span');
    for(i=0;i<sliderNo.length;i++)
    {
        sliderNo[i].classList.remove('show')
        sliderpoint[i].classList.remove('active')
    }
    if(slidevar>2)
    {
        slidevar=1;
        slider=1;
    }
    sliderNo[slider-1].classList.add('show')
    sliderpoint[slider-1].classList.add('active')
}
setInterval(()=>{
    changeSlide(slidevar);
    slidevar+=1;
},5000);

function scrollshows(number) {
    let scrollableContent, leftBtn, rightBtn;

    if (number == 1) {
        scrollableContent = document.querySelector('.inner_trending_shows');
        leftBtn = document.querySelector('.movie-scroll-left-btn');
        rightBtn = document.querySelector('.movie-scroll-right-btn');
    } else {
        scrollableContent = document.querySelector('.inner_komedi_shows');
        leftBtn = document.querySelector('.komedi-left');
        rightBtn = document.querySelector('.movie-scroll-right-btn.komedi-right');
    }

    scrollableContent.scrollLeft += 700;

    leftBtn.style.opacity = 1;

    let maxScroll = scrollableContent.scrollWidth - scrollableContent.clientWidth;
    if (scrollableContent.scrollLeft >= maxScroll - 10) {
        rightBtn.style.opacity = 0;
    } else {
        rightBtn.style.opacity = 1;
    }
}

function scrollshowleft(number) {
    let scrollableContent, leftBtn, rightBtn;

    if (number == 1) {
        scrollableContent = document.querySelector('.inner_trending_shows');
        leftBtn = document.querySelector('.movie-scroll-left-btn');
        rightBtn = document.querySelector('.movie-scroll-right-btn');
    } else {
        scrollableContent = document.querySelector('.inner_komedi_shows');
        leftBtn = document.querySelector('.komedi-left');
        rightBtn = document.querySelector('.movie-scroll-right-btn.komedi-right');
    }

    scrollableContent.scrollLeft -= 700;

    setTimeout(() => {
        if (scrollableContent.scrollLeft <= 0) {
            leftBtn.style.opacity = 0;
        }
    }, 100);

    rightBtn.style.opacity = 1;
}

document.querySelector('.inner_trending_shows').addEventListener("scroll", function () {
    let scrollableContent = document.querySelector('.inner_trending_shows');
    let leftBtn = document.querySelector('.movie-scroll-left-btn');
    let rightBtn = document.querySelector('.movie-scroll-right-btn');

    if (scrollableContent.scrollLeft <= 0) {
        leftBtn.style.opacity = 0; 
    } else {
        leftBtn.style.opacity = 1;
    }

    let maxScroll = scrollableContent.scrollWidth - scrollableContent.clientWidth;
    if (scrollableContent.scrollLeft >= maxScroll - 10) {
        rightBtn.style.opacity = 0; 
    } else {
        rightBtn.style.opacity = 1;
    }
});

document.querySelector('.inner_komedi_shows').addEventListener("scroll", function () {
    let scrollableContent = document.querySelector('.inner_komedi_shows');
    let leftBtn = document.querySelector('.komedi-left');
    let rightBtn = document.querySelector('.movie-scroll-right-btn.komedi-right');

    if (scrollableContent.scrollLeft <= 0) {
        leftBtn.style.opacity = 0; 
    } else {
        leftBtn.style.opacity = 1;
    }

    let maxScroll = scrollableContent.scrollWidth - scrollableContent.clientWidth;
    if (scrollableContent.scrollLeft >= maxScroll - 10) {
        rightBtn.style.opacity = 0; 
    } else {
        rightBtn.style.opacity = 1;
    }
});
