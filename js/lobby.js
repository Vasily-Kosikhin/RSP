function createPlayerAvatarContainer(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `lbPlayerAvatarContainer`)
    createBlockWithSrc(`.lbPlayerAvatarContainer`, `img`, `lbAvatarImg`, ``, ``, `./imges/peasant.png`)
}
window.application.blocks[`createPlayerAvatarContainer`] = createPlayerAvatarContainer;

function createPlayerNameContainer(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `lbPlayerNameContainer`)

    
    createBlock(`.lbPlayerNameContainer`, `div`, `lbPlayerName`, ``, `${window.application.currentPlayer[`login`]}`)
    createBlock(`.lbPlayerNameContainer`, `div`, `lbPlayerTitle`, ``, `Рабочий`)
}
window.application.blocks[`createPlayerNameContainer`] = createPlayerNameContainer;

function createPlayerStatContainer(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `lbPlayerStat`)

    createBlock(`.lbPlayerStat`, `div`, `lbPlayerWins`)
    createBlock(`.lbPlayerWins`, `span`, ``, ``, `Побед : ${window.application.currentPlayer[`wins`]}`)

    createBlock(`.lbPlayerStat`, `div`, `lbPlayerLosses`)
    createBlock(`.lbPlayerLosses`, `span`, ``, ``, `Поражений : ${window.application.currentPlayer[`loses`]}`)

    let winrate = window.application.currentPlayer[`wins`] / (window.application.currentPlayer[`wins`] + window.application.currentPlayer[`loses`])

    if(!winrate) {
        winrate = `---`
    } else if (winrate == Infinity) {
        winrate = `100%`
    } else {
        winrate = (winrate * 100).toFixed(0) + `%`
    }
    createBlock(`.lbPlayerStat`, `div`, `lbPlayerWinrate`)
    createBlock(`.lbPlayerWinrate`, `span`, ``, ``, `Результативность : ${winrate}`)
    let favoriteWeapon;
    if(window.application.currentPlayer) {
        favoriteWeapon = findFavoriteWeapon(window.application.currentPlayer)
    }
    
    
    createBlock(`.lbPlayerStat`, `div`, `lbPlayerWeapon`)
    createBlock(`.lbPlayerWeapon`, `span`, ``, ``, `Любимое оружие : ${favoriteWeapon}`)

}
window.application.blocks[`createPlayerStatContainer`] = createPlayerStatContainer;


function createInterfaceContainer(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `lbInterfaceContainer`)

    createBlock(`.lbInterfaceContainer`, `div`, `lbPlayerRaiting`, ``, ``)
    if (document.querySelector(`.lbFindingStatus`)) {
        document.querySelector(`.lbFindingStatus`).innerHTML = ``;
    } else {
        createBlock(`.lbInterfaceContainer`, `div`, `lbFindingStatus`, ``, ``)
    }
    createBlock(`.lbInterfaceContainer`, `button`, `lbGameFindButton`, `lbGameFindButton`, `Вступить в битву`)


    let lbGameFindButton = document.querySelector(`#lbGameFindButton`)

    lbGameFindButton.addEventListener(`click`, startSearching)
}
window.application.blocks[`createInterfaceContainer`] = createInterfaceContainer;


function createOnlineContainer(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `lbOnlineContainer`)
    createBlock(`.lbOnlineContainer`, `div`, `lbPlayersOnline`, ``, ``)
    createBlock(`.lbPlayersOnline`, `span`, `lbOnlineCount`, ``, `Игроков в сети : `)
    createBlock(`.lbPlayersOnline`, `span`, `currentOnline`, `currentOnline`, ``)
    createBlock(`.lbPlayersOnline`, `div`, `lbPlayersList`, ``, ``)
    
    createBlock(`.lbPlayersList`, `div`, `lbPlayersListPlayersOnline`, ``, ``)
    createMiniOnlinePlayer(`.lbPlayersListPlayersOnline`)

    let onlineTimerId = setInterval(checkOnline, 3000)
    window.application.timers[`onlineTimerId`] = onlineTimerId;
   
    async function checkOnline() {
        console.log(`Interval checkOnline started timder`, onlineTimerId)
        await playerListRecquest()
        for(let item of document.querySelectorAll(`.lbPlayersListPlayersOnline`)) {
            item.remove()
        }
        createBlock(`.lbPlayersList`, `div`, `lbPlayersListPlayersOnline`, ``, ``)
        createMiniOnlinePlayer(`.lbPlayersListPlayersOnline`)
    }
}
window.application.blocks[`createOnlineContainer`] = createOnlineContainer;

