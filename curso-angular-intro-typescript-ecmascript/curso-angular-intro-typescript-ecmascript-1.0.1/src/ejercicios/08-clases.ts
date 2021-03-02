class PersonaNormal {
    constructor(
        public nombre: string, 
        public direccion: string) {
        
    }
  }


class Hero extends PersonaNormal{
  //   private alterEgo: string;
  //   public edad: number;
  //   static nombreReal: string;

  //     constructor(alterEgo: string){
  //      this.alterEgo = alterEgo;
  //     }
  constructor(
    public alterEgo: string,
    public edad?: number,
    public nombreReal?: string
  ) {
    super(nombreReal, 'New York, Usa');
  }
}



const spiderman = new Hero("Ironman");
console.log(spiderman);
