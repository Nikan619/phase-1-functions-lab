// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber >= 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}
function distanceFromHqInFeet(blocks) {
  let block = distanceFromHqInBlocks(blocks);
  let feet = block * 264;
  return feet;
}
function distanceTravelledInFeet(start, destination) {
  let distance = Math.abs(start - destination);
  let distanceFeet = distance * 264;
  return distanceFeet;
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    let price = feet - 400;
    let dollar = price * 0.02;
    return dollar;
  } else if (feet > 2000 && feet < 2500) {
    let price1 = 25;
    return price1;
  } else if (feet > 2500) return "cannot travel that far";
}
