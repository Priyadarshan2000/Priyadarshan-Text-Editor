
function updateText() {
    
    let text = document.getElementById("text-input").value;
    let output = document.getElementById("text-output");
    output.innerText = text;
  }
  
  
  function makeBold(elem) {
    
    elem.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("bold");
  }
  
 
  function makeItalic(elem) {
    elem.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("italic");
  }
  
  
  function makeUnderline(elem) {
    
    elem.classList.toggle("active");
    let className = document.getElementById("text-output").classList.value;
  
    if (className.includes("underline")) {
      document.getElementById("text-output").classList.remove("underline");
    } else {
      document.getElementById("text-output").classList.add("underline");
    }
  }
  
  
  function alignText(elem, alignType){
    document.getElementById('text-output').style.textAlign = alignType;
    let alignButtons = document.getElementsByClassName('align');
    for(let i = 0; i < alignButtons.length; i++ ){
      alignButtons[i].classList.remove('active');
    }
    elem.classList.toggle('active');
  }

  function fontSize(elem, fontSize) {
    document.getElementById("text-output").style.fontSize = fontSize;
  
    let buttonsList = document.getElementsByClassName("font");
    for (i = 0; i < buttonsList.length; i++) {
      buttonsList[i].classList.remove("active");
    }
    elem.classList.add("active");
  }
  
  function addColour(elem, colourType) {
    document.getElementById("text-output").style.color = colourType;
  
    let buttonsList = document.getElementsByClassName("colour");
    for (i = 0; i < buttonsList.length; i++) {
      buttonsList[i].classList.remove("active");
    }
    elem.classList.add("active");
  }