$( document ).ready(function() {
    console.log( "ready!" );


var indexer = 0;
var animateInterval;

function animate(){
        if(indexer == 0){
            $("#background-slideshow > #img1").fadeOut(2000);
            $("#background-slideshow > #img2").fadeIn(2000);
        }
        else if(indexer == 1){
            $("#background-slideshow > #img2").fadeOut(2000);
            $("#background-slideshow > #img3").fadeIn(2000);
        }
        else if(indexer == 2){
            $("#background-slideshow > #img3").fadeOut(2000);
            $("#background-slideshow > #img4").fadeIn(2000);
        }
        else if(indexer == 3){
            $("#background-slideshow > #img4").fadeOut(2000);
            $("#background-slideshow > #img5").fadeIn(2000);
        }

        if(indexer == 3) indexer = 0;
        else indexer++;
    }

    animateInterval = setInterval(animate, 10000);
    animate();

    });