

describe('Pruebas en el archivo demo.test.js ⚛️', () =>{

    test( 'debe ser iguales los 2 strings ' , () =>{

        // 1- inicialización
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 );
    
    })

});


