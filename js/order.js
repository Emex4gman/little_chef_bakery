const mainForm = document.getElementsByClassName("main-form")[0];
let totalPrice = 5;
let totalAmountNode = document.getElementById("total-amount");
const cakeItem = document.getElementById("CAKES");
let cakesOption = mainForm.cakes;
cakeItem.addEventListener("click", (e) => {
  if (e.target.checked === true) {
    totalPrice = totalPrice + 5;
  } else {
    totalPrice = totalPrice - 5;
  }
});
const dryCakeItem = document.getElementById("DRYCAKE");
let dryCakeOption = mainForm.dryCake;
dryCakeItem.addEventListener("click", (e) => {
  if (e.target.checked === true) {
    totalPrice = totalPrice + 5;
  } else {
    totalPrice = totalPrice - 5;
  }
});
const cupCakeItem = document.getElementById("CUPCAKES");
let cupCakeOption = mainForm.cupCake;
cupCakeItem.addEventListener("click", (e) => {
  if (e.target.checked === true) {
    totalPrice = totalPrice + 5;
  } else {
    totalPrice = totalPrice - 5;
  }
});
const chItem = document.getElementById("CHOCOLATES");
let chocolatesOption = mainForm.chocolates;
chItem.addEventListener("click", (e) => {
  if (e.target.checked === true) {
    totalPrice = totalPrice + 5;
  } else {
    totalPrice = totalPrice - 5;
  }
});
mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form is linked");
  if (mainForm.size.value === "") {
    alert("You are yet to pick an item size");
    return false;
  }

  alert(
    "Your order has been made, your order details will be sent to your email"
  );
});
const checkWhichItemWasPicked = () => {
  if (cakeItem.checked === true) {
    cakesOption.style.display = "block";
  } else {
    cakesOption.style.display = "none";
  }
  if (chItem.checked === true) {
    chocolatesOption.style.display = "block";
  } else {
    chocolatesOption.style.display = "none";
  }
  if (dryCakeItem.checked === true) {
    dryCakeOption.style.display = "block";
  } else {
    dryCakeOption.style.display = "none";
  }
  if (cupCakeItem.checked === true) {
    cupCakeOption.style.display = "block";
  } else {
    cupCakeOption.style.display = "none";
  }
  totalAmountNode.innerText = `${totalPrice}`;
};
checkWhichItemWasPicked();

document.getElementById("item").addEventListener("click", (e) => {
  checkWhichItemWasPicked();
});
