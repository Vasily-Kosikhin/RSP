function renderAuthorizationScreen() {

    const mainBlock = document.querySelector(`.app`);
    for (let elem of mainBlock.querySelectorAll(`*`)) {
        elem.remove();
    }
    
    const auBackGround = document.createElement(`div`)
    auBackGround.classList.add(`auBackGround`)

    const auContainer = document.createElement(`div`)
    auContainer.classList.add(`auContainer`)

    const auLoginHead = document.createElement(`h1`)
    auLoginHead.innerHTML = `Enter in RSP`
    auLoginHead.classList.add(`auLoginHead`)

    const auLoginContainer = document.createElement(`from`)
    auLoginContainer.classList.add(`auLoginContainer`)

    const auLoginInput = document.createElement(`input`)
    auLoginInput.classList.add(`auLoginInput`)

    const auLoginButton = document.createElement(`button`)
    auLoginButton.innerHTML = `Continue`
    auLoginButton.classList.add(`auLoginButton`)

    document.querySelector(`.app`).append(auBackGround)

    auBackGround.append(auContainer)

    auContainer.append(auLoginHead)
    auContainer.append(auLoginContainer)

    auLoginContainer.append(auLoginInput)
    auLoginContainer.append(auLoginButton)

}

window.application.screens[`authorization`] = renderAuthorizationScreen;

