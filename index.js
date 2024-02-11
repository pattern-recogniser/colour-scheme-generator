const selectedColorEl = document.getElementById("selected-color")
const getColorBtn = document.getElementById("get-color-btn")
const resultDiv = document.getElementById("result-div")
const selectedPalette = document.getElementById("type")
const modeSelectorEl = document.getElementById("mode-selector")
const containerEl = document.getElementById("container")
const darkModeEl = document.getElementById("dark-mode")
const lightModeEl = document.getElementById("light-mode")

function renderColours(){
    const selectedColor = selectedColorEl.value.replace("#", "")
    const selectedType = selectedPalette.value
    const baseUrl = "https://www.thecolorapi.com/scheme"
    const callbackUrl = `hex=${selectedColor}&mode=${selectedType}&count=5`

    fetch(baseUrl + "?" + callbackUrl)
        .then(res => res.json())
        .then(data => {
            const colorsToDisplay = data.colors.map(color => color.hex.value)
            renderColorScheme(colorsToDisplay)
        })
}

renderColours()
getColorBtn.addEventListener("click", renderColours)


function getColor(){
    return 
}

function renderColorScheme(colors){
    const resultDivColors = resultDiv.getElementsByClassName("color-display")
    const resultDivColorsValues = resultDiv.getElementsByClassName("color-hex")
    console.log(resultDivColorsValues)
    for (let i=0; i< resultDivColors.length; i++){
        resultDivColors[i].style.backgroundColor = colors[i]
        resultDivColorsValues[i].innerHTML = `<p>${colors[i]}</p>`
    }
}

modeSelectorEl.addEventListener("click", switchMode)
function switchMode(){

        // ligthModeEl.classList.toggle("hidden")
        // darkModeEl.classList.toggle("hidden")

    // if current state is light, switch to dar
    // Get current state? how 
    // Who are the elements that need to toggle? 
    // container
    // body text color
    // button background color
}