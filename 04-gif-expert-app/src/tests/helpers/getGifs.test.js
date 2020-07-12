import { getGifs } from '../../helpers/GetGifs';


describe('Pruebas en helper getGifs', ()=> {
 
    test('debe de traer 10 elementos ', async () => {
        const gifs = await getGifs('One Piece');
        expect(gifs.length).toBe(10);
     });
})