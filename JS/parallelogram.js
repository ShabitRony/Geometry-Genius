function calculateParalleloGramArea(){
    const baseinit = getInputValueById('parallelogram-base')
    // console.log("Base is :" , base);
    const base = parseFloat(baseinit);
    // console.log(baseFinal);
    const heightinit = getInputValueById('parallelogram-height')
    const height = parseFloat(heightinit);

    const area = base*height;
    console.log(area);
    
    
    setInnerTextById('show-calculation', area);
    
    
    
}


function getInputValueById(inputId){
    return document.getElementById(inputId).value;

    // const inputValue = document.getElementById(inputId);
    // const inputValueText = parseFloat(inputValue.value);
    // return inputValueText;     
}


function setInnerTextById(elementId,area ){
    document.getElementById(elementId).innerHTML = `The area of a parallelogram is : ${area}`;
}