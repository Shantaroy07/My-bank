//function for getting inputfield Value
function getInputValueBy(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

//function for getting elements innerText
function getElementValueByID(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}


//function for setting elements innerText
function setTextElementById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}
