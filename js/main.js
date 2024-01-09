var yearSpan = document.querySelector('#current-year');
var navlinks = document.getElementById("navlinks");

let currentYear = new Date();
yearSpan.innerHTML = currentYear.getFullYear();


const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});


function showMenu(){
    navlinks.style.right = "0";
}
function hideMenu(){
    navlinks.style.right = "-100%";
}