let inputElement = document.getElementById("text-input");
let labelElement = document.getElementById("save-label");
let textElement = document.getElementById("text");

let lastTime = Date.now();
let isSaved = true;
let stopTimer = null;

function clearingTimeout(timer) {
  clearTimeout(timer);
  timer = null;
}

function savingText(time, stopTimer) {
  let diff = time - lastTime;

  if (diff >= 10000) {
    clearingTimeout(stopTimer);

    labelElement.textContent = "saved...";
    lastTime = time;
    isSaved = true;

    return;
  }

  clearingTimeout(stopTimer);

  labelElement.textContent = "unsaved text ...";
}

inputElement.oninput = function (e) {
  isSaved = false;
  textElement.textContent = e.target.value;
  savingText(Date.now(), stopTimer);

  if (!isSaved) {
    stopTimer = setTimeout(() => {
      console.log("in setTimeout", stopTimer);
      labelElement.textContent = "saved...";
      lastTime = Date.now();
      isSaved = true;

      clearingTimeout(stopTimer);
    }, 10000);
  }
};
