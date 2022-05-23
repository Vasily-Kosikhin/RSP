window.application.requests[`backendURL`] = `https://morning-beyond-90272.herokuapp.com/`;

window.addEventListener(`load`, () => console.log(`Страница загружена`))

async function loginRecquest(inputValue) {
    const backendURL = window.application.requests[`backendURL`];
    try {
        console.log(`loginRecquest started `)
        const requset = await fetch(`${backendURL}login?login=${inputValue}`);
        const response = await requset.json();

        window.application.currentPlayer[`token`] = response.token;
        playerStatusRequest()

        
        console.log(`loginRecquest complete`, response)
    } catch(err) {
        console.log(`error in loginRecquest`, err);
    } 
}
window.application.requests[`loginRecquest`] = loginRecquest;

async function playerStatusRequest() {
    const backendURL = window.application.requests[`backendURL`];
    try {
        console.log(`playerStatusRequest started `)
        const requset = await fetch(`${backendURL}player-status?token=${window.application.currentPlayer[`token`]}`);
        const response = await requset.json();
        if(response[`player-status`]) {
            if(response[`player-status`][`status`] == `lobby`) {
                await playerListRecquest()
                renderlobbyScreen()
                
            }
            if(response[`player-status`][`status`] == `game`) {
                await playerListRecquest()
                window.application.currentPlayer[`gameId`] = response[`player-status`][`game`][`id`]
                gameStatusRecquest()
            }
        }
        console.log(`playerStatusRequest complete `, response)
    } catch(err) {
        console.log(`error in playerStatusRequest`, err);
    } 
}
window.application.requests[`playerStatusRequest`] = playerStatusRequest

async function gameStartRecquest() {
    const backendURL = window.application.requests[`backendURL`];
    try {
        const requset = await fetch(`${backendURL}start?token=${window.application.currentPlayer[`token`]}`);
        const response = await requset.json();

        if (response[`status`] == `ok`) {
            window.application.currentPlayer[`gameId`] = response[`player-status`][`game`][`id`]
        }
        
        console.log(`gameStartRecquest`, response)
    
    } catch(err) {
        console.log(`error in gameStartRecquest`, err);
    } 
}
window.application.requests[`gameStartRecquest`] = gameStartRecquest

async function gameStatusRecquest() {
    const backendURL = window.application.requests[`backendURL`];
    try {

        const requset = await fetch(`${backendURL}game-status?token=${window.application.currentPlayer[`token`]}&id=${window.application.currentPlayer[`gameId`]}`);
        const response = await requset.json();

        if(response[`game-status`][`status`] == `waiting-for-start`) {
            if(document.querySelector(`.lbContainer`)) {
                console.log(`waiting-for-start`)
            } else {
                console.log(`не магу вайти`)
                await renderlobbyScreen();
                startSearching()
                
            }
            
        }
        if(response[`game-status`][`status`] == `waiting-for-your-move`) {
            clearInterval(window.application.timers[`findingTimerId`])
            clearInterval(window.application.timers[`playerStatusTimerId`])
            window.application.currentEnemyPlayer[`login`] = response[`game-status`][`enemy`][`login`]
            if(window.application.timers[`gameTrick`]) {
                clearInterval(window.application.timers[`gameTrick`]);
            }
            renderChoosingTrickScreen()
        }
        if(response[`game-status`][`status`] == `waiting-for-enemy-move`) {
            clearInterval(window.application.timers[`findingTimerId`])
            renderWaitingOpponentScreen()
        }
        if(response[`game-status`][`status`] == `lose`) {
            clearInterval(window.application.timers[`findingTimerId`])
            if(window.application.timers[`gameTrick`]) {
                clearInterval(window.application.timers[`gameTrick`]);
            }
            renderGameResultScreen(window.application.currentPlayer[`move`],`lose`)
            
        }
        if(response[`game-status`][`status`] == `win`) {
            clearInterval(window.application.timers[`findingTimerId`])
            if(window.application.timers[`gameTrick`]) {
                clearInterval(window.application.timers[`gameTrick`]);
            }
            renderGameResultScreen(window.application.currentPlayer[`move`],`win`)
        }

        console.log(`gameStatusRecquestF`, response)
    
    } catch(err) {
        console.log(`error in gameStatusRecquest`, err);
    } 
}
window.application.requests[`gameStatusRecquest`] = gameStatusRecquest

