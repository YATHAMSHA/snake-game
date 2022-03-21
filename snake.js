
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
            
            g.isset = function( prop ) {
  return typeof prop != 'undefined';
};

g.log = function() {
  if( g.isset( g.config ) && g.config.debug && window.console ){
    console.log( Array.prototype.slice.call( arguments ) );
  }
};

})();

(function(){ 'use strict';

g.Group = function() {
  this.collection = [];
  this.length = 0;
};
            
            
g.Group.prototype.add = function( item ) {
  this.collection.push( item );
  this.length++;
};

g.Group.prototype.remove = function( index ) {
  if( index < this.length ) {
    this.collection.splice( index, 1 );
    this.length--;
  }
};

g.Group.prototype.empty = function() {
  this.collection.length = 0;
  this.length = 0;
};

g.Group.prototype.each = function( action, asc ) {
  var asc = asc || 0,
    i;
  if( asc ) {
    for( i = 0; i < this.length; i++ ) {
      this.collection[ i ][ action ]( i );
    }
  } else {
    i = this.length;
    while( i-- ) {
      this.collection[ i ][ action ]( i );
    }
  }
};

})();

(function(){ 'use strict';

g.util = {};

            g.util.rand = function( min, max ) {
  return g.m.random() * ( max - min ) + min;
};

g.util.randInt = function( min, max ) {
  return g.m.floor( g.m.random() * ( max - min + 1) ) + min;
};

}());

(function(){ 'use strict';

g.states = {};

g.addState = function( state ) {
  g.states[ state.name ] = state;
};

g.setState = function( name ) {
  if( g.state ) {
    g.states[ g.state ].exit();
  }
  g.state = name;
  g.states[ g.state ].init();
};

g.currentState = function() {
  return g.states[ g.state ];
};

}());

(function(){ 'use strict';

g.Time = function() {
  this.reset();
}

g.Time.prototype.reset = function() {
  this.now = Date.now();
  this.last = Date.now();
  this.delta = 60;
  this.ndelta = 1;
  this.elapsed = 0;
  this.nelapsed = 0;
  this.tick = 0;
};

g.Time.prototype.update = function() {
  this.now = Date.now();
  this.delta = this.now - this.last;
  this.ndelta = Math.min( Math.max( this.delta / ( 1000 / 60 ), 0.0001 ), 10 );
  this.elapsed += this.delta;
  this.nelapsed += this.ndelta;
  this.last = this.now;
  this.tick++;
};

})();

(function(){ 'use strict';

g.Grid = function( cols, rows ) {
  this.cols = cols;
  this.rows = rows;
  this.tiles = [];
  for( var x = 0; x < cols; x++ ) {
    this.tiles[ x ] = [];
    for( var y = 0; y < rows; y++ ) {
      this.tiles[ x ].push( 'empty' );
    }
  }
};

g.Grid.prototype.get = function( x, y ) {
  return this.tiles[ x ][ y ];
};

g.Grid.prototype.set = function( x, y, val ) {
  this.tiles[ x ][ y ] = val;
};

})();
(function(){ 'use strict';

g.Grid = function( cols, rows ) {
  this.cols = cols;
  this.rows = rows;
  this.tiles = [];
  for( var x = 0; x < cols; x++ ) {
    this.tiles[ x ] = [];
    for( var y = 0; y < rows; y++ ) {
      this.tiles[ x ].push( 'empty' );
    }
  }
};

g.Grid.prototype.get = function( x, y ) {
  return this.tiles[ x ][ y ];
};

g.Grid.prototype.set = function( x, y, val ) {
  this.tiles[ x ][ y ] = val;
};

})();

/*================================================

Board Tile Entity

================================================*/

(function(){ 'use strict';

g.BoardTile = function( opt ) {
  this.parentState = opt.parentState;
  this.parentGroup = opt.parentGroup;
  this.col = opt.col;
  this.row = opt.row;
  this.x = opt.x;
  this.y = opt.y;
  this.z = 0;
  this.w = opt.w;
  this.h = opt.h;
  this.elem = document.createElement( 'div' );
  this.elem.style.position = 'absolute';
  this.elem.className = 'tile';
  this.parentState.stageElem.appendChild( this.elem );
  this.classes = {
    pressed: 0,
    path: 0,
    up: 0,
    down: 0,
    left: 0,
    right: 0
  }
  this.updateDimensions();
};
            
            g.BoardTile.prototype.update = function() {
  for( var k in this.classes ) {
    if( this.classes[ k ] ) {
      this.classes[ k ]--;
    }
  }

  if( this.parentState.food.tile.col == this.col || this.parentState.food.tile.row == this.row ) {
    this.classes.path = 1;
    if( this.col < this.parentState.food.tile.col ) {
      this.classes.right = 1;
    } else {
      this.classes.right = 0;
    }
    if( this.col > this.parentState.food.tile.col ) {
      this.classes.left = 1;
    } else {
      this.classes.left = 0;
    }
    if( this.row > this.parentState.food.tile.row ) {
      this.classes.up = 1;
    } else {
      this.classes.up = 0;
    }
    if( this.row < this.parentState.food.tile.row ) {
      this.classes.down = 1;
    } else {
      this.classes.down = 0;
    }
  } else {
    this.classes.path = 0;
  }

  if( this.parentState.food.eaten ) {
    this.classes.path = 0;
  }
};
            g.BoardTile.prototype.updateDimensions = function() {
  this.x = this.col * this.parentState.tileWidth;
  this.y = this.row * this.parentState.tileHeight;
  this.w = this.parentState.tileWidth - this.parentState.spacing;
  this.h = this.parentState.tileHeight - this.parentState.spacing;
  this.elem.style.left = this.x + 'px';
  this.elem.style.top = this.y + 'px';
  this.elem.style.width = this.w + 'px';
  this.elem.style.height = this.h + 'px';
};

g.BoardTile.prototype.render = function() {
  var classString = '';
  for( var k in this.classes ) {
    if( this.classes[ k ] ) {
      classString += k + ' ';
    }
  }
  this.elem.className = 'tile ' + classString;
};

})();

(function(){ 'use strict';

g.SnakeTile = function( opt ) {
  this.parentState = opt.parentState;
  this.parentGroup = opt.parentGroup;
  this.col = opt.col;
  this.row = opt.row;
  this.x = opt.x;
  this.y = opt.y;
  this.w = opt.w;
  this.h = opt.h;
  this.color = null;
  this.scale = 1;
  this.rotation = 0;
  this.blur = 0;
  this.alpha = 1;
  this.borderRadius = 0;
  this.borderRadiusAmount = 0;
  this.elem = document.createElement( 'div' );
  this.elem.style.position = 'absolute';
  this.parentState.stageElem.appendChild( this.elem );
};
            


            
