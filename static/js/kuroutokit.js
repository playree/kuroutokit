/*! KUROUTO kit 0.0.1 | https:// | (c) 2020 Kazuki Minakawa (funlab, Inc.) | MIT License */

document.addEventListener('DOMContentLoaded', () => {
    kkReady();
});

function kkReady() {
    document.addEventListener("click", (event) => {
        // Accordion.
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
    [].forEach.call(document.getElementsByClassName("kk-accordion"), (el) => {
        if(!el.hasAttribute("closed")) {
            const ac = el.nextElementSibling;
            ac.style.height = ac.scrollHeight + "px";
        }
    });
}