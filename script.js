function enterQuiz() {
    console.log("hide")
    const x = document.getElementById("splashScreen")
    if (x.style == "block") {
        console.log("hide")
        x.style.display = "none"
    }
}

const splash = document.getElementById("startButton");
splash.addEventListener("click", enterQuiz());