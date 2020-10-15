/** 
 * * set interval is a repeating action!  Like a heartbeat!
 * * It is stored as a number
 * *
 * * It is structured like this!
 * * let myPulse = setInterval(() => {
 * *  //thing to do
 * * }, //time(in milliseconds) to wait in between);
 * 
 * * A good strong heartbeat is 60bpm. Lets make one!
 * * The sound of a heart beat can be very soothing
 */ 

let myPulse = setInterval(() => {
    console.log("th-thump");
}, 1000);

/**
 * * Intervals are often used to keep time in games
 * * We can turn off an interval using the clear interval command
 * * Uncomment the line of code below to turn off our interval
 */

clearInterval(myPulse);

/**
 * * Sometimes we want things to only run once, in a day or a lifetime, or in your program  
 * * Some examples: growing a new set of teeth, wisdom tooth removal, biological birth, tasting your lunch
 * 
 * * the structure is very similar to the interval
 * * let intervalName = setTimeout(() => {
 * *      What to do when the interval completes
 * * }, timeToCompletionInMilliseconds);
 */
console.log("About to pay tuition!  Eeeek my bank account!");
let payingTuition = setTimeout(() => {
    console.log("Now it is paid!");
}, 10000);

