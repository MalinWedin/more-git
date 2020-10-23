/**
 * Will generate a random number and print it into the DOM.
 */
function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber);
    //console.log('test')
}

/**
 * Generates a random number and returns it. 
 * @returns {number} the random number that was generated 
 */
function getRandomNumber() {
    const randomNumber = Math.random() * 100
    return Math.round(randomNumber);
}

/**
 * Places the passed in number into the DOM along with a comma and space
 * @param {Number} number to be put into the DOM
 */
function addNumberToPage(number) {
    const div = document.getElementById('results')
    div.append(number + ', ');
    //console.log(div, number);
}