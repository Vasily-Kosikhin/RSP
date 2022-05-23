function createAuthorizationBlock(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `auBackGround`, ``, ``)

    createBlock(`.auBackGround`, `div`, `auContainer`, ``, ``)

    createBlock(`.auContainer`, `h1`, `auLoginHead`, ``, `Ваше имя`)

    createBlock(`.auContainer`, `div`, `auLoginContainer`, ``, ``)

    createBlock(`.auLoginContainer`, `input`, `auLoginInput`, `auLoginInput`, ``)

    let input = document.querySelector(`#auLoginInput`)
    input.oninput = function() {
        this.value = this.value.substr(0,10)
    }
    createBlock(`.auLoginContainer`, `button`, `auLoginButton`, `auLoginButton`, `Войти`)

}
window.application.blocks[`createAuthorizationBlock`] = createAuthorizationBlock;

renderAuthorizationScreen()
// renderLobbyScreen()
// createBlock(`.auBackGround`, `div`, `emptyLose`, ``, `Победа!`)
// createBlock(`.empty`, `button`, `grBackToLobby`, ``, `Вернуться в лобби`)
// createBlock(`.auBackGround`, `div`, `ctContainerBody`, `ctContainerBody`, ``)


const auLoginInput = document.querySelector(`#auLoginInput`)
const auLoginButton = document.querySelector(`#auLoginButton`)
let inputValue;





auLoginButton.addEventListener(`click`, () => (inputValue = auLoginInput.value))
auLoginButton.addEventListener(`click`, () => (window.application.music[`main`].play()))
auLoginButton.addEventListener(`click`, () => (loginRecquest(inputValue)))



