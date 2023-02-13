const yes = document.querySelector(".yes");
const body = document.querySelector("body");

yes.addEventListener("mouseover", () => {
  body.style.backgroundColor = "pink";
});
yes.addEventListener("mouseout", () => {
  body.style.backgroundColor = "#0b1522";
});
