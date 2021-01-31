/*! KUROUTO kit 0.0.1 | https://playree.github.io/kuroutokit/ | (c) 2020 Kazuki Minakawa (funlab, Inc.) | MIT License */

(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
    typeof define === "function" && define.amd ? define("kuroutokit", factory) :
    (global = global || self, global.KuroutoKit = factory());
}(this, (function () { "use strict";
    document.addEventListener("DOMContentLoaded", () => {
        loaded();
    });

    function loaded() {
        KuroutoKit.initInput();
        KuroutoKit.initAccordion();
        KuroutoKit.initMovableLabel();
    }
})));

let kk_initAccordion = false;
let kk_initInput = false;
let kk_initMovableLabel = false;
let kk_initEnableWithCheck = false;

class KuroutoKit {
    static initAccordion() {
        if(kk_initAccordion) return;
        kk_initAccordion = true;

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

    static initInput() {
        if(kk_initInput) return;
        kk_initInput = true;

        [].forEach.call(document.getElementsByTagName("INPUT"), (el) => {
            if(el.hasAttribute("invalid")) {
                el.addEventListener("focus", (event) => {
                    el.removeAttribute("invalid")
                }, {once:true});
            }
        });
        [].forEach.call(document.getElementsByTagName("TEXTAREA"), (el) => {
            if(el.hasAttribute("invalid")) {
                el.addEventListener("focus", (event) => {
                    el.removeAttribute("invalid")
                }, {once:true});
            }
        });
    }

    static initMovableLabel() {
        if(kk_initMovableLabel) return;
        kk_initMovableLabel = true;

        document.addEventListener("change", (event) => {
            if(event.target.tagName == "INPUT" || event.target.tagName == "TEXTAREA") {
                if(event.target.parentElement.classList.contains("kk-input-field")) {
                    if(event.target.value == "") {
                        event.target.removeAttribute("kk-active");
                    } else {
                        event.target.setAttribute("kk-active", "");
                    }
                }
            }
        }, false);
        [].forEach.call(document.getElementsByTagName("INPUT"), (el) => {
            if(el.parentElement.classList.contains("kk-input-field")) {
                if(el.value != "") {
                    el.setAttribute("kk-active", "");
                }
            }
        });
        [].forEach.call(document.getElementsByTagName("TEXTAREA"), (el) => {
            if(el.parentElement.classList.contains("kk-input-field")) {
                if(el.value != "") {
                    el.setAttribute("kk-active", "");
                }
            }
        });
    }

    static initEnableWithCheck() {
        if(kk_initEnableWithCheck) return;
        kk_initEnableWithCheck = true;

        document.addEventListener("change", (event) => {
            if(event.target.tagName == "INPUT") {
                if(event.target.classList.contains("kk-enable-with-check")) {
                    const targets = event.target.getAttribute("target").split(",");
                    [].forEach.call(targets, (target) => {
                        if(event.target.checked) {
                            document.getElementById(target.trim()).removeAttribute("disabled");
                        } else {
                            document.getElementById(target.trim()).setAttribute("disabled", "");
                        }
                    });
                } else if(event.target.classList.contains("kk-disable-with-check")) {
                    const targets = event.target.getAttribute("target").split(",");
                    [].forEach.call(targets, (target) => {
                        if(event.target.checked) {
                            document.getElementById(target.trim()).setAttribute("disabled", "");
                        } else {
                            document.getElementById(target.trim()).removeAttribute("disabled");
                        }
                    });
                }
            }
        }, false);
        [].forEach.call(document.getElementsByTagName("INPUT"), (el) => {
            if(el.classList.contains("kk-enable-with-check")) {
                if(el.hasAttribute("target")) {
                    const targets = el.getAttribute("target").split(",");
                    [].forEach.call(targets, (target) => {
                        if(el.checked) {
                            document.getElementById(target.trim()).removeAttribute("disabled");
                        } else {
                            document.getElementById(target.trim()).setAttribute("disabled", "");
                        }
                    });
                }
            } else if(el.classList.contains("kk-disable-with-check")) {
                if(el.hasAttribute("target")) {
                    const targets = el.getAttribute("target").split(",");
                    [].forEach.call(targets, (target) => {
                        if(el.checked) {
                            document.getElementById(target.trim()).setAttribute("disabled", "");
                        } else {
                            document.getElementById(target.trim()).removeAttribute("disabled");
                        }
                    });
                }
            }
        });
    }
}