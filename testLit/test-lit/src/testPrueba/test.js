var arrpok = [
  {
     nombre: 'bulbasaur',
      hp: 45,
      attack: 49,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  {
      nombre: 'ivysaur',
      hp: 60,
      attack: 62,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
  }
];

export function battleRamdom() {
  //let aleat = Math.floor(Math.random() * this.arrpok.length);
  let aleat = Math.floor(Math.random() * 10 % 2);
  let copiaArray = arrpok;

  let oneAttack = copiaArray[aleat];
  copiaArray = copiaArray.filter(
    nombre => nombre["nombre"] !== oneAttack["nombre"]
  );
  let twoAttack = copiaArray[0];

  //console.log("one -> ", oneAttack);
  //console.log("two -> ", twoAttack);

  return startBattle(oneAttack, twoAttack);
}

// ejecutar batalla
export function startBattle(first, second) {
  // TODO: this
  let hp1 = parseInt(first["hp"]);
  let hp2 = parseInt(second["hp"]);

  let pw1 = parseInt(first["attack"]);
  let pw2 = parseInt(second["attack"]);

  //console.log("primero", first, "segundo", second);

  while (hp1 > 0) {
    hp2 -= pw1;
    if (hp2 > 0) {
      hp1 -= pw2;
    } else {
      return first;
    }
  }
  return second;
}
  
