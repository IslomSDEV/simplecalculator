let btnsEl = document.querySelectorAll(".btn");
let screenEl = document.querySelector(".result-screen");
let equalBtnEl = document.querySelector(".btn-equal");
const clearBtnEl = document.querySelector(".btn-clear");

btnsEl.forEach((item) => {
  item.addEventListener("click", (e) => {
    let btnValue = e.target.dataset.num;
    screenEl.value += btnValue;
  });
});

equalBtnEl.addEventListener("click", (e) => {
  if (screenEl.value === "" || screenEl.value === undefined) {
    alert("Somthing went wrong !!!!");
  } else {
    let cc = eval(screenEl.value);
    screenEl.value = cc.toFixed(5);
  }
});

clearBtnEl.addEventListener("click", () => {
  screenEl.value = "";
});
