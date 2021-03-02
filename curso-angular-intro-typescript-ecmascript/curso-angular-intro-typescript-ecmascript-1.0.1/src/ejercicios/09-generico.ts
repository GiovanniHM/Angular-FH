function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyInt= queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,4,57,8]);
let soyExplicito = queTipoSoy<number>(200);

console.log(soyString);

