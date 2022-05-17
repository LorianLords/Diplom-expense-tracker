export const validateNumber = (number) => {
    if(number === "") {
        return "0"
    }
    if(number.startsWith("0") && number.length > 1) {
        return number.slice(1, number.length)
    }
    return number
}