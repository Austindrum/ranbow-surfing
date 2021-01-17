
$(window).on("load", function(){

    /* Preloader */
    $("#status").fadeOut();
    $("#preloader").delay(400).fadeOut();

    
    const isotopeContainer = $('#isotope-container').isotope({});
    $('#isotope-filters').on("click", "button", function(){
        const filterValue = $(this).attr("data-filter");
        isotopeContainer.isotope({
            filter: filterValue
        })
        $('#isotope-filters').find(".active").removeClass("active");
        $(this).addClass("active");
    })

    /* Google Map */
    const addressString = "946屏東縣恆春鎮中正路92號";
    const myLatlng = {
        lat: 22.003557, 
        lng: 120.744559
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: myLatlng
    });
    const marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To see Address"
    })
    const infoWindow = new google.maps.InfoWindow({
        content: addressString
    })
    marker.addListener("click", function(){
        infoWindow.open(map, marker)
    })

    /* Wow.js */
    $('#home-heading-1').addClass("animate__animated animate__fadeInDown");
    $('#home-heading-2').addClass("animate__animated animate__fadeInLeft");
    $('#home-text').addClass("animate__animated animate__zoomIn");
    $('#home-btn').addClass("animate__animated animate__zoomIn");
    $('#arrow-down i').addClass("animate__animated animate__fadeInDown animate__infinite infinite");
});

$(document).ready(function(){
    /* Team */
    $('#team-members').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    /* Responsive Tabs */
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    })
    /* Magnific-popup */
    $('#protfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /* Testimonial */
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    /* Stats */
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    })
    /* Navigation */
    showHideNav();
    $(window).scroll(function(){
        showHideNav()
    })
    function showHideNav() {
        if($(this).scrollTop() > 50){
            $("nav").addClass("white-nav-top");
            $("#back-to-top").fadeIn();
        }else{
            $("nav").removeClass("white-nav-top");
            $("#back-to-top").fadeOut();
        }
    }
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height", "100%");
    })
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
        $("#mobile-nav").css("height", "0%");
    })
    /* WOW.js */
    new WOW().init();
})