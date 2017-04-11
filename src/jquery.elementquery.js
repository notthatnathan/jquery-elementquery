(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'jquery-elementresize'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify/Webpack
        module.exports = factory(require('jquery'), require('jquery-elementresize'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';

    function setBreakpointAttrs($el, breakpoints, callback) {
        // current dims of element
        var w = $el.width(),
            h = $el.height();

        // loops all breakpoints, set attrs as needed
        $.each(breakpoints, function(i, bp) {
            bp = breakupBreakpoint(bp);

            // we'll set every attr initially
            var attr = '';

            // find breakpoint matches
            if ((bp[0] === 'min-width' && w >= bp[1]) ||
                (bp[0] === 'max-width' && w <= bp[1]) ||
                (bp[0] === 'min-height' && h >= bp[1]) ||
                (bp[0] === 'max-height' && h <= bp[1])) {
                attr = bp[1] + 'px';
            }

            // set attrs on jq object
            $el.attr(bp[0], attr);
        });

        // fire callback
        if (callback && typeof(callback) === "function") {
            callback.call($el,{width: w, height: h});
        }
    }

    function breakupBreakpoint(bp) {
        // remove extra spaces
        bp = bp.replace(/ /g,'');
        // remove 'px'
        bp = bp.replace(/px/g,'');
        // split at colon
        bp = bp.split(':');

        // recast numbers as int
        bp[1] = parseInt(bp[1]);

        return bp;
    }

    $.fn.elementQuery = function(breakpoints, callback) {
        var $el = $(this);

        //fire once initially
        setBreakpointAttrs($el, breakpoints, callback);

        //then listen for changes
        $el.on('elementResize', function() {
            setBreakpointAttrs($el, breakpoints, callback);
        });
    };
}));


