
function speakText() {
    var biography = document.getElementById("biography-content").textContent;
    var achievements = document.getElementsByClassName("achievement");
    var achievementsText = "";
    for (var i = 0; i < achievements.length; i++) {
        achievementsText += achievements[i].textContent + ". ";
    }
    var photos = document.querySelectorAll("#photos figure");
    var photosText = "";
    for (var i = 0; i < photos.length; i++) {
        var description = photos[i].querySelector("figcaption").textContent;
        photosText += "Foto " + (i + 1) + ": " + description + ". ";
    }
    var speech = new SpeechSynthesisUtterance(biography + " " + achievementsText + " " + photosText);
    window.speechSynthesis.speak(speech);
}
