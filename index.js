function distanceFromHqInBlocks(someValue) {
    const hq = 42
    let result 
        if (someValue >= hq) {
        result = someValue -= hq
    }
    else if (someValue <= hq) {
        result = (hq - someValue) 
    }
    return result
}

function distanceFromHqInFeet(someValue) {
   let block = (distanceFromHqInBlocks(someValue))
   const ft = 264
   let result = block * ft 
   return result 
}

function distanceTravelledInFeet(start, destination) {
    const ft = 264
    let result
    if (destination > start) {
    result = (destination -= start) * ft
    }
    else if ( destination < start) {
        result = (start -= destination) * ft
    }
    return result
  }

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
let result 
if (distance <= 400) {
    result = distance * 0
}
else if ( distance >= 400 && distance <= 2000) {
    result = 0.02 * (distance - 400) 
  }
else if (distance >= 2000 && distance <= 2500) {
    result = 25 
}
else if ( distance > 2500) {
    result = "cannot travel that far"
}
return result
}
   