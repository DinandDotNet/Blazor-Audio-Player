window.PlayAudio = (elementName) => {
    document.getElementById(elementName).play();
}
window.PauseAudio = (elementName) => {
    document.getElementById(elementName).pause();

}
window.StopAudio = (elementName) => {
    document.getElementById(elementName).pause();
    document.getElementById(elementName).currentTime = 0;
}
