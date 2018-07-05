$(document).ready(function() {

    var canvas = document.getElementById("page-title");
    var context = canvas.getContext("2d");

    setTimeout(function(){
        initCanvas();
    }, 1000);


    function fitTextOnCanvas(text, fontface) {

        // start with a large font size
        var fontsize = 1024;

        // lower the font size until the text fits the canvas
        do {
            fontsize--;
            context.font = fontsize + "px " + fontface;
        } while (context.measureText(text).width > canvas.height - 20)
        return fontsize;
    }
    function initCanvas(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; //document.height is obsolete
        // canvasW = canvas.width;
        // canvasH = canvas.height;
        context.rotate(90 * Math.PI / 180);
        
        var text = $('.page-title').text();
        fitTextOnCanvas(text, "DoctorGlitch");
        
        // draw the text
        var xPos = (text.length > 12) ? -text.length : -text.length - 10;
        context.fillStyle = 'rgb(45, 45, 45)';
        // context.fillStyle = 'white';
        
        context.fillText(text, 10, -30);
        
    }

    $( window ).resize(function() {
        var containerSize = $('.page-title-container').width();

        console.log(containerSize);
        initCanvas();
    });














    // Tabs
    $('.project-detail nav ul li').on('click', function(){
        var index = $(this).index() + 1;

        $('.project-detail-show div').removeClass('active');

        $('.project-detail-show div:nth-child(' + index +')').addClass('active');

    });


});