async function playMoveRecquest(move) {
    const backendURL = window.application.requests[`backendURL`];
    try {
        console.log(`playMoveRecquest start`, move)

        const requset = await fetch(`${backendURL}play?token=${window.application.currentPlayer[`token`]}&id=${window.application.currentPlayer[`gameId`]}&move=${move}`);
        const response = await requset.json();

        console.log(`playMoveRecquest complete`, response)
    
    } catch(err) {
        console.log(`error in playMoveRecquest`, err);
    } 
}
window.application.requests[`playMoveRecquest`] = playMoveRecquest

async function playerListRecquest() {
    const backendURL = window.application.requests[`backendURL`];
    try {
        console.log(`playerListRecquest started`)
        const requset = await fetch(`${backendURL}player-list?token=${window.application.currentPlayer[`token`]}`);
        const response = await requset.json();
       

        let playerData = response[`list`].find(item => item[`you`] == true)
        window.application.currentPlayer[`login`] = playerData[`login`]
        window.application.currentPlayer[`wins`] = playerData[`wins`]
        window.application.currentPlayer[`loses`] = playerData[`loses`]
        window.application.currentPlayer[`papers`] = playerData[`papers`]
        window.application.currentPlayer[`rocks`] = playerData[`rocks`]
        window.application.currentPlayer[`scissors`] = playerData[`scissors`]

        window.application.onlinePlayers = response[`list`]

        console.log(`playerListRecquest complete`, response)
    } catch(err) {
        console.log(`error in playerListRecquest`, err);
    } 
}
window.application.requests[`playerListRecquest`] = playerListRecquest

window.application.tips[0] = `Переиграйте раунд, если засчитана ничья. В случае, если вы и ваш партнер выбрали одинаковое оружие, играйте раунд снова, пока один из вас не выиграет.`
window.application.tips[1] = `Щит, по статистике, — самый популярный ход, его выбирают в 35,4 % случаев.`
window.application.tips[2] = `Мечи выбирают реже всего, лишь в 29,6 % случаев.`
window.application.tips[3] = `Мечи побеждают магию.`
window.application.tips[4] = `Выберите мечи или щит в первом раунде. Опытные игроки не будут в первый раз бросать щит, поэтому вам стоит начать с мечей. `
window.application.tips[5] = `Выберите магию в игре с соперником мужского пола. По статистике, неопытные игроки-мужчины чаще всего выбрасывают щит в первом раунде игры.`
window.application.tips[6] = `Бросьте щит против противников женского пола. Как правило, большинство женщин начинает с мечей.`
window.application.tips[7] = `Магия побеждает щит`
window.application.tips[8] = `Если ваш противник выиграл раунд, вам нужно предугадать, будет ли он использовать этот знак снова или сделает другой в зависимости от уровня его мастерства.`
window.application.tips[9] = `Eсли враг выиграл у вас с щитом, вам стоит в следующий раз выбрать магию, чтобы побить щит соперника, который он, скорее всего, использует снова.`
window.application.tips[10] = `Если ваш соперник постоянно проигрывает, он будет с большей вероятностью выбирать мечи, так как это символически очень агрессивный вариант, на который полагаются игроки, когда проигрывают.`
window.application.tips[11] = `Магия рассматривается как самый пассивный ход, поэтому не стоит ожидать его от проигрывающего соперника.`
window.application.tips[12] = `Выберите магию, чтобы выиграть с помощью статистики.`
window.application.tips[13] = `В игру «Мечи, Щит, Магия» играют только вдвоем. Поэтому сначала вам нужно найти соперника для игры.`
window.application.tips[14] = `Щит побеждает мечи.`
