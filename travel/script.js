$(document).ready(function(){
    setInterval(function(){
        $('#one').fadeTo(1000, 1.0).delay(1000).fadeTo(1000, 0.1).delay(6000);
        $('#two').delay(3000).fadeTo(1000, 1.0).delay(1000).fadeTo(1000, 0.1).delay(3000);
        $('#three').delay(6000).fadeTo(1000, 1.0).delay(1000).fadeTo(1000, 0.1);
    });
});
