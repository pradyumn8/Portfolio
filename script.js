const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
})

const textEl = document.getElementById('text');
const text = "I'm a Web developer!";
let idx = 1;
let speed = 300;

writeText();

function writeText() {
    textEl.innerHTML = text.slice(0, idx) + '<span id="cursor">|</span>';
    idx++;

    if (idx > text.length) {
        idx = 1;
        textEl.innerHTML = "I'm a ";
        setTimeout(() => {
            textEl.innerHTML = "I'm a Student";
            // textEl.style.color = "red"; // Change text color to red
        }, 2000); // Change the text to "I'm a developer" in red after a pause
    }

    setTimeout(writeText, speed);
}
