const BODY = document.querySelector(".body")
function createGrid(){
    BODY.insertAdjacentHTML('afterbegin', '<header></header><main></main><footer></footer>')
    let header = document.querySelector('header')
    let main = document.querySelector('main')
    let footer = document.querySelector('footer')
    header.className = 'header'
    main.className = 'main'
    footer.className = 'footer'

    header.insertAdjacentHTML('afterbegin','<div class="container"><h1 class="title">virtual keyboard</h1></div>')

    main.insertAdjacentHTML('afterbegin','<div class="container main__container"></div>')

    footer.insertAdjacentHTML('afterbegin',
    '<div class="container"><div class="footer__copy">&copy;</div><div class="footer__year">2022</div></div>')
    let footerYear = document.querySelector('.footer__year')
    footerYear.insertAdjacentHTML('afterend', '<div class="footer__rss"><a href="https://rs.school/js/" class="link" target="_blank"></a></div>')
    footerYear.insertAdjacentHTML('afterend', '<a href="https://github.com/SanyaPE" class="footer__github" target="_blank" >github</a>')
}

function createTextArea() {
    const mainContainer = document.querySelector(".main__container")
    console.log(mainContainer);
    mainContainer.insertAdjacentHTML(
      "afterbegin",
      '<textarea id="write" rows="6" cols="60"></textarea>'
    );
  }
  function createKeyboard(){
    const mainContainer = document.querySelector(".main__container")
    mainContainer.insertAdjacentHTML("beforeend", '<ul id="keyboard"></ul>');
  }

export { createGrid, createTextArea, createKeyboard }
