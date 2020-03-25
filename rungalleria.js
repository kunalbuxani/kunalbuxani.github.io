(function () {
    Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.6.1/themes/folio/galleria.folio.min.js');
    Galleria.configure({
        maxScaleRatio: 1.2,
        height: window.innerHeight * 0.75,
        width: window.innerWidth * 0.8
    })
    Galleria.run('.galleria');
}());