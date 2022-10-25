let globa = [];
const dataInfo = () => {
    let nombre = document.getElementById('nombre').value;
    let nacimiento = document.getElementById('nacimiento').value;
    let documento = document.getElementById('documento').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let arregloCabesera = ["nombre","nacimiento","documento","correo","telefono"];
    let arregloCeldas = [nombre,nacimiento,documento,correo,telefono];
    tablaInfo(arregloCeldas,arregloCabesera);

}

const tablaInfo = (data1,data) => {
        const container = document.getElementById('tablita');
        const tabla = document.createElement('table');
        tabla.id='tablaDatos';
    if(container.childNodes.length > 0){
        let tabla = document.querySelector('table');
        container.removeChild(tabla);
    }
        const cabecera = document.createElement('thead');
        const filaCab = document.createElement('tr');
        data.forEach(d => {
            let col = document.createElement('td');
            col.innerText = d;
            filaCab.appendChild(col);
        });
        cabecera.appendChild(filaCab);
        tabla.appendChild(cabecera);
    
        const cuerpo = document.createElement('tbody');
        let fil = document.createElement("tr");
        data1.forEach(f => {
                let c = document.createElement('td');
                c.innerText = f;
                fil.appendChild(c);
            cuerpo.appendChild(fil);
        });
        
        tabla.appendChild(cuerpo);
        container.appendChild(tabla);
        descargar();
    
    
}

const descargar = () => {
    const botoId = document.getElementById('descargar');
    botoId.innerHTML = 'Descargar';
    botoId.setAttribute("onclick", "prepararData('tablaDatos');");
}


const prepararData = ((idtabla) => {
    const tabla = document.getElementById(idtabla);
    let data ='';
    if(tabla){
        for (let f=0, fila; fila = tabla.rows[f]; f++){
            for (let c = 0, col; col=fila.cells[c]; c++){
                //console.log(col.innerText);
                data += col.innerText + ';';
            }
            data = data.replace(/.$/, '');
            data += '\n';
        }
    }
    
    descargarArchivo(data);
});

const descargarArchivo = (data) => {
    const fileName = 'ArchivoS.csv';
    let reader = new FileReader();
    let blob = new Blob(['\ufeff', data], {type: 'text/csv'});
    reader.readAsDataURL(blob);
    reader.onload = ((e) => {
        let link = document.createElement('a');
        link.href = e.target.result;
        link.target = '_blank';
        link.download = fileName;
        let eventoClie = new MouseEvent('click', {
            view:window,
            bubbles: true,
            cancelable: true
        });

        link.dispatchEvent(eventoClie);
        (window.URL).revokeObjectURL(link.href);
    });
}


