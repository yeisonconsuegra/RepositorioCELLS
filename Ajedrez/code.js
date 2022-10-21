//creamos el elemento que nos permite centrar el contenido en pantalla
const center = document.createElement('center');


//creamos el elemento de la tabla
const mesa = document.createElement('table');
for (var i = 0; i < 8; i++) {

    //creamos una fila por cada iteracion del for padre
    var tr = document.createElement('tr');
    for (var j = 0; j < 8; j++) {

        //creamos cada celda iteracion
        var td = document.createElement('td');

        //fichas traseras

        if(i === 0 || i === 7){
            if(i === 0){
                //primeras fichas guerreras
                if(i == 0 && j == 0){
                    td.innerHTML = "T";
                }else if(i == 0 && j == 1){
                    td.innerHTML = "C";
                }else if(i == 0 && j == 2){
                    td.innerHTML = "A";
                }else if(i == 0 && j == 3){
                    td.innerHTML = "R";
                }else if(i == 0 && j == 4){
                    td.innerHTML = "RR";
                }else if(i == 0 && j == 5){
                    td.innerHTML = "A";
                }else if(i == 0 && j == 6){
                    td.innerHTML = "C";
                }else if(i == 0 && j == 7){
                    td.innerHTML = "T";
                }
            }else{
                //ultimas fichas guerreras
                if(i == 7 && j == 0){
                    td.innerHTML = "T";
                }else if(i == 7 && j == 1){
                    td.innerHTML = "C";
                }else if(i == 7 && j == 2){
                    td.innerHTML = "A";
                }else if(i == 7 && j == 3){
                    td.innerHTML = "R";
                }else if(i == 7 && j == 4){
                    td.innerHTML = "RR";
                }else if(i == 7 && j == 5){
                    td.innerHTML = "A";
                }else if(i == 7 && j == 6){
                    td.innerHTML = "C";
                }else if(i == 7 && j == 7){
                    td.innerHTML = "T";
                }
            }
        }

        // peones
        if(i === 1){
            for(let i = -1; i < 8; i++){
                td.innerHTML = "P"; // agregamos la letra en cada celda
            }
        }

        //peones abajo
        if(i === 6){
            for(let i = -1; i < 8; i++){
                td.innerHTML = "P"; // agregamos la letra en cada celda
            }
        }

        if ((i + j) % 2 == 0) {

            td.setAttribute('class', 'celda blanco');//e caso de que sea par lo pinta de blanco
            tr.appendChild(td);
        }

        else {
            td.setAttribute('class', 'celda negro');// en caso de que no sea par lo pinta de negro
            tr.appendChild(td);
        }
    }
    mesa.appendChild(tr); //agregamos cada fila en la mesa para crear el cuadro
}
center.appendChild(mesa);// agregamos la mesa dentro del elemento "center"
mesa.setAttribute('cellspacing', '0'); //espacio de las celdas
mesa.setAttribute('width', '290px'); //ancho de la mesa
document.body.appendChild(center);//agregamos el elemento center dentro del body