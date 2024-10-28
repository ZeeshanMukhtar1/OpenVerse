// generate and implement random theme of colors
function colorGen() {
    let theme = document.getElementById("theme")
    const selectedValue = theme.value;
    const segments = selectedValue.split('-');
    let sHigh = Number(segments[0]);
    let sLow = Number(segments[1]);
    let bHigh = Number(segments[2]);
    let bLow = Number(segments[3]);
    let colorArray = []

    // get random color values
    for (let i = 0; i < 5; i++) {
        let saturation = hslGen(sHigh, sLow);
        let brightness = hslGen(bHigh, bLow);
        let hue = Math.floor(Math.random() * 360); // Random hue between 0 and 360
        colorArray[i] = `hsl(${hue}, ${saturation}%, ${brightness}%)`;
    }

    // changing color of divs
    let boxes = document.querySelectorAll(".color-box");
    boxes.forEach((element, index) => {
        let iP = document.querySelectorAll(".text")
        iP[index].innerText = `${colorArray[index]}`
        element.style.backgroundColor = colorArray[index];
    });
}

// function for number generation between a range
function hslGen(max, min) {
    let color = Math.floor(Math.random() * (max - min + 1)) + min;
    return color;
}


// for first generation
colorGen()