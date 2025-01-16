function calculateEllipseArea(){

    const major = getInputValueById('ellipse-major-radius');
    const minor = getInputValueById('ellipse-minor-radius');

    const area = 3.14 * major * minor;

    setInnerTextById('show-calculation',area);
}