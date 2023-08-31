$(function () {
    $("#header-nav a").on("click", function () {
        $("#menu").prop("checked", false)
    })

    $(".top").on("click", function (e) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })


    const removeAttr = () =>{
        if($("html").width() < 640){
            document.querySelector("#section05 #section06").removeAttribute("data-aos-anchor-placement")
            document.querySelector("#section05 #section07").removeAttribute("data-aos-anchor-placement")
            document.querySelector("#section05 #section08").removeAttribute("data-aos-anchor-placement")
        }else{
            document.querySelector("#section05 #section06").setAttribute("data-aos-anchor-placement", "top-center")
            document.querySelector("#section05 #section07").setAttribute("data-aos-anchor-placement", "top-center")
            document.querySelector("#section05 #section08").setAttribute("data-aos-anchor-placement", "top-center")
        }
    }

    removeAttr()
    window.addEventListener("resize", removeAttr)

    const swiper = new Swiper('.swiper-1', {
        autoplay: {
            delay: 5000,
            // disableOnInteraction: false
        },
        // Optional parameters
        slidesPerView: "auto",
        loop: true,
        centeredSlides: true,
        spaceBetween: 30,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const swiper2 = new Swiper('.swiper-2', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        // Optional parameters
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    const swiper2s = new Swiper('.swiper-2s', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        // Optional parameters
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
    });

    const swiper3 = new Swiper('.swiper-3', {
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        // Optional parameters
        // slidesPerView: "auto",
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        centeredSlides: true,
        spaceBetween: 20,

        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
        },
        breakpoints: {
            1024: {
                spaceBetween: 60,
            }
            // 1024: {
            //     slidesPerView: 3,
            //     slidesPerGroup: 3,
            // },
            // 400: {
            //     slidesPerView: 2,
            //     slidesPerGroup: 2,
            //     centeredSlides: false,
            // }
        }
    });

    window.addEventListener("scroll", function () {
        isInView(document.querySelector(".details-wrapper"))
    })

    function isInView(element) {

        // 獲取元素的位置和尺寸
        var bounding = element.getBoundingClientRect();

        // 獲取當前裝置的高度和寬度
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

        // 檢查元素是否在裝置可視範圍內
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= viewportHeight && bounding.right <= viewportWidth) {
            swiper3.params.autoplay = {
                delay: 5000,
                disableOnInteraction: false, // 可選項，防止用戶交互停止自動播放
            }
            swiper3.autoplay.start();
        }
    }

    // 當錨點被點擊時
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止默認行為
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth' // 可選項：平滑滾動效果
                });
                history.pushState(null, '', window.location.pathname); // 移除 URL 中的 hash
            }
        });
    });
})