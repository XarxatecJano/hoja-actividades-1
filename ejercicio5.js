//console.log(Date.now());
const dateGenerated = new Date();
let day = dateGenerated.getDate();
if (day<10) day = `0${day}`;
let month = dateGenerated.getMonth() + 1;
if (month<10) month = `0${month}`;
const year = dateGenerated.getFullYear();
const dateParsed = `${day}/${month}/${year}`;
console.log(dateParsed);