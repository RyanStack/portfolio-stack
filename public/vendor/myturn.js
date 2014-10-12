$( document ).ready(function() {
});

  window.onload = function(){
    init( callback )
}

function init( callback ){

 callback()
}

function callback(){ 
  $("#flipbook").turn({
      width: 600,
      height: 380,
      autoCenter: true
  })
  $("#flipbookContainer").show();
}