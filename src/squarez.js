/**
 * Created by Tigjer on 2/3/16.
 */

//lets get an initialize function going!!!


(function($){
    'use strict';
    function define_Library(){
        var Squarez = {
            name: 'squarezzz'
        };
        var defaults = {
            width: 300,
            height: 300
        };

        $.fn.squarez = function(options){
            //initialize namespace var
            var square = {};
            var el = this;
            //var names = "timmy";

            var init = function () {
                //initialize the plugin
                square.settings = $.extend({}, defaults, options);
                setup();
            };

            var setup = function () {
                //dom manipulations
                el.wrap('<div class="cube-wrapper"></div>');
                el.html('<div class="front" style="text-align: center;"><p>front</p></div>' +
                    '<div class="back" style="text-align: center;"><p>back</p></div>' +
                    '<div class="top" style="text-align: center;"><p>top</p></div>' +
                    '<div class="bottom" style="text-align: center;"><p>bottom</p></div>' +
                    '<div class="right" style="text-align: center;"><p>right</p></div>' +
                    '<div class="left" style="text-align: center;"><p>left</p></div>');

                var cubeWidth = square.settings.width;
                var cubeHeight = square.settings.height;
                var cube_wrapper = el.parent();

                $(cube_wrapper).css({
                    'width': cubeWidth,
                    'height': cubeHeight
                })

                $(el).css({
                    '-webkit-transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px',
                    '-moz-transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px',
                    '-ms-transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px',
                    'transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px'
                });

                $('.front').css({
                    '-webkit-transform': 'translateZ(' + 0 + 'px)',
                    '-moz-transform': 'translateZ(' + 0 + 'px)',
                    'transform': 'translateZ(' + 0 + 'px)',
                    'border':'1px solid black'
                });
                $('.back').css({
                    '-webkit-transform': 'rotateY('+(0-180)+'deg) translateZ(' + cubeWidth + 'px)',
                    '-moz-transform': 'rotateY('+(0-180)+'deg) translateZ(' + cubeWidth + 'px)',
                    '-ms-transform': 'rotateY('+(0-180)+'deg) translateZ(' + cubeWidth + 'px)',
                    'transform': 'rotateY('+(0-180)+'deg) translateZ(' + cubeWidth + 'px)',
                    'border':'1px solid black'
                });
                $('.bottom').css({
                    '-webkit-transform': 'rotateX('+(0-90)+'deg) translateZ('+(cubeWidth/2)+'px) translateY('+(cubeWidth/2)+'px)',
                    '-moz-transform': 'rotateX('+(0-90)+'deg) translateZ('+(cubeWidth/2)+'px) translateY('+(cubeWidth/2)+'px)',
                    '-ms-transform': 'rotateX('+(0-90)+'deg) translateZ(' + (cubeWidth/2) + 'px) translateY('+(cubeWidth/2)+'px)',
                    'transform': 'rotateX('+(0-90)+'deg) translateZ('+(cubeWidth/2)+'px) translateY('+(cubeWidth/2)+'px)',
                    'border':'1px solid black'
                });
                $('.top').css({
                    '-webkit-transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
                    '-moz-transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
                    '-ms-transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
                    'transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
                    'border':'1px solid black'
                });
                $('.right').css({
                    '-webkit-transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
                    '-moz-transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
                    '-ms-transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
                    'transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
                    'border':'1px solid black'
                });
                $('.left').css({
                    '-webkit-transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
                    '-moz-transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
                    '-ms-transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
                    'transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
                    'border':'1px solid black'
                });

            };

            init();
        };

        return Squarez;
    }
    //define globally if it doesn't already exist
    if(typeof(Squarez) === 'undefined'){
        window.Squarez = define_Library();
        console.log("It worked!, the library name is "+Squarez.name)
    }
    else{
        console.log("Squarez already defined.");
    }
})(jQuery);









//var a = ($(".cube-wrapper").outerWidth());
//var b = ($(".cube-wrapper").outerHeight());
//
//$('#cube').css({
//    '-webkit-transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px',
//    '-moz-transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px',
//    '-ms-transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px',
//    'transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px'
//});
//
//$('.front').css({
//    '-webkit-transform': 'translateZ(' + 0 + 'px)',
//    '-moz-transform': 'translateZ(' + 0 + 'px)',
//    'transform': 'translateZ(' + 0 + 'px)',
//    'border':'1px solid black'
//});
//$('.back').css({
//    '-webkit-transform': 'rotateY('+(0-180)+'deg) translateZ(' + a + 'px)',
//    '-moz-transform': 'rotateY('+(0-180)+'deg) translateZ(' + a + 'px)',
//    '-ms-transform': 'rotateY('+(0-180)+'deg) translateZ(' + a + 'px)',
//    'transform': 'rotateY('+(0-180)+'deg) translateZ(' + a + 'px)',
//    'border':'1px solid black'
//});
//$('.bottom').css({
//    '-webkit-transform': 'rotateX('+(0-90)+'deg) translateZ('+(cubeWidth/2)+'px) translateY('+(cubeWidth/2)+'px)',
//    '-moz-transform': 'rotateX('+(0-90)+'deg) translateZ('+(cubeWidth/2)+'px) translateY('+(cubeWidth/2)+'px)',
//    '-ms-transform': 'rotateX('+(0-90)+'deg) translateZ(' + (cubeWidth/2) + 'px) translateY('+(cubeWidth/2)+'px)',
//    'transform': 'rotateX('+(0-90)+'deg) translateZ('+(cubeWidth/2)+'px) translateY('+(cubeWidth/2)+'px)',
//    'border':'1px solid black'
//});
//$('.top').css({
//    '-webkit-transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
//    '-moz-transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
//    '-ms-transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
//    'transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
//    'border':'1px solid black'
//});
//$('.right').css({
//    '-webkit-transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
//    '-moz-transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
//    '-ms-transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
//    'transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
//    'border':'1px solid black'
//});
//$('.left').css({
//    '-webkit-transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
//    '-moz-transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
//    '-ms-transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
//    'transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
//    'border':'1px solid black'
//});
//
//
//var ilr = 0;
//$('.rotate-button-lr').click(function() {
//    ilr++;
//    var degrees = ilr * -90;
//    var rotation = 'rotateY('+degrees+'deg)';
//
//    $('#cube').css({
//        '-webkit-transform': rotation,
//        '-moz-transform': rotation,
//        '-ms-transform': rotation
//    })
//});
//
//var itb = 0;
//$('.rotate-button-tb').click(function() {
//    itb++;
//    var degrees = itb * -90;
//    var rotation = 'rotateX('+degrees+'deg)';
//
//    $('#cube').css({
//        '-webkit-transform': rotation,
//        '-moz-transform': rotation,
//        '-ms-transform': rotation
//    })
//});