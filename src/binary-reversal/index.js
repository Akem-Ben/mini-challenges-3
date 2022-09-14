/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    const convert = parseInt(value).toString(2).padStart(8,0).split("").reverse().join("") /*This is responsible for converting the inputted value (which is a string) to an integer. 
    The parseInt method will parse a string, then returns an integer. The .tostring(2) method converts the parsed integer into binary. 
    The binary number is padded and then converted to an array (.split("")), reversed and converted back to a string (.join("")).*/
    const result = parseInt(convert,2); //This line then parses the new string and it is returned as a binary integer.
    return result.toString()
}

module.exports = binaryReversal;
