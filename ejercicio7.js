//saber la fecha de de hoy y guardarla
//guardar al fecha de navidad como una fecha
//restar esas fechas para que me devuelvan el número de días
//mostrar ese número de días por consola
const today = new Date();
const christmas = new Date("12/25/2022");
//para calcular el número de días paso de segundos a milisegundos, dividiendo entre 1000 y después a minutos, después a horas y después a días
//posteriormente redondeo a la parte entera y sumo un día
const daysUntilChristmas = Math.floor(((((christmas-today)/1000)/60)/60)/24)+1;
console.log(daysUntilChristmas);