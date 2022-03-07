import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs Fetch', () => {

    test('Debería traer 10 elementos', async () => {
        const gifts = await getGifs('Sos groso');
        expect(gifts.length).toBe(10);
    })

    test('Debería traer 0 elementos por no tener parámetro', async () => {
        const gifts = await getGifs('');
        expect(gifts.length).toBe(0);
    })



})