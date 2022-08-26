var pc_element = pc_element || {};
!(function (p) {
  "use strict";
  (pc_element.pc_initialize = {
    init: function () {
      pc_element.pc_initialize.swiperSlider();
    },
    swiperSlider: function () {
      p(".swiper-container").each(function () {
        var t = p(this),
          i = (p(this).attr("id"), p(this).data("perpage") || 1),
          a = p(this).data("loop"),
          e = p(this).data("speed") || 1000,
          o = p(this).data("space") || 0,
          l = p(this).data("effect"),
          c = p(this).data("center"),
          pl = p(this).data("autoplay"),
          nex = p(this).data("next"),
          pre = p(this).data("prev"),
          pag = p(this).data("pagination"),
          pagtype = p(this).data("paginationtype"),
          d = p(this).data("direction") || "horizontal",
          r = p(this).data("breakpoints");
        new Swiper(t, {
          slidesPerView: i,
          direction: d,
          spaceBetween: o,
          loop: a,
          speed: e,
          effect: l,
          breakpoints: r,
          centeredSlides: c,
          //   autoplay: {
          //     delay: 3000,
          //     disableOnInteraction: !1,
          //   },
          autoplay: pl,
          pagination: {
            el: pag,
            type: pagtype,
            clickable: !0,
          },
          navigation: {
            nextEl: nex,
            prevEl: pre,
          },
        });
      });
      $(".swiper-container").hover(
        function () {
          this.swiper.autoplay.stop();
        },
        function () {
          this.swiper.autoplay.start();
        }
      );
    },
  }),
    (pc_element.documentOnReady = {
      init: function () {
        pc_element.pc_initialize.init();
      },
    }),
    p(document).ready(pc_element.documentOnReady.init);
})(jQuery);
