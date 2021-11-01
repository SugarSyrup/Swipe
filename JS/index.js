const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");

btnStart.addEventListener("click", ()=>{
    swiper.autoplay.start();
});

btnStop.addEventListener("click",()=>{
    swiper.autoplay.stop();
})

const swiper = new Swiper(".wrap", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
		type: 'fraction' //페이지 버튼 대신 슬라이더 번호 출력
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
	spaceBetween: 0,//패널 사이 간격
    slidesPerView: "auto",  //css에 지정한 슬라이더의 크기를 반영
    grabCursor: true,       //스와이프시 마우스 포인터 모양 변경
    centeredSlides:true,   //슬라이더 패널 중앙 정렬
    speed:1000,  //슬라이더 속도

    effect:"coverflow",
    coverflowEffect: {
        rotate:50,
        stretch: -100,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },

    autoplay:{
        delay: 1000,
        disableOnInteraction:true //1초마다 슬라이드 자동 재생
    }
});