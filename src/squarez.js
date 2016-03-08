/**
 * Created by Tigjer on 2/3/16.
 */

var a = ($(".cube-wrapper").outerWidth());
var b = ($(".cube-wrapper").outerHeight());

console.log(a);
console.log(b);

$('#cube').css({
    '-webkit-transform-origin':b/2+'px '+a/2+'px '+(0-b/2)+'px',
    '-moz-transform-origin':b/2+'px '+a/2+'px '+(0-b/2)+'px',
    '-ms-transform-origin':b/2+'px '+a/2+'px '+(0-b/2)+'px',
    'transform-origin':b/2+'px '+a/2+'px '+(0-b/2)+'px'
});

//
$('.front').css({
    '-webkit-transform': 'translateZ(' + 0 + 'px)',
    '-moz-transform': 'translateZ(' + 0 + 'px)',
    'transform': 'translateZ(' + 0 + 'px)',
    'border':'1px solid black'
});
$('.back').css({
    '-webkit-transform': 'rotateY('+(0-180)+'deg) translateZ(' + a + 'px)',
    '-moz-transform': 'rotateY('+(0-180)+'deg) translateZ(' + a + 'px)',
    '-ms-transform': 'rotateY('+(0-180)+'deg) translateZ(' + a + 'px)',
    'transform': 'rotateY('+(0-180)+'deg) translateZ(' + a + 'px)',
    'border':'1px solid black'
});
$('.bottom').css({
    '-webkit-transform': 'rotateX('+(0-90)+'deg) translateZ('+(a/2)+'px) translateY('+(a/2)+'px)',
    '-moz-transform': 'rotateX('+(0-90)+'deg) translateZ('+(a/2)+'px) translateY('+(a/2)+'px)',
    '-ms-transform': 'rotateX('+(0-90)+'deg) translateZ(' + (a/2) + 'px) translateY('+(a/2)+'px)',
    'transform': 'rotateX('+(0-90)+'deg) translateZ('+(a/2)+'px) translateY('+(a/2)+'px)',
    'border':'1px solid black'
});
$('.top').css({
    '-webkit-transform': 'rotateX('+90+'deg) translateZ(' +b/2 + 'px) translateY('+(0-b/2)+'px)',
    '-moz-transform': 'rotateX('+90+'deg) translateZ(' +b/2 + 'px) translateY('+(0-b/2)+'px)',
    '-ms-transform': 'rotateX('+90+'deg) translateZ(' +b/2 + 'px) translateY('+(0-b/2)+'px)',
    'transform': 'rotateX('+90+'deg) translateZ(' +b/2 + 'px) translateY('+(0-b/2)+'px)',
    'border':'1px solid black'
});
$('.right').css({
    '-webkit-transform': 'rotateY('+90+'deg) translateZ(' +a/2 + 'px) translateX('+(a/2)+'px)',
    '-moz-transform': 'rotateY('+90+'deg) translateZ(' +a/2 + 'px) translateX('+(a/2)+'px)',
    '-ms-transform': 'rotateY('+90+'deg) translateZ(' +a/2 + 'px) translateX('+(a/2)+'px)',
    'transform': 'rotateY('+90+'deg) translateZ(' +a/2 + 'px) translateX('+(a/2)+'px)',
    'border':'1px solid black'
});
$('.left').css({
    '-webkit-transform': 'rotateY('+(0-90)+'deg) translateZ('+ a/2 +'px) translateX('+(0-a/2)+'px)',
    '-moz-transform': 'rotateY('+(0-90)+'deg) translateZ('+ a/2 +'px) translateX('+(0-a/2)+'px)',
    '-ms-transform': 'rotateY('+(0-90)+'deg) translateZ('+ a/2 +'px) translateX('+(0-a/2)+'px)',
    'transform': 'rotateY('+(0-90)+'deg) translateZ('+ a/2 +'px) translateX('+(0-a/2)+'px)',
    'border':'1px solid black'
});


var ilr = 0;
$('.rotate-button-lr').click(function() {
    ilr++;
    var degrees = ilr * -90;
    var rotation = 'rotateY('+degrees+'deg)';

    $('#cube').css({
        '-webkit-transform': rotation,
        '-moz-transform': rotation,
        '-ms-transform': rotation
    })
});

var itb = 0;
$('.rotate-button-tb').click(function() {
    itb++;
    var degrees = itb * -90;
    var rotation = 'rotateX('+degrees+'deg)';

    $('#cube').css({
        '-webkit-transform': rotation,
        '-moz-transform': rotation,
        '-ms-transform': rotation
    })
});


//(function($){
//    'use strict';
//    function define_Library(){
//        var Library = {};
//        var defaults = {
//            color:
//        };
//        var name = "Timmy";
//        Library.greet = function(){
//            alert("Hello from the " + name + " library.");
//        }
//        return Library;
//    }
//    //define globally if it doesn't already exist
//    if(typeof(Library) === 'undefined'){
//        window.Library = define_Library();
//        console.log("It worked!")
//    }
//    else{
//        console.log("Library already defined.");
//    }
//})(jQuery);