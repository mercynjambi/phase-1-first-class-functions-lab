const drivers = ["Antonia", "Nuru", "Amari", "Mo"]

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(FareMultiplier){
    return function(value){
        return value * FareMultiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, func){
    return func(drivers);

}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
}







