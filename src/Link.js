import React from 'react';
import classNames from 'classnames';

export const Link = ({ 
  selectedFilter, 
  filterBy, 
  text, 
  filterTodos 
}) => {
  const url = filterBy === 'all' ? "#/" : `#/${filterBy}`;

  return (
    <a 
      href={url}
      className={classNames(
        {selected: filterBy === selectedFilter}
      )}
      onClick={() => filterTodos(filterBy)}
    >
      {text}
    </a>
  )
}
