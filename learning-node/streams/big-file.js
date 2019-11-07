const fs = require('fs');
const file = fs.createWriteStream('./big');

for (let i = 0; i<= 1e6; i++){
    file.write('El método getDay() devuelve el día de la semana de la fecha especificada en función de la fecha local; siendo 0 (Domingo) el primer día.');
}

file.end();