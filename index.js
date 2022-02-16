function appearHeart() {
    document.getElementById("kalp").style.opacity = "100%";
}

function hideHeart() {
    document.getElementById("kalp").style.opacity = "0%";
}

function likePost() {
    document.getElementById("kalp").style.transition = "all 0.4s ease 0s"
    document.getElementById("kalp").style.opacity = "0%";
    document.getElementById("kalp").style.width = "160px";
    document.getElementById("kalp").style.height = "160px";
}