module.exports = function getZerosCount(number, base) {
    var multipleSet = {};
    var result = {};
    var ELEMENTARY = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];

    while (base > 1) {
        for (var element of ELEMENTARY) {
            if (base % element === 0) {
                multipleSet[element] = multipleSet[element] || 0;
                multipleSet[element]++;
                base /= element;
                break;
            }
        }
    }
    for (var element in multipleSet){
        result[element] = Math.floor(getElementMultiplierCount(number, element) / multipleSet[element])
    }
    function getElementMultiplierCount(number, element) {
        var power = 1;
        var result = 0;
        var poweredMultiplier = element ** power;

        while (number >= poweredMultiplier){
            number = number - number % poweredMultiplier;
            result += number / poweredMultiplier;
            poweredMultiplier = element ** ++power;
        }
        return result
    }
    return Object.values(result).sort((a, b) => a - b)[0];
};
