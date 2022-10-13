/////////KEYS
function keyTyped() {
    if (keyCode === 83) { // if "s" is pressed
        save(myTitle + '.png');
    }
    else if (keyCode === 86) { // if "v" is pressed
        save(myTitle + '.svg');
    }
    ////////////LOOP/ NO LOOP
    else if (keyCode === 76) { // if "l" is pressed
        loop()
    }
    else if (keyCode === 78) { // if "l" is pressed
        noLoop()
    }
}
