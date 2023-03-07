let age = 43;
let pAge = 65;
let year = 365;

//TODO - cik pilni gadi un cik īsie gadi ir no dzimšanas līdz pensijas vecumam = piem 1980 + 65 = 2045 - gads kad ir jaiet pensijā
//TODO - cik kopā ir dienas no 1980 līdz 2045 gadam ieskaitot pilno un īso gadu.
//TODO - cik kopā ir diens ieskaito pilno un īso gadu no dzimšans līdz šodienai
//TODO - cik dienas ir atlicis visas dienas - nodzīvotās dienas
//TODO - kurā datumā zinot cik dineas vēl ir palikušas ir jāiet pensijā.


// const daysLeftTillWorkEnd = function(age, pensionAge, year){

//     let leftYears = pensionAge - age;
//     let daysLeft = leftYears * year;

//     return daysLeft;
//    // return console.log('you have left '+ daysLeft + ' till retirement');
// };

// console.log(daysLeftTillWorkEnd(age,pAge,year));





// Here are the rules of leap years:

// A year may be a leap year if it is evenly divisible by 4.
// Years that are divisible by 100 (century years such as 1900 or 2000)
//  cannot be leap years unless they are also divisible by 400.
//   (For this reason, the years 1700, 1800, and 1900 were not leap years, but the years 1600 and 2000 were.)

//TODO leap year calculator

// let lYear = 1800;


// const leapYearCalculator = function(inputYear){
    
//     if((inputYear % 4 == 0 && inputYear % 100 == 0 && inputYear % 400 == 0)){
//       return inputYear +' is leap year.';
//     }   
//     else {
//       return  inputYear + ' is not leap year.';
//     }    
// }
// console.log(leapYearCalculator(lYear));


// console.log(lYear % 4 );

// console.log(lYear % 100 );

// console.log(lYear % 400);



let currentYear = new Date;
let userAge = 43;
let pensionAgeLV = 65;
let leftToWork;



const yearTillPension = function(userInputAge, countryPensionAge){
   return leftToWork = countryPensionAge - userInputAge;
}

yearTillPension(userAge, pensionAgeLV);

console.log(currentYear.getFullYear() + leftToWork);

for()
