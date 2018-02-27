function onetothree(){
  var res;
res = Math.floor(Math.random() * 3) + 1;
document.getElementById("demo").innerHTML= res;
if(res === 3){document.getElementById("demo").innerHTML= "computer chose <span class='largefont'> ROCK";
demo.style.color = "blue";
demo.style.font = "bold 30px Georgia";
demo.style.height = "140px";
demo.style.width = "200px";
demo.style.left = "490px";
demo.style.top = "350px"
demo.style.border = "5px dashed orange";
demo.style.textAlign = "center";
demo.style.padding= "40px 10px 00px 10px";
}
if(res === 2){document.getElementById("demo").innerHTML= "computer chose <span class='largefont'> PAPER" 
demo.style.font = "bold 30px Georgia ";
demo.style.color = "blue"
demo.style.height = "140px";
demo.style.width = "200px";
demo.style.left = "490px";
demo.style.top = "350px"
demo.style.border = "5px dashed orange";
demo.style.textAlign = "center";
demo.style.padding= "40px 10px 00px 10px";}

if(res === 1){document.getElementById("demo").innerHTML= "computer <br> chose <br> <span class='largefont'> SCISSORS</span>";
demo.style.font = "bold 30px Georgia";
demo.style.color = "blue"
demo.style.height = "150px";
demo.style.width = 'auto';
demo.style.left = "490px";
demo.style.top = "350px"
demo.style.border = "5px dashed orange";
demo.style.textAlign = "center";
demo.style.padding= "40px 10px 00px 10px";}
}
