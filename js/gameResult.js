


function createGRContainerBody(targetSelector, move, result) {

    if(result) {
        if(result == `win`) {

            if(move == `rock`) {
                createBlock(`.ctContainerBody`, `div`, `ctRockContainer`, ``, ``)
                createBlockWithSrc(`.ctRockContainer`, `div`, `ctRock`, ``, ``, ``)
        
                createBlock(`.ctContainerBody`, `div`, `emptyWin`, ``, `Победа!`)
                createBlock(`.emptyWin`, `button`, `grBackToLobby`, ``, `Вернуться в лобби`)
                
                createBlock(`.ctContainerBody`, `div`, `ctScissorsContainer`, ``, ``)
                createBlockWithSrc(`.ctScissorsContainer`, `div`, `ctScrissors`, ``, ``, ``)
            }
        
            if(move == `scrissors`) {
                
                createBlock(`.ctContainerBody`, `div`, `ctScissorsContainer`, ``, ``)
                createBlockWithSrc(`.ctScissorsContainer`, `div`, `ctScrissors`, ``, ``, ``)
        
                createBlock(`.ctContainerBody`, `div`, `emptyWin`, ``, `Победа!`)
                createBlock(`.emptyWin`, `button`, `grBackToLobby`, ``, `Вернуться в лобби`)

                createBlock(`.ctContainerBody`, `div`, `ctPaperContainer`, ``, ``)
                createBlockWithSrc(`.ctPaperContainer`, `div`, `ctPaper`, ``, ``, ``)
            }
        
            if(move == `paper`) {
                createBlock(`.ctContainerBody`, `div`, `ctPaperContainer`, ``, ``)
                createBlockWithSrc(`.ctPaperContainer`, `div`, `ctPaper`, ``, ``, ``)
                
                createBlock(`.ctContainerBody`, `div`, `emptyWin`, ``, `Победа!`)
                createBlock(`.emptyWin`, `button`, `grBackToLobby`, ``, `Вернуться в лобби`)

                createBlock(`.ctContainerBody`, `div`, `ctRockContainer`, ``, ``)
                createBlockWithSrc(`.ctRockContainer`, `div`, `ctRock`, ``, ``, ``)
            }

        } else if (result == `lose`) {

            if(move == `rock`) {
                createBlock(`.ctContainerBody`, `div`, `ctRockContainer`, ``, ``)
                createBlockWithSrc(`.ctRockContainer`, `div`, `ctRock`, ``, ``, ``)
        
                createBlock(`.ctContainerBody`, `div`, `emptyLose`, ``, `Поражение`)
                createBlock(`.emptyLose`, `button`, `grBackToLobby`, ``, `Вернуться в лобби`)

                createBlock(`.ctContainerBody`, `div`, `ctPaperContainer`, ``, ``)
                createBlockWithSrc(`.ctPaperContainer`, `div`, `ctPaper`, ``, ``, ``)
            }
        
            if(move == `scrissors`) {
                console.log(`HERE GRER`)
                createBlock(`.ctContainerBody`, `div`, `ctScissorsContainer`, ``, ``)
                createBlockWithSrc(`.ctScissorsContainer`, `div`, `ctScrissors`, ``, ``, ``)
        
                createBlock(`.ctContainerBody`, `div`, `emptyLose`, ``, `Поражение`)
                createBlock(`.emptyLose`, `button`, `grBackToLobby`, ``, `Вернуться в лобби`)

                createBlock(`.ctContainerBody`, `div`, `ctRockContainer`, ``, ``)
                createBlockWithSrc(`.ctRockContainer`, `div`, `ctRock`, ``, ``, ``)
            }
        
            if(move == `paper`) {
                createBlock(`.ctContainerBody`, `div`, `ctPaperContainer`, ``, ``)
                createBlockWithSrc(`.ctPaperContainer`, `div`, `ctPaper`, ``, ``, ``)
                
                createBlock(`.ctContainerBody`, `div`, `emptyLose`, ``, `Поражение`)
                createBlock(`.emptyLose`, `button`, `grBackToLobby`, ``, `Вернуться в лобби`)

                createBlock(`.ctContainerBody`, `div`, `ctScissorsContainer`, ``, ``)
                createBlockWithSrc(`.ctScissorsContainer`, `div`, `ctScrissors`, ``, ``, ``)
            }


        }
    } else {

        if(move == `rock`) {
            createBlock(`.ctContainerBody`, `div`, `ctRockContainer`, ``, ``)
            createBlockWithSrc(`.ctRockContainer`, `img`, `ctRock`, ``, ``, `./imges/rock.png`)
    
            createBlock(`.ctContainerBody`, `div`, `empty`, ``, ``)
            createBlockWithSrc(`.empty`, `img`, `gameResult`, ``, ``, `./imges/question.jpg`)

            createBlock(`.ctContainerBody`, `div`, `ctRockContainer`, ``, ``)
            createBlockWithSrc(`.ctRockContainer`, `img`, `ctRock`, ``, ``, `./imges/rock.png`)
        }
    
        if(move == `scrissors`) {
            
            createBlock(`.ctContainerBody`, `div`, `ctScissorsContainer`, ``, ``)
            createBlockWithSrc(`.ctScissorsContainer`, `img`, `ctScrissors`, ``, ``, `./imges/scrissors.png`)
    
            createBlock(`.ctContainerBody`, `div`, `empty`, ``, ``)
            createBlockWithSrc(`.empty`, `img`, `gameResult`, ``, ``, `./imges/win.png`)

            createBlock(`.ctContainerBody`, `div`, `ctScissorsContainer`, ``, ``)
            createBlockWithSrc(`.ctScissorsContainer`, `img`, `ctScrissors`, ``, ``, `./imges/scrissors.png`)
        }
    
        if(move == `paper`) {
            createBlock(`.ctContainerBody`, `div`, `ctPaperContainer`, ``, ``)
            createBlockWithSrc(`.ctPaperContainer`, `img`, `ctPaper`, ``, ``, `./imges/paper.png`)
            
            createBlock(`.ctContainerBody`, `div`, `empty`, ``, ``)
            createBlockWithSrc(`.empty`, `img`, `gameResult`, ``, ``, `./imges/win.png`)

            createBlock(`.ctContainerBody`, `div`, `ctPaperContainer`, ``, ``)
            createBlockWithSrc(`.ctPaperContainer`, `img`, `ctPaper`, ``, ``, `./imges/paper.png`)
            
        }
        
    }
    let BackToLobby = document.querySelector(`.grBackToLobby`)
        BackToLobby.addEventListener(`click`, backToLobby)
    
    // BackToLobby.addEventListener(`click`, () => (window.application.music[`battle`].stop()))
    // BackToLobby.addEventListener(`click`, () => (window.application.music[`main`].play()))
    
    async function backToLobby() {
        await playerListRecquest()
        renderlobbyScreen()
    }
}
window.application.blocks[`createGRContainerBody`] = createGRContainerBody;