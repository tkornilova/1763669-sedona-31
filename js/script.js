const link = document.querySelector(".button-find-hotel");
const popup = document.querySelector(".modal");
const dateIn = popup.querySelector(".modal-date-in");
const adults = popup.querySelector(".modal-adults");
const form = popup.querySelector(".booking-date");

/* Modal Show/Hide */

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  dateIn.focus();

});

/* Form Check */

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !adults.value) {
   evt.preventDefault();
   console.log("Заполните все необходимые поля");
  }
});


