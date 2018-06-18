import React from 'react';
import Dropdown from '../../../../src/components/shared/Dropdown';

describe('Dropdown', () => {
  it('renders correctly when type is simple notification', () => {
    const shallowWrapper = shallow(<Dropdown
      type="notification"
      toggler={<p>Click Me</p>}
      content={<div>Hey</div>}
    />);


    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });

  it('renders correctly when type is admin notification', () => {
    const shallowWrapper = shallow(<Dropdown
      type="admin-notification"
      toggler={<p>Click Me</p>}
      content={<div>Hey</div>}
    />);


    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });

  it('toggles showContent state to true on click', () => {
    const wrapper = mount(<Dropdown
      type="notification"
      toggler={<p>Click Me</p>}
      content={<div>Hey</div>}
    />);

    wrapper.find('button#dropdown-toggler').simulate('click');
    expect(wrapper.state('showContent')).toEqual(true);

    wrapper.find('button#dropdown-toggler').simulate('click');
    expect(wrapper.state('showContent')).toEqual(false);
    wrapper.unmount();
  });
});