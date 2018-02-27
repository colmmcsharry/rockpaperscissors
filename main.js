function onetothree(){

  const res = Math.floor(Math.random() * 3) + 1;
  const container = document.getElementById("demo");

  //clear container before we add new elements
  container.innerHTML = "";

  //remove the css class for prompting the user
  container.classList.remove("demo-prompt");

  //we use this paragraphs for all our conditions so we right here only once
  const p = document.createElement('p');
  p.textContent = "Computer chose";
  p.classList.add("demo-result");
  

  //Create the span the result is going into 
  const result = document.createElement('span');

  //by adding the style as a css clase we avoid duplicating our code 3 times!

  if(res === 3) { //ROCK   
    result.textContent = "rock";  
  } else if(res === 2) { //PAPER
    result.textContent = "paper";
  } else { //MUST BE SCISSOR
    result.textContent = "scissor";
  }

  //do operations after the condtions instead of inside each condition to avoid duplication
  result.classList.add("largefont");
  p.appendChild(result);

  container.appendChild(p);
}