function createMiniOnlinePlayer(targetSelector) {

    
    for(let i = 0; i <  window.application.onlinePlayers.length; i++) {

        if(window.application.onlinePlayers[i][`you`]) {
            continue
        }

        document.querySelector(`#currentOnline`).innerHTML = window.application.onlinePlayers.length - 1
        createBlock(`${targetSelector}`, `div`, `lbPlayerListPlayerMiniContainer`, `containerMini${i}`)
        
        createBlock(`#containerMini${i}`, `div`, `lbPlayerAvatarContainerMini`, `avatarMini${i}`)
        createBlockWithSrc(`#avatarMini${i}`, `img`, `lbAvatarImgMini`, ``, ``, `./imges/peasant.png`)
        createBlock(`#containerMini${i}`, `div`, `lbPlayerNameContainerMini`, `nameMini${i}`)
        createBlock(`#nameMini${i}`, `div`, `lbPlayerNameMini`, ``, `${window.application.onlinePlayers[i][`login`]}`)
        createBlock(`#nameMini${i}`, `div`, `lbPlayerTitleMini`, ``, `Рабочий`)
    }
}
window.application.blocks[`createMiniOnlinePlayer`] = createMiniOnlinePlayer;

function createPlayerMiniIcon(targetSelector) {
    createBlock(`${targetSelector}`, `div`, `lbPlayerListPlayerMiniContainer`, ``, ``)
    createPlayerAvatarContainerMini(`.lbPlayerListPlayerMiniContainer`)
    createPlayerNameContainerMini(`.lbPlayerListPlayerMiniContainer`)
}
window.application.blocks[`createPlayerMiniIcon`] = createPlayerMiniIcon;

function createPlayerAvatarContainerMini(targetSelector) {
    createBlock(`${targetSelector}`, `div`, `lbPlayerAvatarContainerMini`)
    createBlock(`.lbPlayerAvatarContainerMini`, `img`, `lbAvatarImgMini`)
}
window.application.blocks[`createPlayerAvatarContainerMini`] = createPlayerAvatarContainerMini;

function createPlayerNameContainerMini(targetSelector) {

    createBlock(`${targetSelector}`, `div`, `lbPlayerNameContainerMini`)

    createBlock(`.lbPlayerNameContainerMini`, `div`, `lbPlayerNameMini`, ``, `${window.application.onlinePlayers[`login`]}`)
    createBlock(`.lbPlayerNameContainerMini`, `div`, `lbPlayerTitleMini`, ``, `Рабочий`)
}
window.application.blocks[`createPlayerNameContainerMini`] = createPlayerNameContainerMini;


function findFavoriteWeapon(obj) {
    let weaponsArray = Object.entries(obj).filter(item => (item[0] == `papers` || item[0] == `scissors` || item[0] == `rocks`))
    let biggestValue = Math.max(...(weaponsArray.map(item =>   item[1])))
    let favoriteWeapon = (weaponsArray.find(item => item[1] == biggestValue))[0]
    favoriteWeapon = favoriteWeapon[0].toUpperCase() + favoriteWeapon.slice(1) 
    if (favoriteWeapon == `Scissors`) {
        favoriteWeapon = `Мечи`
    }
    if (favoriteWeapon == `Rocks`) {
        favoriteWeapon = `Щит`
    }
    if (favoriteWeapon == `Papers`) {
        favoriteWeapon = `Магия`
    }
    return favoriteWeapon;
}
window.application.requests[`findFavoriteWeapon`] = findFavoriteWeapon;

    


async function startSearching() {

    clearInterval(window.application.timers[`onlineTimerId`])
    console.log(`interval onlineTimerId stoped timer:`, window.application.timers[`onlineTimerId`])

    await gameStartRecquest();
            
    let playerStatusTimerId = setInterval(checkGameStatus, 500)
    window.application.timers[`playerStatusTimerId`] = playerStatusTimerId;
    console.log(`Interval playerStatusTimerId started timer:`, window.application.timers[`playerStatusTimerId`])
    
    renderGameSearchScreen();   

    async function checkGameStatus() {
        // console.log(`Interval checkPlayerStatus started timder`, playerStatusTimerId)
        await gameStatusRecquest()
    }
}
window.application.screens[`startSearching`] = startSearching;