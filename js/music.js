let main = new Audio(`./music/Main.mp3`);

let battle = new Audio(`./music/Battle.mp3`)

window.application.music[`main`] = new Audio(`./music/Main.mp3`);
window.application.music[`battle`] = new Audio(`./music/Battle.mp3`)

HTMLAudioElement.prototype.stop = function()
{
this.pause();
this.currentTime = 0.0;
}