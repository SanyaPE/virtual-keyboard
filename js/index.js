import { createGrid, createTextArea, createKeyboard } from "./layout.js";
import { createKey } from "./key.js";
let lang = "en";

createGrid();
createTextArea();
createKeyboard();
createKey(lang);

let enter = document.querySelector(".enter");
enter.addEventListener('click',()=> {
    if (lang == 'en') lang = 'ru'
    else lang = 'en'
    setLocalStorage()
})

import {keysEng, keysRu} from '../js/data.js'
function getTranslate(lang){
    const keyboard = document.querySelector("#keyboard");
    if (keyboard) {
        const button = keyboard.querySelectorAll('li')
        let keys
        if (lang =='en') keys = keysEng
        else keys = keysRu
        button.forEach((elem,index) => {
            console.log(elem.getAttribute('class'));
            elem.className = keys[index]['class']
            if (elem.className=='symbol'){
                elem.innerHTML = `<span class="off">${keys[index]['inner']}</span><span class="on">${keys[index]['add']}</span>`
            } else {
                elem.innerHTML = (`${keys[index]['inner']}`.length == 1)? `${keys[index]['inner']}`.toUpperCase():`${keys[index]['inner']}`
            }





        });
    }
    else {
        console.log('не существует');

    }
    // const keyboard = document.querySelector(".keyboard")
    // const button = keyboard.querySelectorAll("li")
}

//!local storage
function setLocalStorage() {
    localStorage.setItem('lang', lang);
    getTranslate(lang);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      getTranslate(lang);
    }
  }
  window.addEventListener('load', getLocalStorage)
