let $ = document;

////////////////////////////

// variables //////////////
const body = $.body;
const allLiElems = $.querySelectorAll("li");
const textInput = $.querySelector(".textInput");

// fucntions //////////////////
// the type action and setting animation
function typeActionAndKeyAniamtion(event) {
  // to set an animation to the pressed keys
  let userEventKey = event.key;
  let mainKeyElem = document.getElementById(userEventKey);

  mainKeyElem.classList.add("keyAnimation");

  mainKeyElem.addEventListener("animationend", function () {
    mainKeyElem.classList.remove("keyAnimation");
  });
  
  // the type action
  if (event.key === "Backspace") {
    textInput.innerHTML = textInput.innerHTML.substring(
      0,
      textInput.innerHTML.length - 1
    );
  } else if (
    event.key === "Shift" ||
    event.key === "Tab" ||
    event.key === "CapsLock" ||
    event.key === "Enter"
  ) {
    return;
  } else {
    textInput.innerHTML += event.key;
  }
}

// event liseteners //////////////
window.addEventListener("keydown", typeActionAndKeyAniamtion);
