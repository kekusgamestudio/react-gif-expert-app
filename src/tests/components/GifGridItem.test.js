import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';



describe('Pruebas en <GifGridItem />', () => {
    test('Debe mostrar <GifGridItem /> correctamente', () => {
        const wrapper = shallow(<GifGridItem />)
        expect(wrapper).toMatchSnapshot();
    });

});


