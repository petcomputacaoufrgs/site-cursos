function addAnimation() {
    dragonImg = document.getElementById('logo-dragao')
    
    if(dragonImg.className === "") {
        dragonImg.className = "top-down-animation"
    } else if(dragonImg.className === "top-down-animation") {
        dragonImg.className = "down-top-animation"
    } else {
        dragonImg.className = "top-down-animation"
    }
}