//Array varios tipos de datos
let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Halen', false, 100];

//Tipo inico
let poderes: string[] = ['fire', 'ok'];

//interfaces 

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    //Indica que puede o no tener el valor
    puebloNatal?: string;
}

//obj 

const personaje: Personaje = {
    nombre: 'Batman',
    hp: 150,
    habilidades: ['fire', 'Counter']
 
}

console.table(personaje);

