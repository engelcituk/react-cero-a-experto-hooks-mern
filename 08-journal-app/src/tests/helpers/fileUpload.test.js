import { fileUPload } from '../../helpers/fileUpload';

describe('Pruebas en el fileUpload',  () => {
    
    test('Debe de cargar un archivo y retorar el URL', async () => {

        const resp = await fetch('https://img.pngio.com/una-nube-blanco-stroke-material-imagen-png-para-descarga-gratuita-nube-png-650_410.png');
        const blob = await resp.blob();


        const file = new File([blob],'foto.jpg');
        const url = await fileUPload(file);

        expect( typeof url ).toBe('string');
    })
    

    /*test('Debe de retornar un error', async () => {

        const file = new File([],'foto.jpg');
        const url = await fileUPload(file);

        expect( url ).toBe(null);
    })*/

})
