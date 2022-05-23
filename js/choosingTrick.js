




function createCTContainerHead(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `ctContainerHead`, ``, ``)
    createMiniEnemyIcon(`.ctContainerHead`)
    createBlock(`.ctContainerHead`, `div`, `ctHealthBar`, ``, ``)

}
window.application.blocks[`createCTContainerHead`] = createCTContainerHead;

function createMiniEnemyIcon(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `lbPlayerListPlayerMiniContainer`, `containerEnemy`)
    
    createBlock(`#containerEnemy`, `div`, `lbPlayerAvatarContainerMini`, `avatarEnemy`)
    createBlockWithSrc(`#avatarEnemy`, `img`, `lbAvatarImgMini`, ``, ``, `./imges/peasant.png`)
    
    createBlock(`#containerEnemy`, `div`, `lbPlayerNameContainerMini`, `nameEnemy`)
    createBlock(`#nameEnemy`, `div`, `lbEnemyNameMini`, ``, `${window.application.currentEnemyPlayer[`login`]}`)
    createBlock(`#nameEnemy`, `div`, `lbEnemyTitleMini`, ``, `Рабочий`)
    
    }
    window.application.blocks[`createMiniEnemyIcon`] = createMiniEnemyIcon;

function createCTContainerBody(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `ctContainerBody`, `ctContainerBody`, ``)

    createBlock(`.ctContainerBody`, `div`, `ctRockContainer`, ``, ``)
    createBlockWithSrc(`.ctRockContainer`, `div`, `ctRock`, ``, ``, ``)

    createBlock(`.ctContainerBody`, `div`, `ctScissorsContainer`, ``, ``)
    createBlockWithSrc(`.ctScissorsContainer`, `div`, `ctScrissors`, ``, ``, ``)

    createBlock(`.ctContainerBody`, `div`, `ctPaperContainer`, ``, ``)
    createBlockWithSrc(`.ctPaperContainer`, `div`, `ctPaper`, ``, ``, ``)
    
    const ctContainerBody = document.querySelector(`#ctContainerBody`)
    ctContainerBody.addEventListener(`click`, chosenTrick)

    async function chosenTrick() {
        console.log(event.target.className)
        if (event.target.className == `ctRock`) {
            await playMoveRecquest(`rock`)
            window.application.currentPlayer[`move`] = `rock`
            let timerId = setInterval(() => (gameStatusRecquest()), 500)
            window.application.timers[`gameTrick`] = timerId
            return;
        }
        if (event.target.className == `ctScrissors`) {
            await playMoveRecquest(`scissors`)
            window.application.currentPlayer[`move`] = `scrissors`
            let timerId = setInterval(() => (gameStatusRecquest()), 500)
            window.application.timers[`gameTrick`] = timerId
            return
        }
        if (event.target.className == `ctPaper`) {
            await playMoveRecquest(`paper`)
            window.application.currentPlayer[`move`] = `paper`
            let timerId = setInterval(() => (gameStatusRecquest()), 500)
            window.application.timers[`gameTrick`] = timerId
            return
        }
    }
}
window.application.blocks[`createCTContainerBody`] = createCTContainerBody;

function createCTContainerBottom(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `ctContainerBottom`, ``, ``)
    createBlock(`.ctContainerBottom`, `div`, `ctHealthBar`, ``, ``)
    createMiniPlayerIcon(`.ctContainerBottom`)
}
window.application.blocks[`createCTContainerBottom`] = createCTContainerBottom;



function createMiniPlayerIcon(targetSelector) {
    createBlock(`${targetSelector}`, `div`, `lbPlayerListPlayerMiniContainer`, `containerPlayer`)
    
    createBlock(`#containerPlayer`, `div`, `lbPlayerAvatarContainerMini`, `avatarPlayer`)
    createBlockWithSrc(`#avatarPlayer`, `img`, `lbAvatarImgMini`, ``, ``, `./imges/peasant.png`)


    createBlock(`#containerPlayer`, `div`, `lbPlayerNameContainerMini`, `namePlayer`)
    createBlock(`#namePlayer`, `div`, `lbPlayerNameMini`, ``, `${window.application.currentPlayer[`login`]}`)
    createBlock(`#namePlayer`, `div`, `lbPlayerTitleMini`, ``, `Рабочий`)

}
window.application.blocks[`createMiniPlayerIcon`] = createMiniPlayerIcon;

