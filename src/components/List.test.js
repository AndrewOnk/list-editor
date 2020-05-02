import React from 'react';
import { shallow, mount } from 'enzyme';
import List from "./List";
import ListItem from "./ListItem";

describe('ListItem Component', () => {
  describe('render', function () {
    it('renders input', () => {
      let list = shallow(<List items={[{name: 'Some Name'}, {name: 'Some Other Name'}]}/>)
      expect(list.find('input').exists()).toBeTruthy();
    });

    it('renders Add button', () => {
      let list = mount(<List items={[{name: 'Some Name'}, {name: 'Some Other Name'}]}/>)
      expect(list.find('.abb-btn').exists()).toBeTruthy();
    });

    it('renders list items', () => {
      const items = [{name: 'Some Name'}, {name: 'Some Other Name'}]
      let list = mount(<List items={items}/>);
      list.setState({items: items, newItem: ''})
      expect(list.find(ListItem)).toHaveLength(2);
    });

    it('renders list children items', () => {
      const items = [ { name: 'Some Name', children: [{ name: 'Some Child Name' }] }, { name: 'Some Other Name' } ];
      let list = mount(<List items={items}/>);
      list.setState({items: items, newItem: ''});
      expect(list.find('List')).toHaveLength(2);
    });

    it('does not render child list when item does not have children', () => {
      const items = [ { name: 'Some Name' }, { name: 'Some Other Name' } ];
      let list = mount(<List items={items}/>);
      list.setState({items: items, newItem: ''});
      expect(list.find('List')).toHaveLength(1);
    });
  });

  describe('onAddNewItem', function () {
    it('adds new item into state', () => {
      const items = [ { name: 'Some Name' }, { name: 'Some Other Name' } ];
      let list = mount(<List items={items}/>);
      list.setState({items: items, newItem: 'Some New Item'});
      list.find('.abb-btn').simulate('click');
      expect(list.state().items).toEqual([{ name: 'Some Name' }, { name: 'Some Other Name' }, { name: 'Some New Item' }])
    });

    it('adds new item into parentList state', () => {
      const parentItems = [ { name: 'Some Parent Name', children: [] }, { name: 'Some Other Parent Name' } ];
      let parentList = mount(<List items={parentItems}/>);
      parentList.setState({items: parentItems, newItem: ''});

      let input = parentList.findWhere(node => node.key() === 'Some Parent Name-0').find('.input');
      input.simulate('change', { target: { value: 'Some Child New Item' } });
      let button = parentList.findWhere(node => node.key() === 'Some Parent Name-0').find('.abb-btn');
      button.simulate('click');

      expect(parentList.state().items).toEqual([
        { name: 'Some Parent Name', children: [{name: 'Some Child New Item'}] },
        { name: 'Some Other Parent Name' }
        ])
    });
  })

  describe('onRemoveItem', function () {
    it('removes item from state', () => {});
    it('removes item from parentList state', () => {});
  })
});