const estudiantes = [
    { id: 1, nombre: 'Ever' },
    { id: 2, nombre: 'Yeison' },
    { id: 3, nombre: 'Eduardo' },
    { id: 4, nombre: 'Julian' },
    { id: 5, nombre: 'Pedro' }
];

const materias = [
    { id: 1, nombre: 'Matematicas' },
    { id: 2, nombre: 'Espanol' }
];

const numeroaleatorio = (numero) => {
    let num = Math.round(Math.random(numero) * numero);
    if (num <= 0 || num === undefined) {
        return numeroaleatorio(numero);
    } else {
        return num;
    }
}

const getEstudiante = (id) => {
    return new Promise((resolve, reject) => {
        const estudiante = estudiantes.find(e => e.id === id)?.nombre;
        (estudiante) ? resolve(estudiante) : reject(`El estudiante con id ${id} no existe`);
    });
}

const getMateria = (id) => {
    return new Promise((resolve, reject) => {
        const materia = materias.find(e => e.id === id)?.nombre;
        (materia) ? resolve(materia) : reject(`La materia con id ${id} no existe`);
    });
}

let arreglo1 = [];
let total = [];
let arreglo2 = [];
let estu1 = [];
let estu2 = [];
let bandera2 = true;
let bandera = true;
let x = 0;
let b = 0;
const getInfoEmpelado = async () => {
    try {

        for (let i = 0; i < estudiantes.length; i++) {
            let nus = numeroaleatorio(5);
            const estudy = await getEstudiante(nus);
            if (bandera && (estu1.indexOf(estudy) === -1)) {
                estu1.push(estudy);
                x++;
                if (x === 2) {
                    bandera = false;
                }
            } else if (bandera2 && (estu2.indexOf(estudy) === -1) && (estu1.indexOf(estudy) === -1)) {
                estu2.push(estudy);
                b++;
                if (b === 3) {
                    bandera2 = false;
                }
            } else {
                i -= 1;
            }
        }
        let z = true;
        let w = true;
        for (let i = 0; i < materias.length; i++) {
            let nu = numeroaleatorio(2);
            const mate = await getMateria(nu);
            if(mate === 'Espanol' && w){
                arreglo1.push({ materia: mate, estudiantes: estu1 });
                w = false;
            }else if(mate === 'Matematicas' && z) {
                arreglo2.push({ materia: mate, estudiantes: estu2 });
                z = false;
            } else {
                i -= 1;                
            }
        }
        console.log(arreglo1);
        console.log(arreglo2);
    } catch (error) {
        console.log(error);
    }
}
console.log(getInfoEmpelado());
