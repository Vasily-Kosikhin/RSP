
function createWOContainerBody(targetSelector, move) {

    if(move == `rock`) {
        createBlock(`.ctContainerBody`, `div`, `ctRockContainer`, ``, ``)
        createBlockWithSrc(`.ctRockContainer`, `div`, `ctRock`, ``, ``, ``)
        
        createBlock(`.ctContainerBody`, `div`, `empty`, ``, `Ждем соперника`)

        createBlock(`.ctContainerBody`, `div`, `woQuestionContainer`, ``, ``)
    }

    if(move == `scrissors`) {
        createBlock(`.ctContainerBody`, `div`, `ctScissorsContainer`, ``, ``)
        createBlockWithSrc(`.ctScissorsContainer`, `div`, `ctScrissors`, ``, ``, ``)

        createBlock(`.ctContainerBody`, `div`, `empty`, ``, `Ждем соперника`)

        createBlock(`.ctContainerBody`, `div`, `woQuestionContainer`, ``, ``)
    }

    if(move == `paper`) {
        createBlock(`.ctContainerBody`, `div`, `ctPaperContainer`, ``, ``)
        createBlockWithSrc(`.ctPaperContainer`, `div`, `ctPaper`, ``, ``, ``)

        createBlock(`.ctContainerBody`, `div`, `empty`, ``, `Ждем соперника`)
        
        createBlock(`.ctContainerBody`, `div`, `woQuestionContainer`, ``, ``)
    }

}
window.application.blocks[`createWOContainerBody`] = createWOContainerBody;

