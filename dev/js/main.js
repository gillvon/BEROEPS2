$(document).ready(function() {
    // // var fontPixelSize = 225;
    // // var titleStringLength = $('.page-title').html().length;
    // // console.log(titleStringLength);

    
    // // for(var i = 0; i < titleStringLength; i++) {
    // //     fontPixelSize -= 10;
    // // }
    // // console.log(fontPixelSize);
    // // $('.page-title').css('font-size', fontPixelSize+'px');

    // var containerSize = $(window).width();
    // var titleSize   = document.getElementById('page-title').clientWidth + 1;

    // var test = $('.page-title').text();
    // var sum = 0;

    // // var testing = test.length / 2;
    // // console.log(testing);

    // // if(testing <= 2){
    // //     sum += 220;
    // // } else if(testing <= 4) {
    // //     sum += 130;
    // // } else if(testing <= 6) {
    // //     sum += 190;
    // // }


    // for(var i = 600; i > 0; i--) {
        
    //     $('.page-title').css('font-size', i+'px');
        
    //     console.log("Fontsize: " + i);

    //     titleSize   = document.getElementById('page-title').clientWidth + 1;
    //     console.log("Container: " + containerSize);
    //     console.log("TitleSize: " + (titleSize + sum));
    //     console.log("------------------------------------");
       
        
    //     if((titleSize + sum) <= containerSize ) {
    //         console.log("FINAL Container: "+ containerSize); 
    //         console.log("FINAL Title "+ (titleSize + sum));
    //         console.log("Fontsize: " + i);

           
    //         $('.page-title').css('font-size', i+'px');
    //         break;
    //     } 
        
    // }



        // titleSize = $('.page-title').width();
        // $('.page-title').css('font-size', i+'px');
        // console.log("container "+containerSize); 
        // console.log("title "+titleSize);

        // if(titleSize <= containerSize ) {    
        //     console.log("container final "+containerSize); 
        //     console.log("title final "+titleSize);
        //     console.log("fontsize "+ i);
        //     $('.page-title').css('font-size', i+'px');
        //     break;
        // } 












    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    setTimeout(function(){
        initCanvas();
    }, 100);


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
        
        context.fillText(text, 10, -20);
        
    }

    $( window ).resize(function() {
        var containerSize = $('.page-title-container').width();

        console.log(containerSize);
        initCanvas();
    });


});