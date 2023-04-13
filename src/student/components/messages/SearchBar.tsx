import React from 'react';
import classes from '../../assets/css/messages/SearchBar.module.css';

function SearchBar() {
  return (
    <div className={`${classes.searchBar} searchIcon`}>
      <input type="text" defaultValue="Search" />
    </div>
  );
}

export default SearchBar;
