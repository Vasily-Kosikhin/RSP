function renderGameSearchScreen() {
    clearInterval(window.application.timers[`onlineTimerId`])

    for (let item of document.querySelectorAll(`.lbPlayersOnline`)) {
        item.remove()
    }
    createTipsContainer(`.lbOnlineContainer`)

    let findingTimerId = setInterval(findAnimation, 500);
    window.application.timers[`findingTimerId`] = findingTimerId
    let dotNumber = 0;
    function findAnimation() {
        if (dotNumber == 0) {
            document.querySelector(`.lbGameFindButton`).innerHTML = `Поиск соперника`
        } else {
            document.querySelector(`.lbGameFindButton`).innerHTML = `Поиск соперника${`.`.repeat(dotNumber)}`
        }
        dotNumber += 1;
        if(dotNumber == 4) {
            dotNumber = 0;
        }
    }
    // document.querySelector(`.lbFindingStatus`).innerHTML = `Finding Game...`
    document.querySelector(`.lbGameFindButton`).remove()

    createBlock(`.lbInterfaceContainer`, `button`, `lbGameFindButton`, `lbGameFindButton`, `Поиск соперника`)
    
}
window.application.blocks[`renderGameSearchScreen`] = renderGameSearchScreen;




function createTipsContainer(targetSelector) {
    
    createBlock(`${targetSelector}`, `div`, `gsTipsContainer`)
    createBlock(`.gsTipsContainer`, `span`, `gsTipTextСontainer`, ``, ``)
    createBlock(`.gsTipTextСontainer`, `span`, `gsTipText`, `gsTipText`, ``)
    createBlock(`.gsTipsContainer`, `div`, `gsNextTip`, `gsNextTip`, `➾`)

    let previousTip = randomInteger(0, 14)
    let tipText = document.querySelector(`#gsTipText`)
    tipText.innerHTML = `${window.application.tips[previousTip]}`
    
    let nextTip = document.querySelector(`#gsNextTip`)
    nextTip.style.top = document.querySelector(`.gsTipsContainer`).getBoundingClientRect().bottom - nextTip.clientHeight + `px`
    nextTip.addEventListener(`click`, showNextTip)

    
    let newTip;

    function showNextTip() {
        do {
            newTip = randomInteger(0, 14)
          } while (newTip == previousTip);
        previousTip = newTip;
        tipText.innerHTML = `${window.application.tips[newTip]}`

    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

}
window.application.blocks[`createTipsContainer`] = createTipsContainer;

// Подсказки


