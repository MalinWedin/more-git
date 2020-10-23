// start function when button is clicked..
function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber);
    //console.log('test')
}

// Helper function 1
function getRandomNumber() {
    const randomNumber = Math.random() * 100
    return Math.random(randomNumber);
}

// Helper function 2 
function addNumberToPage(number) {
    console.log(number);
}