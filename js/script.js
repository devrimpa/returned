// logo auto slider
if ($(".slide").length) {
    new Splide('.slide', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
         perPage: 13,
        pagination: false,
        arrows: false,
        direction: 'ltr', // rtl
        autoWidth: true,
        autoScroll: {
            speed: 1.2,

        },
        //   breakpoints: {
        //     //1200: { arrows: false },
        //     991: { perPage: 5 },
        //     479: { destroy: true, perPage: 2 },
        //   },
    }).mount(window.splide.Extensions);
}