(function (fn) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);    
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify/Webpack
        module.exports = fn(require('jquery'));
    } else {
        // no dependency management
        fn(jQuery);
    }
}(function ($) {    
    'use strict';        
    
    function setBreakpointAtts($el, breakpoints) {        
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
        $el.on('elementResize', function() {
            setBreakpointAtts($el, breakpoints);
            // fire callback
            if (callback && typeof(callback) === "function") {
                callback.call($el);
            }
        });
    };
}));


