

function RemAdjust(){
    let obj = document.getElementsByTagName("html")[0]
    obj.style.fontSize = document.documentElement.clientWidth / 1400*100 + 'px';

    
}

window.onload = function() {
   RemAdjust()
}

window.onresize =  function( ) {
    RemAdjust()
}



