const link = document.querySelector(".button-find-hotel");
const popup = document.querySelector(".modal");
const dateIn = popup.querySelector(".modal-date-in");
const adults = popup.querySelector(".modal-adults");
const children = popup.querySelector(".modal-children");
const form = popup.querySelector(".booking-date");
const storage = localStorage.getItem ("adults");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

/* Modal Show/Hide */

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  dateIn.focus();
  if (storage) {
    adults.value = storage;
  }
});

/* Form Check */

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !adults.value) {
   evt.preventDefault();
   console.log("Заполните все необходимые поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
    }
  }
});

