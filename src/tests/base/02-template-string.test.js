import  '@testing-library/jest-dom';

import { getSaludo } from "../../base/base-pruebas/02-template-string";

describe('Pruebas de 02-template-string.test.js 🤷‍♂️', () => {

    test('getSaludo debe retornar hola fernando', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe('Hola '+ nombre+ '!');

       // console.log(saludo);
    })

    // getSaludo debe retornar Hola Carlos! si no hay argumento en nombre
    test('Debe retornar Hola Carlos! sin argumento', () => {
        const saludo = getSaludo(  );

        expect( saludo ).toBe('Hola Carlos!');

        console.log(saludo);
    })
    
    
});