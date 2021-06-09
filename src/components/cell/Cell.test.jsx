import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Cell from './Cell';
import styles from './Cell.css';

describe('Cell component', () => {
  it('Cell renders correctly', () => {
    const tree = renderer.create(<Cell />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have born styling class', () => {
    const wrapper = shallow(<Cell alive={2} onClick={jest.fn()} i={1} j={1}/>);
    expect(wrapper.find(`.${styles.born}`)).toHaveLength(1);
  });
});
