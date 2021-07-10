const link = document.querySelector(".button-find-hotel");
const popup = document.querySelector(".modal");

const dateIn = popup.querySelector(".modal-date-in");
const dateOut = popup.querySelector(".modal-date-out");
const form = popup.querySelector(".booking-date");
const storage = localStorage.getItem ("dateIn");
let isStorageSupport = true;
let storage = "";

/* Modal Show */

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    dateIn.value = storage;
    dateOut.focus();
  } else {
    dateIn.focus();
  }
});

/* Modal Hide */

window.addEventListener("keydown", function(evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
})

/* Form Checking */

try {
  storage = localStorage.getItem("dateIn");
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value) {
    evt.preventDefault();
    console.log("Заполните оба поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("dateIn", dateIn.value);
    }
  }
});
