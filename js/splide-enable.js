document.addEventListener( 'DOMContentLoaded', function () {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        padding: '5rem',
        heightRatio: 0.5,
    } );
    
      splide.mount();
} );