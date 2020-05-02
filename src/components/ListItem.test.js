import React from 'react';
import { shallow } from 'enzyme';
import List from "./List";
import ListItem from "./ListItem";

describe('ListItem Component', () => {
  it('renders item name', () => {
    let list = <List items={[{name: 'Some Name'}, {name: 'Some Other Name'}]}/>
    const wrapper = shallow(<ListItem name={'Some Name'} index={0} parentList={list} hasChildren={false}/>);
    expect(wrapper.find('span').text()).toBe('Some Name');
  });

  it('renders upArrow when index > 0', () => {
    let list = <List items={[{name: 'Some Name'}, {name: 'Some Other Name'}]}/>
    const wrapper = shallow(<ListItem name={'Some Name'} index={1} parentList={list} hasChildren={false}/>);
    expect(wrapper.find('.up-button').exists()).toBeTruthy();
  })

  it('does not render upArrow when index == 0', () => {
    let list = <List items={[{name: 'Some Name'}, {name: 'Some Other Name'}]}/>
    const wrapper = shallow(<ListItem name={'Some Name'} index={0} parentList={list} hasChildren={false}/>);
    expect(wrapper.find('.up-button').exists()).toBeFalsy();
  })

  it('renders downArrow when item index is < of total items quantity', () => {
    let list = <List items={[{name: 'Some Name'}, {name: 'Some Other Name'}]}/>
    const wrapper = shallow(<ListItem name={'Some Name'} index={0} parentList={list} hasChildren={false} itemsSize={2}/>);
    expect(wrapper.find('.down-button').exists()).toBeTruthy();
  })

  it('does not render downArrow  when item is the last element in list', () => {
    let list = <List items={[{name: 'Some Name'}, {name: 'Some Other Name'}]}/>
    const wrapper = shallow(<ListItem name={'Some Name'} index={1} parentList={list} hasChildren={false} itemsSize={2}/>);
    expect(wrapper.find('.down-button').exists()).toBeFalsy();
  })

  it('renders Remove Sublist button item hasChildren', () => {
    let list = <List items={[{name: 'Some Name'}, {name: 'Some Other Name'}]}/>
    const wrapper = shallow(<ListItem name={'Some Name'} index={1} parentList={list} hasChildren={true} itemsSize={2}/>);
    expect(wrapper.find('.remove-sublist').exists()).toBeTruthy();
  })

  it('renders Add Sublist button item hasChildren', () => {
    let list = <List items={[{name: 'Some Name'}, {name: 'Some Other Name'}]}/>
    const wrapper = shallow(<ListItem name={'Some Name'} index={1} parentList={list} hasChildren={false} itemsSize={2}/>);
    expect(wrapper.find('.add-sublist').exists()).toBeTruthy();
  })
});