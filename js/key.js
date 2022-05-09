import { keysEng, keysRu } from "../js/data.js";
let keys
function createKey(language) {
  if (language =='en') keys = keysEng
  else keys = keysRu
  for (let i in keys){
      let classKey = keys[i]['class'];
      let innerKey = (classKey == 'letter') ? keys[i]['inner'].toUpperCase():keys[i]['inner']
      let addKey = keys[i]['add']
      if (classKey == 'symbol'){
        keyboard.insertAdjacentHTML('beforeend',`<li class='${classKey}'> <span class="off">${innerKey}</span><span class="on">${addKey}</span></li>`)
      } else {
        keyboard.insertAdjacentHTML('beforeend',`<li class='${classKey}'> ${innerKey}</li>`)
      }
  }
}

export { createKey };
