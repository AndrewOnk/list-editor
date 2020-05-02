import React from 'react';

const ListItem = ({ index,
                    name,
                    hasChildren,
                    handleUp,
                    handleDown,
                    handleRemoveSublist,
                    handleAddSublist,
                    onRemoveItem,
                    itemsSize}) => {
  let upArrow = () => {
    if(index > 0) {
      return <button className='up-button' onClick={() => handleUp(index)}>&uarr;</button>
    }
  };

  let downArrow = () => {
    if(index < itemsSize-1) {
      return <button className='down-button' onClick={() => handleDown(index)}>&darr;</button>
    }
  };

  let sublistButton = () => {
    return hasChildren ? <button className='remove-sublist' onClick={() => handleRemoveSublist(index)}>Remove Sublist</button> :
      <button className='add-sublist'  onClick={() => handleAddSublist(index)}>Add Sublist</button>;
  };

  return (
    <>
      <span>{name}</span>
      {upArrow()}
      {downArrow()}
      {sublistButton(index)}
      <button onClick={() => onRemoveItem(index)}>Remove</button>
    </>
  );
};

export default ListItem;