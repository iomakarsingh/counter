const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const myLabel = document.getElementById("myLabel");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  myLabel.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  myLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  myLabel.textContent = count;
};
