import cloudinary from 'cloudinary';
import { fileUPload } from '../../helpers/fileUpload';

cloudinary.config({ 
    cloud_name: 'di3qzyeke', 
    api_key: '786616524812658', 
    api_secret: 'Ow80aa6Bv0VsjGgbsuHfEE1VVYQ' 
  });


describe('Pruebas en el fileUpload',  () => {
    
    test('Debe de cargar un archivo y retorar el URL', async (done) => {

        const resp = await fetch('https://img.pngio.com/una-nube-blanco-stroke-material-imagen-png-para-descarga-gratuita-nube-png-650_410.png');
        const blob = await resp.blob();


        const file = new File([blob],'foto.jpg');
        const url = await fileUPload(file);

        expect( typeof url ).toBe('string');

        //borrar por id de la imagen
        const segments = url.split('/');
        const imgId = segments[ segments.length - 1].replace('.png','');

        cloudinary.v2.api.delete_resources(imgId, {}, ()=> {
            done();
        });
    })
    

    /*test('Debe de retornar un error', async () => {

        const file = new File([],'foto.jpg');
        const url = await fileUPload(file);

        expect( url ).toBe(null);
    })*/

})
