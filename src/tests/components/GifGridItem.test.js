import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';


describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el título', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener una imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.props());
        //console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener la animación de giro', () => {
        const div = wrapper.find('div');
        //console.log(div.prop('className').includes('animate__flipInY'));
        expect(div.prop('className').includes('animate__flipInY')).toBe(true);
    });

});


