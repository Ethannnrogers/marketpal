//Particles

$(document).ready(function() {

    console.log("hello world");
    Particles.init({
        selector: '.particles',
        sizeVariations: 4,
        speed: .4,
        maxParticles: 150,
        color: ['rgba(236, 236, 236, 0.55)'],
        connectParticles: false,
        minDistance: 100,
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 70,
                    connectParticles: false
                }
						}
				]
    });
});



var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid rgba(255, 255, 255, 0.4)}";
    document.body.appendChild(css);
};



// Check in viewport
//Section-2
$(window).scroll(function() {
    var top_of_element = $("#effect-1").offset().top;
    var bottom_of_element = $("#section-1-3").offset().top + $("#effect-1").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        console.log("in view");
        $(".slide-in-effect").addClass("slide-in-blurred-top");
    } else {
        console.log("not in view");
        $(".slide-in-effect").removeClass("slide-in-blurred-top");
        
    }
});

//section-3
$(window).scroll(function() {
    var top_of_element = $("#robot").offset().top;
    var bottom_of_element = $("#section-2-2").offset().top + $("#robot").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    $.wait = function( callback, seconds){
        return window.setTimeout( callback, seconds * 100 );
     }

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        console.log("in view");
        $.wait( function(){
             $("#robot").addClass("scale-up-center");
             $("#join-over").addClass("fade-in-right");
            }, 1);
        
    } else {
        console.log("not in view");
        $("#robot").removeClass("scale-up-center");
        $("#join-over").removeClass("fade-in-right");
    }
});


//section-2-2
$(window).scroll(function() {
    var top_of_element = $("#section-2-2").offset().top;
    var bottom_of_element = $("#section-3-1").offset().top + $("#section-2-2").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    $.wait = function( callback, seconds){
        return window.setTimeout( callback, seconds * 100 );
     }

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        console.log("in view");
        $.wait( function(){
            $("#section-h3").addClass("focus-in-expand");
            }, 0);
            $.wait( function(){
                $("#brand-1").addClass("fade-in-top");
                }, 1);
                $.wait( function(){
                    $("#brand-2").addClass("fade-in-top");
                    }, 1.5);
                    $.wait( function(){
                        $("#brand-3").addClass("fade-in-top");
                        }, 2);
                        $.wait( function(){
                            $("#brand-4").addClass("fade-in-top");
                            }, 2.5);
        
    } else {
        console.log("not in view");
        $("#section-h3").removeClass("focus-in-expand");
        $("#brand-1").removeClass("fade-in-top");
        $("#brand-2").removeClass("fade-in-top");
        $("#brand-3").removeClass("fade-in-top");
        $("#brand-4").removeClass("fade-in-top");
    ;
    }
});



//section-3-1
$(window).scroll(function() {
    var top_of_element = $("#section-3-1").offset().top;
    var bottom_of_element = $("#section-3").offset().top + $("#section-3-1").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    $.wait = function( callback, seconds){
        return window.setTimeout( callback, seconds * 100 );
     }

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        console.log("in view");
        $.wait( function(){
             $("#3-text").addClass("fade-in-left");
             $("#dash").addClass("fade-in-fwd");
            }, 1.5);
        
    } else {
        console.log("not in view");
        $("#3-text").removeClass("fade-in-left");
        $("#dash").removeClass("fade-in-fwd");
        
    }
});


//section-3
$(window).scroll(function() {
    var top_of_element = $("#price-boxes").offset().top;
    var bottom_of_element = $("#footer-top").offset().top + $("#price-boxes").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    $.wait = function( callback, seconds){
        return window.setTimeout( callback, seconds * 100 );
     }

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        console.log("in view");
        $.wait( function(){
             $(".pricing-box").addClass("flip-in-hor-bottom");
            }, 1);
        
    } else {
        console.log("not in view");
        $(".pricing-box").removeClass("flip-in-hor-bottom");
        
    }
});