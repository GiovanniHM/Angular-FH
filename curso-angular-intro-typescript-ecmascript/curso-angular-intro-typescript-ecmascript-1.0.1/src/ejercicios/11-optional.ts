interface Pasajero{
    nombre: string,
    hijo?: string[]
  }
  
  const pasajero: Pasajero ={
    nombre: 'test'
  }
  
  const pasajero2: Pasajero ={
    nombre: 'test',
    hijo: ['miniTest1', "minitest2", "minitest7"]
  }
  
  function imprimeHijos(printHIjos: Pasajero): void{
  
    //Encadenamiento opcional
    const cuantosHijos = printHIjos.hijo?.length || 0;
    console.log(cuantosHijos);
  
  }
  
  imprimeHijos(pasajero2);
  
  