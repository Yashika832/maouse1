var last = 0;
var score = 0;
setInterval(myInterval, 600);


function myInterval() {
  
    var image = document.createElement("img");
    image.setAttribute("src", "rat.png");
    image.setAttribute("onclick", "clicked();");
    var arr = ['a1','a2','a3','a4','a5','a6','a7','a8','a9'];

    var random = Math.floor(Math.random() * 9);
    document.getElementById(arr[last]).innerHTML = '';

    document.getElementById(arr[random]).appendChild(image);
    last=random;
}


function clicked(){
    score += 10 ;
    document.getElementById('score').innerHTML = score;
    document.getElementById('showScore').innerHTML = 'Your score is '+ score;
}


var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Finished";
    document.getElementById("result").style.display = "block";
    document.getElementById("game").style.display = "none";
    getCookie(score);
    setCookie(score);
  } else {
    document.getElementById("time").innerHTML = timeleft + " seconds remaining";
    document.getElementById('highScore').innerHTML = document.cookie;
  }
  timeleft -= 1;
}, 1000);


function menu() {
    location.replace("rat.html");
}


function getCookie(score){
  
  var highScore = document.cookie.split("=")[1];
  if(highScore==undefined)
  {
    highScore=0;
  }
  if(score > highScore){
    console.log("you set a new high score");
    document.getElementById('resultScore').innerHTML = 'Congratulation You made High Score ' +score;
  }
}


function setCookie(score) {
  
  var highScore = document.cookie.split("=")[1];
  if(highScore==undefined)
  {
    highScore=0;
  }
  if(score > highScore){
  document.cookie= 'highScore=' +score;
   }
    console.log(document.cookie);
    document.getElementById('highScore').innerHTML = document.cookie;
}
