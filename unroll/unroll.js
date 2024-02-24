function unroll(squareArray) {
    let result = [];
    while (squareArray.length > 0) {
        result = result.concat(squareArray.shift());
        if (squareArray.length > 0 && squareArray[0].length > 0) {
            for (let i = 0; i < squareArray.length; i++) {
                result.push(squareArray[i].pop());
            }
        }
        if (squareArray.length > 0) {
            result = result.concat(squareArray.pop().reverse());
        }

        if (squareArray.length > 0 && squareArray[0].length > 0) {
            for (let i = squareArray.length - 1; i >= 0; i--) {
                result.push(squareArray[i].shift());
            }
        }
    }
    return result;
}

module.exports = unroll;
