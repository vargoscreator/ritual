AOS.init({
	once: true,
    duration: 500,
});
document.querySelectorAll(".sliderblock__slider").forEach((slider) => {
    const pagination = slider.querySelector(".sliderblock__pagination");
    const swiperInstance = new Swiper(slider, {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
            el: pagination,
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        breakpoints: {
            768: {
                spaceBetween: 25,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1000: {
                spaceBetween: 50,
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        },
    });
    slider.addEventListener("mouseenter", () => {
        swiperInstance.autoplay.stop();
    });
    slider.addEventListener("mouseleave", () => {
        swiperInstance.autoplay.start();
    });
    slider.addEventListener("touchstart", () => {
        swiperInstance.autoplay.stop();
    });
    slider.addEventListener("touchend", () => {
        swiperInstance.autoplay.start();
    });
});


document.querySelectorAll('.faq__item-name').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.closest('.faq__item');
        parent.classList.toggle('active');
        document.querySelectorAll('.faq__item.active').forEach(i => {
            if (i !== parent) i.classList.remove('active');
        });
    });
});

const packagesSelectButtons = document.querySelectorAll('.packages__select-btn');
const packagesBlocks = document.querySelectorAll('.packages__block');
packagesSelectButtons.forEach(button => {
    button.addEventListener('click', () => {
        packagesSelectButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const target = button.getAttribute('data-target');
        packagesBlocks.forEach(block => block.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});

const popup = document.querySelector('.popup');
const popupTitle = popup.querySelector('.popup__title');
const popupDescr = popup.querySelector('.popup__descr');
const popupClose = popup.querySelector('.popup__close');
document.querySelectorAll('.packages__item-btn').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.closest('.packages__item').querySelector('.packages__item-name').textContent;
        popupTitle.innerHTML = "Ви обрали пакет <span>“"+ itemName +"”</span>";
        popupDescr.style.display = 'block';
        popup.classList.add('active');
    });
});
document.querySelectorAll('.popup-open').forEach(btn => {
    btn.addEventListener('click', () =>{
        popup.classList.add('active');
        popupTitle.textContent = 'Введіть ваш номер і ми вам зателефонуємо';
        popupDescr.style.display = 'none';
    })
});
popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
});

const langName = document.querySelector('.header__lang-name');
const langBlock = document.querySelector('.header__lang');
langName.addEventListener('click', (event) => {
    langBlock.classList.toggle('active');
});
document.addEventListener('click', (event) => {
    if (!langBlock.contains(event.target)) {
        langBlock.classList.remove('active');
    }
});

const burgerBtns = document.querySelectorAll('.header__burger, .header__block-close');
const headerBlock = document.querySelector('.header__block');
const popupInner = document.querySelector('.popup__inner');
burgerBtns.forEach(element => {
    element.addEventListener('click', () => {
        headerBlock.classList.toggle('active');
    });
});
popup.addEventListener('click', (event) => {
    if (!popupInner.contains(event.target)) {
        popup.classList.remove('active');
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const sparklerLight = document.querySelector(".sparkler-light");
    for (let spark = 1; spark <= 100; spark++) {
      const sparkElement = document.createElement("div");
      sparkElement.className = `spark spark-${spark}`;
      sparkElement.style.setProperty("--spark-rotate", `${spark * 10}deg`);
      sparkElement.style.setProperty("--spark-delay", `${Math.random() * 1000}ms`);
      sparklerLight.appendChild(sparkElement);
    }
});
  