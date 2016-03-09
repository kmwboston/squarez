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
            height: 300,
            rotateSpeed: 1,
            autoRotate: false,
            rotateControls: false,
            colorFront: 'red',
            colorBack: 'red',
            colorTop: 'red',
            colorBottom: 'red',
            colorRight: 'red',
            colorLeft: 'red',
            opacity: '.8',
            perspective: 1000,
            borderWidth: 1,
            borderType: 'solid',
            borderColor: 'black'
        };

        //todo: needs auto rotate function, rotate controls, color, opacity

        //todo: needs resizing function for responsiveness

        //todo: separate function to standardize gifs/images on faces??

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


                var cubeWidth = square.settings.width;
                var cubeHeight = square.settings.height;
                var cube_wrapper = el.parent();

                $(cube_wrapper).css({
                    'width': cubeWidth,
                    'height': cubeHeight,
                    '-webkit-perspective': square.settings.perspective + 'px',
                    '-moz-perspective': square.settings.perspective + 'px',
                    'perspective': square.settings.perspective + 'px'
                });

                $(el).css({
                    '-webkit-transition': '-webkit-transform '+square.settings.rotateSpeed+'s',
                    '-moz-transition': '-moz-transform '+square.settings.rotateSpeed+'s',
                    '-o-transition': '-o-transform '+square.settings.rotateSpeed+'s',
                    'transition': 'transform '+square.settings.rotateSpeed+'s',
                    '-webkit-transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px',
                    '-moz-transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px',
                    '-ms-transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px',
                    'transform-origin':cubeHeight/2+'px '+cubeWidth/2+'px '+(0-cubeHeight/2)+'px'
                });

                $('.front').css({
                    'background-color': square.settings.colorFront,
                    'opacity': square.settings.opacity,
                    '-webkit-transform': 'translateZ(' + 0 + 'px)',
                    '-moz-transform': 'translateZ(' + 0 + 'px)',
                    'transform': 'translateZ(' + 0 + 'px)',
                    'border': square.settings.borderWidth + 'px ' + square.settings.borderType + ' ' + square.settings.borderColor
                });
                $('.back').css({
                    'background-color': square.settings.colorBack,
                    'opacity': square.settings.opacity,
                    '-webkit-transform': 'rotateY('+(0-180)+'deg) translateZ(' + cubeWidth + 'px)',
                    '-moz-transform': 'rotateY('+(0-180)+'deg) translateZ(' + cubeWidth + 'px)',
                    '-ms-transform': 'rotateY('+(0-180)+'deg) translateZ(' + cubeWidth + 'px)',
                    'transform': 'rotateY('+(0-180)+'deg) translateZ(' + cubeWidth + 'px)',
                    'border': square.settings.borderWidth + 'px ' + square.settings.borderType + ' ' + square.settings.borderColor
                });
                $('.bottom').css({
                    'background-color': square.settings.colorBottom,
                    'opacity': square.settings.opacity,
                    '-webkit-transform': 'rotateX('+(0-90)+'deg) translateZ('+(cubeWidth/2)+'px) translateY('+(cubeWidth/2)+'px)',
                    '-moz-transform': 'rotateX('+(0-90)+'deg) translateZ('+(cubeWidth/2)+'px) translateY('+(cubeWidth/2)+'px)',
                    '-ms-transform': 'rotateX('+(0-90)+'deg) translateZ(' + (cubeWidth/2) + 'px) translateY('+(cubeWidth/2)+'px)',
                    'transform': 'rotateX('+(0-90)+'deg) translateZ('+(cubeWidth/2)+'px) translateY('+(cubeWidth/2)+'px)',
                    'border': square.settings.borderWidth + 'px ' + square.settings.borderType + ' ' + square.settings.borderColor
                });
                $('.top').css({
                    'background-color': square.settings.colorTop,
                    'opacity': square.settings.opacity,
                    '-webkit-transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
                    '-moz-transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
                    '-ms-transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
                    'transform': 'rotateX('+90+'deg) translateZ(' +cubeHeight/2 + 'px) translateY('+(0-cubeHeight/2)+'px)',
                    'border': square.settings.borderWidth + 'px ' + square.settings.borderType + ' ' + square.settings.borderColor
                });
                $('.right').css({
                    'background-color': square.settings.colorRight,
                    'opacity': square.settings.opacity,
                    '-webkit-transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
                    '-moz-transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
                    '-ms-transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
                    'transform': 'rotateY('+90+'deg) translateZ(' +cubeWidth/2 + 'px) translateX('+(cubeWidth/2)+'px)',
                    'border': square.settings.borderWidth + 'px ' + square.settings.borderType + ' ' + square.settings.borderColor
                });
                $('.left').css({
                    'background-color': square.settings.colorLeft,
                    'opacity': square.settings.opacity,
                    '-webkit-transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
                    '-moz-transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
                    '-ms-transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
                    'transform': 'rotateY('+(0-90)+'deg) translateZ('+ cubeWidth/2 +'px) translateX('+(0-cubeWidth/2)+'px)',
                    'border': square.settings.borderWidth + 'px ' + square.settings.borderType + ' ' + square.settings.borderColor
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




//el.html('<div class="front" style="text-align: center;"><p>front</p></div>' +
//    '<div class="back" style="text-align: center;"><p>back</p></div>' +
//    '<div class="top" style="text-align: center;"><p>top</p></div>' +
//    '<div class="bottom" style="text-align: center;"><p>bottom</p></div>' +
//    '<div class="right" style="text-align: center;"><p>right</p></div>' +
//    '<div class="left" style="text-align: center;"><p>left</p></div>');