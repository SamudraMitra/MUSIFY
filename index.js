var numberofbtns=document.querySelectorAll(".btn").length;
for(var i=0;i<numberofbtns;i++)
{
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    var HTMLkey=this.innerHTML;
    makeSound(HTMLkey);
  });
}
function makeSound(key)
{
    switch (key) {
      case "SHIVERS":
      var E0 = new Audio('songs/shivers.mp3');
      E0.play();
      break;
      case "CLOSER":
      var F0= new Audio('songs/closer.mp3');
      F0.play();
      break;
      case "DESPACITO":
      var F0= new Audio('songs/despacito.mp3');
      F0.play();
      break;
      case "BEGGIN'":
      var F0= new Audio('songs/beggin.mp3');
      F0.play();
      break;
      case "I WANNA BE YOUR SLAVE":
      var F0= new Audio('songs/iwbys.mp3');
      F0.play();
      break;
      case "WELLERMAN":
      var F0= new Audio('songs/wellerman.mp3');
      F0.play();
      break;
      case "LEVITATING":
      var F0= new Audio('songs/levitating.mp3');
      F0.play();
      break;
      default:

    }
}
