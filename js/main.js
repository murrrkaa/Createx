$(function () {
  var mixer = mixitup(".directions__list");

  $(".directions__filter-btn").on("click", function () {
    $(".directions__filter-btn").removeClass("directions__filter-btn--active");
    $(this).addClass("directions__filter-btn--active");
  });

  $(".team__slider").slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".team__slider-prev").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickPrev");
  });
  $(".team__slider-next").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickNext");
  });

  $(".testimonials__slider").slick({
    arrows: false,
    dots: true,
    appendDots: $(".testimonials__dots"),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".testimonials__prev").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickPrev");
  });
  $(".testimonials__next").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickNext");
  });

  $(".program__acc-link").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("program__acc-link--active")) {
      $(this).removeClass("program__acc-link--active");
      $(this).children(".program__acc-text").slideUp();
    } else {
      $(".program__acc-link").removeClass("program__acc-link--active");
      $(".program__acc-text").slideUp();
      $(this).addClass("program__acc-link--active");
      $(this).children(".program__acc-text").slideDown();
    }
  });

  $(".burger, .overlay, .header__top-inner").on("click", function (e) {
    e.preventDefault();
    $(".header__top").toggleClass("header__top--open");
    $(".overlay").toggleClass("overlay--show");
  });

  $(window).on("scroll", function () {
    setInterval(() => {
      if (
        $(window).scrollTop() > 0 &&
        $(".header__top").hasClass("header__top--open") == false
      ) {
        $(".burger").addClass("burger--follow");
      } else {
        $(".burger").removeClass("burger--follow");
      }
    }, 0);
  });
  $(".footer__top-title--slide").on("click", function () {
    $(this).next().slideToggle();
  });
});
