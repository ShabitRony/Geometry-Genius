function  calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBase = triangleBaseInput.value;
    const base = parseFloat(triangleBase)
    // console.log(base);
    
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeight = triangleHeightInput.value;
    const height = parseFloat(triangleHeight)
    // console.log(height);


    const area = 0.5*base*height;
    console.log(area);

    const display = document.getElementById('show-calculation');
    display.innerHTML = `The area of the triangle is: ${area}`;
    // display.innerText = area;
    
}