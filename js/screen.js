function createBlock(targetSelector, blockTag, blockClass, blockId, blockInnerHTML) {
    
    const target = document.querySelector(`${targetSelector}`)

    const newBlock = document.createElement(`${blockTag}`);
    if (blockClass) {
        newBlock.classList.add(`${blockClass}`);
    }
    if (blockId) {
        newBlock.setAttribute(`id`,`${blockId}`);
    }
    if (blockInnerHTML) {
        newBlock.innerHTML = blockInnerHTML;
    }
    
    target.append(newBlock)

}

function createBlockWithSrc(targetSelector, blockTag, blockClass, blockId, blockInnerHTML, src) {
    
    const target = document.querySelector(`${targetSelector}`)

    const newBlock = document.createElement(`${blockTag}`);
    if (blockClass) {
        newBlock.classList.add(`${blockClass}`);
    }
    if (blockId) {
        newBlock.setAttribute(`id`,`${blockId}`);
    }
    if (blockInnerHTML) {
        newBlock.innerHTML = blockInnerHTML;
    }
    if(src) {
        newBlock.setAttribute(`src`,`${src}`);
        newBlock.setAttribute(`alt`,``);
    }
    
    target.append(newBlock)

}


function renderAuthorizationScreen() {
    console.log(`rendergin renderAuthorizationScreen`)
    const mainBlock = document.querySelector(`.app`);
    for (let elem of mainBlock.querySelectorAll(`*`)) {
        elem.remove();
    }

    createAuthorizationBlock(`.app`)
    console.log(`renderAuthorizationScreen complete`)

}

window.application.screens[`authorization`] = renderAuthorizationScreen;

async function renderlobbyScreen() {
    console.log(`rendergin lobbyScreen`)
    // let timerPlayerList = setInterval(() =>(playerListRecquest()), 100)
    // window.application.timers[`playerList`] = timerPlayerList;

    const mainBlock = document.querySelector(`.app`);
    for (let elem of mainBlock.querySelectorAll(`*`)) {
        elem.remove();
    }

    createBlock(`.app`, `div`, `lbContainer`)
    
    createBlock(`.lbContainer`, `div`, `lbPlayerContainer`)
    createInterfaceContainer(`.lbContainer`)
    createOnlineContainer(`.lbContainer`)

    createBlock(`.lbPlayerContainer`, `div`, `lbPlayerProfile`)
    createPlayerAvatarContainer(`.lbPlayerProfile`)
    createPlayerNameContainer(`.lbPlayerProfile`) 
    createPlayerStatContainer(`.lbPlayerContainer`)



    // let lbGameFindButton = document.querySelector(`#lbGameFindButton`)

    // lbGameFindButton.addEventListener(`click`, startSearching)
    
    // async function startSearching() {

    //     clearInterval(window.application.timers[`onlineTimerId`])
    //     console.log(`interval onlineTimerId stoped timer:`, window.application.timers[`onlineTimerId`])

    //     await gameStartRecquest();
                
    //     let playerStatusTimerId = setInterval(checkGameStatus, 500)
    //     window.application.timers[`playerStatusTimerId`] = playerStatusTimerId;
    //     console.log(`Interval playerStatusTimerId started timer:`, window.application.timers[`playerStatusTimerId`])
        
    //     renderGameSearchScreen();   

    //     async function checkGameStatus() {
    //         // console.log(`Interval checkPlayerStatus started timder`, playerStatusTimerId)
    //         await gameStatusRecquest()
    //     }
    // }
    // console.log(`renderlobbyScreen complete`)
}

window.application.screens[`lobby`] = renderlobbyScreen;


function renderChoosingTrickScreen() {

    const mainBlock = document.querySelector(`.app`);
    for (let elem of mainBlock.querySelectorAll(`*`)) {
        elem.remove();
    }

    createBlock(`.app`, `div`, `ctContainer`)
    
    createCTContainerHead(`.ctContainer`)
    createCTContainerBody(`.ctContainer`)
    createCTContainerBottom(`.ctContainer`)
    
}

window.application.screens[`choosingTrick`] = renderChoosingTrickScreen;

function renderWaitingOpponentScreen() {

    renderChoosingTrickScreen()

    const clearBlock = document.querySelector(`.ctContainerBody`);
    for (let elem of clearBlock.querySelectorAll(`*`)) {
        elem.remove();
    }
    if (window.application.currentPlayer[`move`]) {
        createWOContainerBody(`.ctContainerBody`, `${window.application.currentPlayer[`move`]}`)
    } else {
        createWOContainerBody(`.ctContainerBody`, `rock`)
    }
    
   
}

window.application.screens[`waitingOpponent`] = renderWaitingOpponentScreen;

function renderGameResultScreen(move, gameresult) {

    renderChoosingTrickScreen()

    const clearBlock = document.querySelector(`.ctContainerBody`);
    for (let elem of clearBlock.querySelectorAll(`*`)) {
        elem.remove();
    }

    createGRContainerBody(`.ctContainerBody`, `${move}`, `${gameresult}`);  

    
}

window.application.screens[`gameResult`] = renderGameResultScreen;


// async function renderLoadScreen(targetSelector) {
//     let target = document.querySelector(`${targetSelector}`)
//     let targetCoords = target.getBoundingClientRect()

//     createBlock(`.app`, `div`, `loadScreen`, `loadScreen`, ``)
//     let wall = document.querySelector(`.loadScreen`)
//     let wallHeight = 0;
//     let loadScreenTimer = setInterval(falling, 5)
//     // createBlockWithSrc(`.loadScreen`, `img`, `loadImage`, `loadImage`, ``, `./imges/wall.jpg`)
//     function falling() {
//         wall.style.top = targetCoords.top + `px`
//         wallHeight += 1;
//         if(wallHeight == 300) {
//             clearInterval(loadScreenTimer)
//             setTimeout(removeLoadScreen, 2)
//         }
//         wall.style.height = wallHeight + `px`
//         console.log(wall.style.heigth)
//     }      
// }
// window.application.screens[`renderLoadScreen`] = renderLoadScreen;

// async function removeLoadScreen() {

//     createBlock(`.app`, `div`, `loadScreen`, `loadScreen`, ``)
//     let wall = document.querySelector(`.loadScreen`)
//     let wallHeight = 300;
//     let loadScreenTimer = setInterval(falling, 5)
//     // createBlockWithSrc(`.loadScreen`, `img`, `loadImage`, `loadImage`, ``, `./imges/wall.jpg`)
//     function falling() {
//         wallHeight -= 1;
//         if(wallHeight == 0) {
//             clearInterval(loadScreenTimer)
//         }
//         wall.style.height = wallHeight + `px`
//         console.log(wall.style.heigth)
//     }  
// }
// window.application.screens[`removeLoadScreen`] = removeLoadScreen;

// function renderWaitingGameScreen() {

//     const mainBlock = document.querySelector(`.app`);
//     for (let elem of mainBlock.querySelectorAll(`*`)) {
//         elem.remove();
//     }

//     createBlock(`.app`, `div`, `lbContainer`)
    

//     createBlock(`.lbContainer`, `div`, `lbPlayerContainer`)
//     createWaitingInterfaceContainer(`.lbContainer`)
//     createTipsContainer(`.lbContainer`)

//     createPlayerAvatarContainer(`.lbPlayerContainer`)
//     createPlayerNameContainer(`.lbPlayerContainer`) 
//     createPlayerStatContainer(`.lbPlayerContainer`)

    
// }
// window.application.screens[`waiting`] = renderWaitingGameScreen; /// мБ МБ