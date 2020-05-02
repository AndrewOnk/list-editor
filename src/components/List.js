import React, {Component} from 'react';
import ListItem from "./ListItem";

class List extends Component {
  state = {
    items: this.props.items,
    newItem: ''
  };

  addItem = (newItem) => {
    const newItems = [...this.state.items, {name: newItem}];
    this.setState({
      items: newItems,
      newItem: ''
    })
    if(this.props.updateParentChildren) this.props.updateParentChildren(this.props.parentItemIndex, newItems);
  };

  updateChildren = (index, children) => {
    let item = this.state.items[index];
    item.children = children;
    const newItems = [
      ...this.state.items.slice(0, index),
      item,
      ...this.state.items.slice(index+1, this.state.items.length),
    ]
    this.setState({
      items: newItems
    })

    if(this.props.updateParentChildren) this.props.updateParentChildren(this.props.parentItemIndex, newItems);
  };

  handleAddSublist = (indexItem) => {
    let item = this.state.items[indexItem];

    if(item && !item.hasOwnProperty('children')) {
      item.children = [];
      this.setState({
        items: [
          ...this.state.items.slice(0, indexItem),
          item,
          ...this.state.items.slice(indexItem+1, this.state.items.length),
        ]
      })
      if(this.props.updateParentChildren) this.props.updateParentChildren(this.props.parentItemIndex, []);
    }
  };

  handleRemoveSublist = (indexItem) => {
    let item = this.state.items[indexItem];

    if(item && item.hasOwnProperty('children')) {
      delete item.children;
      const newItems = [
        ...this.state.items.slice(0, indexItem),
        item,
        ...this.state.items.slice(indexItem+1, this.state.items.length),
      ]
      this.setState({
        items: newItems
      })
      if(this.props.updateParentChildren) this.props.updateParentChildren(this.props.parentItemIndex, newItems);
    }
  };

  handleUp = (index) => {
    if(index !== 0) {
      let newItems = [...this.state.items];
      [newItems[index], newItems[index-1]] = [newItems[index-1], newItems[index]]
      this.setState({
        items: newItems
      })

      if(this.props.updateParentChildren) this.props.updateParentChildren(this.props.parentItemIndex, newItems);
    }
  };

  handleDown = (index) => {
    if(index < this.state.items.length-1) {
      let newItems = [...this.state.items];
      [newItems[index], newItems[index+1]] = [newItems[index+1], newItems[index]]
      this.setState({
        items: newItems
      })

      if(this.props.updateParentChildren) this.props.updateParentChildren(this.props.parentItemIndex, newItems);
    }
  };

  onAddNewItem = () => {
    this.addItem(this.state.newItem);
  };

  onRemoveItem = (index) => {
    const newItems = this.state.items.filter((_, i) => i !== index);

    this.setState({
      items: newItems
    })
    if(this.props.updateParentChildren) this.props.updateParentChildren(this.props.parentItemIndex, newItems);
  };

  handleChangeNewItem = (e) => {
    this.setState({
      newItem: e.target.value
    })
  };

  render() {
    return (
      <ul>
        {
          this.state.items.map((item, index) => {
            return (
              <li key={`${item.name}-${index}`}>
                <ListItem index={index}
                          name={item.name}
                          hasChildren={item.hasOwnProperty('children')}
                          handleUp={this.handleUp}
                          handleDown={this.handleDown}
                          handleRemoveSublist={this.handleRemoveSublist}
                          handleAddSublist={this.handleAddSublist}
                          onRemoveItem={this.onRemoveItem}
                          itemsSize={this.state.items.length}
                />
                {
                  item.children && <List items={item.children}
                                         parentItemIndex={index}
                                         updateParentChildren={this.updateChildren}
                  />
                }
              </li>
            )
          })
        }
        <li>
          <input className='input' onChange={this.handleChangeNewItem} value={this.state.newItem}/>
          <button className='abb-btn' onClick={this.onAddNewItem}>Add</button>
        </li>
      </ul>
    );
  }
}

export default List;