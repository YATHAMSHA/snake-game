
(function(){ 'use strict';


var lastTime = 0;
var vendors = [ 'webkit', 'moz' ];
for( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x ) {
  window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
  window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];
}

if( !window.requestAnimationFrame ) {
  window.requestAnimationFrame = function( callback, element ) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
    var id = window.setTimeout(
      function() { 
        callback( currTime + timeToCall ); 
      }, timeToCall );
    lastTime = currTime + timeToCall;
    return id;
  }
}

if( !window.cancelAnimationFrame ) {
  window.cancelAnimationFrame = function( id ) {
    clearTimeout( id );
  }
}

})();

(function(){ 'use strict';

function hasClass( elem, className ) {
  return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
};

function addClass( elem, className ) {
  if( !hasClass(elem, className ) ) {
    elem.className += ' ' + className;
  }
};

function removeClass( elem, className ) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
  if( hasClass( elem, className ) ) {
    while( newClass.indexOf(' ' + className + ' ' ) >= 0 ) {
      newClass = newClass.replace( ' ' + className + ' ', ' ' );
    }
    elem.className = newClass.replace( /^\s+|\s+$/g, '' );
  }
};
            
            
function toggleClass( elem, className ) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
  if( hasClass(elem, className ) ) {
    while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
      newClass = newClass.replace( ' ' + className + ' ' , ' ' );
    }
    elem.className = newClass.replace( /^\s+|\s+$/g, '' );
  } else {
    elem.className += ' ' + className;
    
    
g = {};

(function(){ 'use strict';
            
g.m = Math;
g.mathProps = 'E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min'.split( ' ' );
for ( var i = 0; i < g.mathProps.length; i++ ) {
  g[ g.mathProps[ i ] ] = g.m[ g.mathProps[ i ] ];
}
g.m.TWO_PI = g.m.PI * 2;
  }
};

})();

            
