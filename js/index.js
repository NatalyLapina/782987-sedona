var btn = document.querySelector(".button-search");

var popup = document.querySelector(".search-modal");

var checkin = popup.querySelector("[name=checkin]");

var form = popup.querySelector(".search-form");
var adult = popup.querySelector("[name=adult]");
var child = popup.querySelector("[name=child]");
var storageA = localStorage.getItem("adult");
var storageC = localStorage.getItem("child");

document.documentElement
    .classList.replace('no-js', 'js');
        
btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    checkin.focus();
    if (storageA || storageC) {
        adult.value = storageA;
        child.value = storageC;
    }
});      

 form.addEventListener("submit", function (evt) {
    localStorage.setItem("adult", adult.value); 
    localStorage.setItem("child", child.value); 
});