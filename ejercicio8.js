const dateAsChain = prompt("Ingrese una fecha con este formato MM/DD/YYYY, teniendo en cuenta que si el mes o el día es menor que 10 sólo escribiríamos una cifra");
const numberDay = new Date(dateAsChain).getDay();
let nameDay;
if (numberDay==0) nameDay="domingo";
if (numberDay==1) nameDay="lunes";
if (numberDay==2) nameDay="martes";
if (numberDay==3) nameDay="miércoles";
if (numberDay==4) nameDay="jueves";
if (numberDay==5) nameDay="viernes";
if (numberDay==6) nameDay="sábado";
console.log(`El ${dateAsChain} fue ${nameDay}`);