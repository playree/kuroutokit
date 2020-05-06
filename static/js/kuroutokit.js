/*! KUROUTO kit 0.0.1 | https:// | (c) 2020 Kazuki Minakawa (funlab, Inc.) | MIT License */

document.addEventListener('DOMContentLoaded', () => {
    kkReady();
});

function kkReady() {
    document.addEventListener("click", (event) => {
        console.log(event);
        if(event.target.classList.contains("kk-accordion")) {
            const ac = event.target.nextElementSibling;
            if(event.target.hasAttribute("closed")) {
                ac.style.height = ac.scrollHeight + "px";
                event.target.removeAttribute("closed");
            } else {
                ac.style.height = 0;
                event.target.setAttribute("closed", "");
            }
        }
    }, false);
}