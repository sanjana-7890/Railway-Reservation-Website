/* These Functions are for showing popup Windows */

function openForm() {
    document.getElementById("myForm").style.display = "flex";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  function orderOpen(){
    document.getElementById("avi").style.display = "flex";
  }

  
  function orderClose(){
   document.getElementById("avi").style.display = "none";
  }
  
  function orderO(){
    document.getElementById("openO").style.display = "flex";
  }
  
  function orderC(){
   document.getElementById("openO").style.display = "none";
  }
  function oO1(){
    document.getElementById("o1").style.display = "flex";
  }
  
  function oC1(){
   document.getElementById("o1").style.display = "none";
  }
  
  function oO2(){
    document.getElementById("o2").style.display = "flex";
  }
  
  function oC2(){
   document.getElementById("o2").style.display = "none";
  }
  
  function oO3(){
    document.getElementById("o3").style.display = "flex";
  }
  
  function oC3(){
   document.getElementById("o3").style.display = "none";
  }
  
  function oO4(){
    document.getElementById("o4").style.display = "flex";
  }
  
  function oC4(){
   document.getElementById("o4").style.display = "none";
  }

  function oO5(){
    document.getElementById("o4").style.display = "flex";
  }
  
  function oC5(){
   document.getElementById("o4").style.display = "none";
  }
  
  
  function trainB(){
    document.getElementById("bookTrain").style.display = "flex";
  }
  
  function trainC(){
    document.getElementById("bookTrain").style.display = "none";
  }
  
  function h1DB(){
    document.getElementById("hBook1").style.display = "flex";
  }
  function h1DC(){
    document.getElementById("hBook1").style.display = "none";
  }
  
  function h1BB(){
    document.getElementById("hBook2").style.display = "flex";
  }
  function h1BC(){
    document.getElementById("hBook2").style.display = "none";
  }
  
  function h2DB(){
    document.getElementById("hBook3").style.display = "flex";
  }
  function h2DC(){
    document.getElementById("hBook3").style.display = "none";
  }
  
  function h2BB(){
    document.getElementById("hBook4").style.display = "flex";
  }
  function h2BC(){
    document.getElementById("hBook4").style.display = "none";
  }
  
  
  function h3DB(){
    document.getElementById("hBook5").style.display = "flex";
  }
  function h3DC(){
    document.getElementById("hBook5").style.display = "none";
  }
  
  function h3BB(){
    document.getElementById("hBook6").style.display = "flex";
  }
  function h3BC(){
    document.getElementById("hBook6").style.display = "none";
  }
  
  
  
  function h4DB(){
    document.getElementById("hBook7").style.display = "flex";
  }
  function h4DC(){
    document.getElementById("hBook7").style.display = "none";
  }
  
  function h4BB(){
    document.getElementById("hBook8").style.display = "flex";
  }
  function h4BC(){
    document.getElementById("hBook8").style.display = "none";
  }
  
  
  function h5DB(){
    document.getElementById("hBook9").style.display = "flex";
  }
  function h5DC(){
    document.getElementById("hBook9").style.display = "none";
  }
  
  function h5BB(){
    document.getElementById("hBook10").style.display = "flex";
  }
  function h5BC(){
    document.getElementById("hBook10").style.display = "none";
  }


  function h6DB(){
    document.getElementById("hBook11").style.display = "flex";
  }
  function h6DC(){
    document.getElementById("hBook11").style.display = "none";
  }
  
  function h6BB(){
    document.getElementById("hBook12").style.display = "flex";
  }
  function h6BC(){
    document.getElementById("hBook12").style.display = "none";
  }


//Reverse Time Calculator
var countDownDate = new Date("Jun 1, 2022 15:37:25").getTime();


var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);