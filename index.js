const selectedColorEl = document.getElementById("selected-color")
const getColorBtn = document.getElementById("get-color-btn")
const selectedPalette = document.getElementById("type")
const resultDiv = document.getElementById("result-div")

// Light mode functionality
const modeSelectorEl = document.getElementById("mode-selector")
const containerEl = document.getElementById("container")
const darkModeEl = document.getElementById("dark-mode")
const lightModeEl = document.getElementById("light-mode")

getColours()
modeSelectorEl.addEventListener("click", switchMode)
getColorBtn.addEventListener("click", getColours)

function getColours(){
    const selectedColor = selectedColorEl.value.replace("#", "")
    const selectedType = selectedPalette.value

    const numColorsToDisplay = resultDiv.getElementsByClassName("color-display").length
    const baseUrl = "https://www.thecolorapi.com/scheme"
    const queryUrl = `hex=${selectedColor}&mode=${selectedType}&count=${numColorsToDisplay}`

    fetch(baseUrl + "?" + queryUrl)
        .then(res => res.json())
        .then(data => {
            const colorsToDisplay = data.colors.map(color => color.hex.value)
            renderColorScheme(colorsToDisplay)
        })
}

function renderColorScheme(colors){

    const resultDivColors = resultDiv.getElementsByClassName("color-display")
    const resultDivColorsValues = resultDiv.getElementsByClassName("color-hex")

    for (let i=0; i< resultDivColors.length; i++){
        resultDivColors[i].style.backgroundColor = colors[i]
        resultDivColorsValues[i].innerHTML = `<p>${colors[i]}</p>`
    }
}

function switchMode(){
    darkModeEl.classList.toggle("hidden")
    lightModeEl.classList.toggle("hidden")

    containerEl.classList.toggle("container-light")
    document.body.classList.toggle("light")
    getColorBtn.classList.toggle("light-btn")

}