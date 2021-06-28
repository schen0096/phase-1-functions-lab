// Code your solution in this file!
const hq = 42
const ft = 264

function distanceFromHqInBlocks(num){
    return Math.abs(num - hq)
}

function distanceFromHqInFeet(num){
    return (Math.abs(num - hq ) * ft) 
}

function distanceTravelledInFeet(num1, num2){
    return (Math.abs(num1 - num2) * ft)
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
        return ((Math.abs(start - destination) * ft) - 400) * 0.02
    }  
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25
    }
    else {
        return 'cannot travel that far'
    }

}