/*! KUROUTO kit 0.0.1 | https:// | (c) 2020 Kazuki Minakawa (funlab, Inc.) | MIT License */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('kuroutokit', factory) :
    (global = global || self, global.KuroutoKit = factory());
}(this, (function () { 'use strict';
    document.addEventListener('DOMContentLoaded', () => {
        loaded();
    });

    function loaded() {
        document.addEventListener('click', (event) => {
            // Accordion.
            if(event.target.classList.contains('kk-accordion')) {
                const ac = event.target.nextElementSibling;
                if(event.target.hasAttribute('closed')) {
                    ac.style.height = ac.scrollHeight + 'px';
                    event.target.removeAttribute('closed');
                } else {
                    ac.style.height = 0;
                    event.target.setAttribute('closed', '');
                }
            }
        }, false);
        [].forEach.call(document.getElementsByClassName('kk-accordion'), (el) => {
            if(!el.hasAttribute('closed')) {
                const ac = el.nextElementSibling;
                ac.style.height = ac.scrollHeight + 'px';
            }
        });

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
})));