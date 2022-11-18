import { expect, assert } from '@open-wc/testing';
import * as dataTest from "../src/testPrueba/test";



describe("batalla", function () {

    it("no se que decir", function () {
        let data =  dataTest.battleRamdom();
        let poke = {                                                                                                                                                          
            nombre: 'ivysaur',                                                                                                                                       
            hp: 60,                                                                                                                                                  
            attack: 62,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
          };
          assert.typeOf(
            data, "Object", "no es un objetc"
          )
    })

})






