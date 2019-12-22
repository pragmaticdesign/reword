import * as React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './Helloworld';

describe('components/HelloWorld', () => {
    it('renders', () => {
        const component = shallow(<HelloWorld />);
        expect(component.html()).toEqual('<p>Hello World</p>');
    });
});
