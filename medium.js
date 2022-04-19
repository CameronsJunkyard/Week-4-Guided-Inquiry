const input = process.argv[2] - 1
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

if (month[input]) {console.log(month[input])}
else console.log("Do 'node medium.js [Month #]' \nPlease enter a valid month number (1-12)")