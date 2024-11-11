// Generate and implement random theme of colors
function colorGen() {
    const theme = document.getElementById("theme");
    if (!theme || !theme.value) {
        console.error("Theme element or value is missing.");
        return; // Exit if theme or its value is missing
    }

    const segments = theme.value.split('-');
    let sHigh = Number(segments[0]);
    let sLow = Number(segments[1]);
    let bHigh = Number(segments[2]);
    let bLow = Number(segments[3]);
    let colorArray = [];

    // Generate random color values
    for (let i = 0; i < 5; i++) {
        let saturation = hslGen(sHigh, sLow);
        let brightness = hslGen(bHigh, bLow);
        let hue = Math.floor(Math.random() * 360); // Random hue between 0 and 360
        colorArray[i] = `hsl(${hue}, ${saturation}%, ${brightness}%)`;
    }

    // Select elements outside the loop for improved efficiency
    const boxes = document.querySelectorAll(".color-box");
    const texts = document.querySelectorAll(".text");

    // Change color of divs and update text
    boxes.forEach((element, index) => {
        if (colorArray[index]) {
            texts[index].innerText = colorArray[index];
            element.style.backgroundColor = colorArray[index];
        }
    });
}

// Function for generating numbers within a range
function hslGen(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate initial colors on document load
document.addEventListener("DOMContentLoaded", colorGen);
