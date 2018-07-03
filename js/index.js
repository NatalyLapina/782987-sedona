var btn = document.querySelector(".button-search");

var popup = document.querySelector(".search-modal");

var checkin = popup.querySelector("[name=checkin]");

document.documentElement
    .classList.remove("no-js");
        
btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    checkin.focus();
});      