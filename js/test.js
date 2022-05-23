let playerLogin;
let playerToken;
let gameId;
let token;
let move;
let inputValue;

let playerA = {};
let playerB = {};

const baclendUrl = `https://morning-beyond-90272.herokuapp.com/`;
const pingRecquest = `${baclendUrl}ping`;
const loginRecquest = `${baclendUrl}login?login=${inputValue}`;
const playerStatus = `${baclendUrl}player-status?token=${token}`;
const startRecquest = `${baclendUrl}start?token=${token}`; 
const gameStatusRecquest = `${baclendUrl}game-status?token=${token}&id=${gameId}`
const playRecquest = `${baclendUrl}play?token=${token}&id=${gameId}&move=${move}`
const playerListRecquest = `${baclendUrl}player-list?token=${token}`

let LoginInputA = document.querySelector(`.LoginInputA`)
let LoginA = document.querySelector(`.LoginA`)

LoginA.addEventListener(`click`, () => playerA[`login`] = LoginInputA.value);
LoginA.addEventListener(`click`, () => (loginRecquestF(playerA, playerA[`login`])))

let StatusA = document.querySelector(`.StatusA`)

StatusA.addEventListener(`click`, () => (playerStatusF(playerA, playerA[`token`])))

let StartA = document.querySelector(`.StartA`)

StartA.addEventListener(`click`, () => (startRecquestF(playerA, playerA[`token`])))

// const PlayerStatusA = document.querySelector(`.PlayerStatusA`) // !!!!!!!
// const PlayA = document.querySelector(`.PlayA`)

let GameStatusA = document.querySelector(`.GameStatusA`)
GameStatusA.addEventListener(`click`, () => (gameStatusRecquestF(playerA[`token`], playerA[`gameId`])))


let PlayerListA = document.querySelector(`.PlayerListA`)
PlayerListA.addEventListener(`click`, () => (playerListRecquestF(playerA[`token`])))

let scissorsA = document.querySelector(`.scissorsA`)
scissorsA.addEventListener(`click`, () => (playRecquestF(playerA[`token`], playerA[`gameId`], `scissors`)))

let rockA = document.querySelector(`.rockA`)
rockA.addEventListener(`click`, () => (playRecquestF(playerA[`token`], playerA[`gameId`], `rock`)))

let paperA = document.querySelector(`.paperA`)
paperA.addEventListener(`click`, () => (playRecquestF(playerA[`token`], playerA[`gameId`], `paper`)))


async function loginRecquestF(inputValue) {
    try {
        const requset = await fetch(`${baclendUrl}login?login=${inputValue}`);
        const response = await requset.json();
        console.log(player)
        player[`token`] = response.token;
        console.log(`loginRequest playerA resulut :`, player )
    } catch(err) {
        console.log(`error in loginRecquestF`, err);
    } 
}

async function playerStatusF(player, token) {
    try {
        const requset = await fetch(`${baclendUrl}player-status?token=${token}`);
        const response = await requset.json();

        player[`status`] = response[`player-status`][`status`];
        if (response[`player-status`][`game`]) {
            player[`gameId`] = response[`player-status`][`game`][`id`]   
        }
        

        console.log(`playerStatusF resulut playerA :`, player)
    } catch(err) {
        console.log(`error in pingRequest`, err);
    } 
}

async function startRecquestF(token) {
    try {
        const requset = await fetch(`${baclendUrl}start?token=${token}`);
        const response = await requset.json();

        if (response[`player-status`]) {
        playerA[`status`] = response[`player-status`][`status`];

        if (response[`player-status`][`game`]) {
            playerA[`gameId`] = response[`player-status`][`game`][`id`]   
        }
        }
        
        
        console.log(`startRecquestF`, response)
    
    } catch(err) {
        console.log(`error in pingRequest`, err);
    } 
}

async function gameStatusRecquestF(token, gameId) {
    try {
        const requset = await fetch(`${baclendUrl}game-status?token=${token}&id=${gameId}`);
        const response = await requset.json();

        console.log(`gameStatusRecquestF`, response)
    
    } catch(err) {
        console.log(`error in pingRequest`, err);
    } 
}

async function playRecquestF(token, gameId, move) {
    try {
        const requset = await fetch(`${baclendUrl}play?token=${token}&id=${gameId}&move=${move}`);
        const response = await requset.json();

        console.log(`playRecquestF`, response)
    
    } catch(err) {
        console.log(`error in pingRequest`, err);
    } 
}



async function playerListRecquestF(token) {
    try {
        const requset = await fetch(`${baclendUrl}player-list?`);
        const response = await requset.json();

        console.log(`playerListRecquestF`, response)
    
    } catch(err) {
        console.log(`error in pingRequest`, err);
    } 
}

// let LoginInputB = document.querySelector(`.LoginInputB`)
// let LoginB = document.querySelector(`.LoginB`)

// LoginB.addEventListener(`click`, () => playerB[`login`] = LoginInputB.value);
// LoginB.addEventListener(`click`, () => (loginRecquestF(playerB, playerB[`login`])))

// let StatusB = document.querySelector(`.StatusB`)

// StatusB.addEventListener(`click`, () => (playerStatusF(playerB, playerB[`token`])))

// let StartB = document.querySelector(`.StartB`)

// StartB.addEventListener(`click`, () => (startRecquestF(playerB[`token`])))

// const PlayerStatusB = document.querySelector(`.PlayerStatusB`) // !!!!!!!

// const GameStatusB = document.querySelector(`.GameStatusA`)

// GameStatusB.addEventListener(`click`, () => (gameStatusRecquestF(playerB[`token`], playerB[`gameId`])))


{/* <div class="playerA">
<div>
    <input class="LoginInputA">
    <button class="LoginA">LoginA</button>
</div> 
<button class="StatusA">StatusA</button>
<button class="StartA">StartA</button>
<!-- <button class="PlayerStatusA">PlayerStatusA</button> -->
<button class="GameStatusA">GameStatusA</button>
<!-- <button class="PlayA">PlayA</button> -->
<button class="PlayerListA">PlayerListA</button>
<div>
    <button class="scissorsA">scissorsA</button>
    <button class="rockA">rockA</button>
    <button class="paperA">paperA</button>
</div>
</div> */}