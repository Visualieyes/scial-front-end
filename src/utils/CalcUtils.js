export const CalculatePercentage = (currentVal, lastVal) =>{
    return Math.trunc(((currentVal-lastVal)/lastVal)*100)
}