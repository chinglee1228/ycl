
    var swiper = new Swiper('.swiper', {
      // Install Plugin To Swiper
      autoplay: {
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      },
      //modules: [myPlugin],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Enable debugger
      debugger: true,
      
    });
